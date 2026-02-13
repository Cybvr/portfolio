
'use client'

import { auth, db, storage } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
    HiOutlineArrowLeft,
    HiOutlinePhoto,
    HiOutlineXMark,
    HiOutlinePlus,
    HiOutlineCloudArrowUp,
    HiOutlineCheck,
    HiOutlineTrash,
    HiOutlineSparkles
} from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/types/portfolio";

interface ProjectEditorProps {
    projectId?: string; // If present, we are editing
}

export default function ProjectEditor({ projectId }: ProjectEditorProps) {
    const router = useRouter();
    const { toast } = useToast();
    const [project, setProject] = useState<Partial<PortfolioProject>>({
        id: '',
        title: '',
        description: '',
        content: '',
        featuredImage: '',
        gallery: [],
        imageSet1: [],
        imageSet2: [],
        imageSet3: [],
        tags: [],
        technologies: [],
        industry: '',
        client: '',
        status: 'published',
        features: [],
        challenges: '',
        solutions: '',
        insight: '',
        strategy: '',
        outcomes: '',
        press: [],
        embed: '',
        url: '',
        liveUrl: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [generating, setGenerating] = useState(false);
    const [uploading, setUploading] = useState<string | null>(null); // key of field being uploaded
    const [originalId, setOriginalId] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/admin/login");
            } else if (projectId) {
                fetchProject();
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [projectId, router]);

    async function fetchProject() {
        try {
            const docRef = doc(db, 'jpportfolio', projectId!);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as PortfolioProject;
                setProject(data);
                setOriginalId(data.id);
            } else {
                toast({ title: "Project not found", variant: "destructive" });
                router.push("/admin/portfolio");
            }
        } catch (error) {
            console.error("Error fetching project:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleFileUpload = async (file: File, field: keyof PortfolioProject, isArray = false) => {
        if (!file) return;
        setUploading(field);
        const storageRef = ref(storage, `portfolio/${Date.now()}_${file.name}`);
        try {
            const uploadTask = await uploadBytesResumable(storageRef, file);
            const url = await getDownloadURL(uploadTask.ref);

            if (isArray) {
                const currentArr = (project[field] as string[]) || [];
                setProject({ ...project, [field]: [...currentArr, url] });
            } else {
                setProject({ ...project, [field]: url });
            }
            toast({ title: "Image uploaded" });
        } catch (error) {
            toast({ title: "Upload failed", variant: "destructive" });
        } finally {
            setUploading(null);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!project.id) {
            toast({ title: "Project ID is required", variant: "destructive" });
            return;
        }
        setSaving(true);

        try {
            const docRef = doc(db, "jpportfolio", project.id);

            if (originalId && originalId !== project.id) {
                await deleteDoc(doc(db, "jpportfolio", originalId));
            }

            const dataToSave = {
                ...project,
                dateUpdated: new Date().toISOString(),
                dateCreated: project.dateCreated || new Date().toISOString(),
            };

            await setDoc(docRef, dataToSave);
            toast({ title: "Project successfully saved!" });
            router.push("/admin/portfolio");
        } catch (error) {
            toast({ title: "Error saving project", variant: "destructive" });
        } finally {
            setSaving(false);
        }
    };

    const handleAIGenerate = async () => {
        if (!project.description && !project.content) {
            toast({
                title: "Incomplete info",
                description: "Add a project summary or main content first so I have something to work with!",
                variant: "destructive"
            });
            return;
        }

        setGenerating(true);
        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    description: project.description,
                    content: project.content
                }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || "Generation failed");

            // Update only empty fields
            const updates: Partial<PortfolioProject> = {};
            let updatedCount = 0;

            const fieldsToUpdate = ['challenges', 'solutions', 'insight', 'strategy', 'outcomes'] as const;

            fieldsToUpdate.forEach(field => {
                if (!project[field] && data[field]) {
                    updates[field] = data[field];
                    updatedCount++;
                }
            });

            if (updatedCount > 0) {
                setProject(prev => ({ ...prev, ...updates }));
                toast({
                    title: "AI Generation Complete",
                    description: `Populated ${updatedCount} empty fields. Review them below!`
                });
            } else {
                toast({
                    title: "Nothing to update",
                    description: "All narrative fields are already filled. AI won't overwrite your content."
                });
            }
        } catch (error: any) {
            toast({
                title: "Generation failed",
                description: error.message,
                variant: "destructive"
            });
        } finally {
            setGenerating(false);
        }
    };

    if (loading) return (
        <div className="h-screen flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em]">
            Loading Editor...
        </div>
    );

    const SectionTitle = ({ title }: { title: string }) => (
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border-b border-border pb-2 mb-6">{title}</h3>
    );

    const Label = ({ children }: { children: React.ReactNode }) => (
        <label className="text-[10px] font-mono uppercase tracking-widest ml-1 mb-2 block">{children}</label>
    );

    const ImageUploader = ({ field, label, isArray = false }: { field: keyof PortfolioProject, label: string, isArray?: boolean }) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const value = project[field];

        return (
            <div className="space-y-4">
                <Label>{label}</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {!isArray && project[field] ? (
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border group col-span-2">
                            <Image src={value as string} alt={label} fill className="object-cover" />
                            <button
                                type="button"
                                onClick={() => setProject({ ...project, [field]: '' })}
                                className="absolute top-2 right-2 bg-background/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <HiOutlineXMark className="w-4 h-4" />
                            </button>
                        </div>
                    ) : isArray && Array.isArray(value) ? (
                        <>
                            {value.map((url, i) => (
                                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-border group">
                                    <Image src={url} alt={`${label} ${i}`} fill className="object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newArr = [...value];
                                            newArr.splice(i, 1);
                                            setProject({ ...project, [field]: newArr });
                                        }}
                                        className="absolute top-2 right-2 bg-background/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <HiOutlineXMark className="w-3 h-3" />
                                    </button>
                                </div>
                            ))}
                        </>
                    ) : null}

                    {(isArray || !project[field]) && (
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            disabled={uploading === field}
                            className="aspect-square rounded-2xl border-2 border-dashed border-border hover:border-secondary transition-colors flex flex-col items-center justify-center p-4 disabled:opacity-50"
                        >
                            <HiOutlineCloudArrowUp className="w-6 h-6 mb-2 text-muted-foreground" />
                            <span className="text-[10px] uppercase font-mono tracking-tighter text-muted-foreground">
                                {uploading === field ? 'Uploading...' : 'Upload'}
                            </span>
                            <input
                                type="file"
                                ref={inputRef}
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileUpload(file, field, isArray);
                                }}
                            />
                        </button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-background pb-24">
            <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
                <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/admin/portfolio">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <HiOutlineArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold font-syne tracking-tight">
                                {originalId ? `Editing: ${project.title}` : 'New Project'}
                            </h1>
                            <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                                Portfolio Builder
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/admin/portfolio">
                            <Button variant="ghost" className="font-mono text-[10px] uppercase tracking-widest hidden sm:flex">Discard</Button>
                        </Link>
                        <Button
                            onClick={handleSave}
                            disabled={saving}
                            className="h-12 px-8 rounded-xl font-bold font-syne shadow-lg shadow-black/5 flex gap-2"
                        >
                            {saving ? 'Saving...' : (
                                <>
                                    <HiOutlineCheck className="w-5 h-5" />
                                    Save Project
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-12 space-y-24">
                {/* Basic Section */}
                <section className="space-y-8">
                    <SectionTitle title="Identity & Context" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <Label>Project ID (URL Slug)</Label>
                            <Input
                                value={project.id}
                                onChange={e => setProject({ ...project, id: e.target.value })}
                                placeholder="e.g. honeywell-nigeria"
                                className="h-12 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Full Project Title</Label>
                            <Input
                                value={project.title}
                                onChange={e => setProject({ ...project, title: e.target.value })}
                                placeholder="e.g. Honeywell Nigeria Website"
                                className="h-12 rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <Label>Client Name</Label>
                            <Input value={project.client} onChange={e => setProject({ ...project, client: e.target.value })} placeholder="Company Name" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label>Industry</Label>
                            <Input value={project.industry} onChange={e => setProject({ ...project, industry: e.target.value })} placeholder="e.g. Fintech" className="h-12 rounded-xl" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Summary (Card Tagline)</Label>
                        <Input value={project.description} onChange={e => setProject({ ...project, description: e.target.value })} placeholder="One sentence pitch..." className="h-12 rounded-xl" />
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between border-b border-border pb-2 mb-6">
                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">The Story</h3>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={handleAIGenerate}
                            disabled={generating}
                            className="h-8 rounded-lg font-mono text-[9px] uppercase tracking-wider gap-2 bg-secondary/30 border-secondary/50 hover:bg-secondary/50"
                        >
                            <HiOutlineSparkles className={`w-3.5 h-3.5 ${generating ? 'animate-pulse' : ''}`} />
                            {generating ? 'AI Thinking...' : 'Generate with AI'}
                        </Button>
                    </div>
                    <div className="space-y-12">
                        <div className="space-y-2">
                            <Label>Main Overview Content</Label>
                            <Textarea value={project.content} onChange={e => setProject({ ...project, content: e.target.value })} placeholder="Detailed summary..." className="min-h-[200px] rounded-2xl" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-2">
                                <Label>Challenges</Label>
                                <Textarea value={project.challenges} onChange={e => setProject({ ...project, challenges: e.target.value })} placeholder="What was the problem?" className="min-h-[120px] rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label>Solutions</Label>
                                <Textarea value={project.solutions} onChange={e => setProject({ ...project, solutions: e.target.value })} placeholder="How was it fixed?" className="min-h-[120px] rounded-2xl" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-2">
                                <Label>Insight</Label>
                                <Textarea value={project.insight} onChange={e => setProject({ ...project, insight: e.target.value })} placeholder="Unique perspective found..." className="min-h-[120px] rounded-2xl" />
                            </div>
                            <div className="space-y-2">
                                <Label>Strategy</Label>
                                <Textarea value={project.strategy} onChange={e => setProject({ ...project, strategy: e.target.value })} placeholder="The approach taken..." className="min-h-[120px] rounded-2xl" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label>Outcomes</Label>
                            <Textarea value={project.outcomes} onChange={e => setProject({ ...project, outcomes: e.target.value })} placeholder="The results and impact..." className="min-h-[120px] rounded-2xl" />
                        </div>
                    </div>
                </section>

                {/* Assets Section */}
                <section className="space-y-12">
                    <SectionTitle title="Assets & Galleries" />
                    <ImageUploader field="featuredImage" label="Featured Image (Primary)" />
                    <div className="space-y-12 pt-8 border-t border-border">
                        <ImageUploader field="imageSet1" label="Image Set 1" isArray />
                        <ImageUploader field="imageSet2" label="Image Set 2" isArray />
                        <ImageUploader field="imageSet3" label="Image Set 3" isArray />
                        <ImageUploader field="gallery" label="Main Gallery" isArray />
                    </div>
                </section>

                {/* Technical Section */}
                <section className="space-y-8">
                    <SectionTitle title="Taxonomy & Links" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <Label>Tags (Comma separated)</Label>
                            <Input
                                value={project.tags?.join(', ')}
                                onChange={e => setProject({ ...project, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                placeholder="Web, Mobile, UI UX"
                                className="h-12 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Technologies (Comma separated)</Label>
                            <Input
                                value={project.technologies?.join(', ')}
                                onChange={e => setProject({ ...project, technologies: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                placeholder="Next.js, Tailwind, Firebase"
                                className="h-12 rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <Label>Project URL</Label>
                            <Input value={project.url} onChange={e => setProject({ ...project, url: e.target.value })} placeholder="Live site or Case study" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label>Live Demo</Label>
                            <Input value={project.liveUrl} onChange={e => setProject({ ...project, liveUrl: e.target.value })} placeholder="Working prototype URL" className="h-12 rounded-xl" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Embed HTML</Label>
                        <Textarea value={project.embed} onChange={e => setProject({ ...project, embed: e.target.value })} placeholder="<iframe>..." className="min-h-[100px] font-mono text-xs rounded-2xl" />
                    </div>
                </section>

                {/* Press Links Section */}
                <section className="space-y-8 pb-12">
                    <SectionTitle title="Press & Recognition" />
                    <div className="space-y-4">
                        {project.press?.map((item, i) => (
                            <div key={i} className="flex gap-4 items-end">
                                <div className="flex-1 space-y-2">
                                    <Label>Link Title</Label>
                                    <Input value={item.title} onChange={e => {
                                        const newPress = [...(project.press || [])];
                                        newPress[i].title = e.target.value;
                                        setProject({ ...project, press: newPress });
                                    }} className="h-12 rounded-xl" />
                                </div>
                                <div className="flex-[2] space-y-2">
                                    <Label>URL</Label>
                                    <Input value={item.url} onChange={e => {
                                        const newPress = [...(project.press || [])];
                                        newPress[i].url = e.target.value;
                                        setProject({ ...project, press: newPress });
                                    }} className="h-12 rounded-xl" />
                                </div>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-xl h-12 w-12 border border-border"
                                    onClick={() => {
                                        const newPress = [...(project.press || [])];
                                        newPress.splice(i, 1);
                                        setProject({ ...project, press: newPress });
                                    }}
                                >
                                    <HiOutlineTrash className="w-5 h-5 text-destructive" />
                                </Button>
                            </div>
                        ))}
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setProject({ ...project, press: [...(project.press || []), { title: '', url: '' }] })}
                            className="w-full h-12 rounded-xl font-mono text-[10px] uppercase tracking-widest gap-2"
                        >
                            <HiOutlinePlus className="w-4 h-4" />
                            Add Press Link
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
