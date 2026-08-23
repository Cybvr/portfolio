'use client'

import { auth, db, storage } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";
import { useToast } from "@/hooks/use-toast";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { blogContentToHtml } from "@/lib/blog-content";
import {
    HiOutlineArrowLeft,
    HiOutlineXMark,
    HiOutlineCloudArrowUp,
    HiOutlineCheck
} from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";

interface BlogEditorProps {
    postId?: string; // If present, we are editing
}

function slugify(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

export default function BlogEditor({ postId }: BlogEditorProps) {
    const router = useRouter();
    const { toast } = useToast();
    const [post, setPost] = useState<Partial<BlogPost>>({
        id: '',
        title: '',
        excerpt: '',
        content: [],
        category: '',
        author: 'Jide Pinheiro',
        readTime: '',
        date: '',
        coverImage: '',
        status: 'published',
    });
    const [contentHtml, setContentHtml] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState<string | null>(null);
    const [originalId, setOriginalId] = useState<string | null>(null);
    // Track whether the slug was hand-edited, so we stop auto-deriving it from the title.
    const [slugEdited, setSlugEdited] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/admin/login");
            } else if (postId) {
                fetchPost();
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, [postId, router]);

    async function fetchPost() {
        try {
            const docRef = doc(db, 'jpblog', postId!);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as BlogPost;
                setPost(data);
                setContentHtml(blogContentToHtml(data.content));
                setOriginalId(data.id);
            } else {
                toast({ title: "Post not found", variant: "destructive" });
                router.push("/admin/blog");
            }
        } catch (error) {
            console.error("Error fetching post:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleFileUpload = async (file: File, field: keyof BlogPost) => {
        if (!file) return;
        setUploading(field);
        const storageRef = ref(storage, `blog/${Date.now()}_${file.name}`);
        try {
            if (!auth.currentUser) {
                throw new Error("You must be signed in to upload images.");
            }

            // uploadBytes returns a promise. uploadBytesResumable returns an
            // UploadTask, which must be observed separately before its result
            // can be used.
            const snapshot = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(snapshot.ref);
            setPost((prev) => ({ ...prev, [field]: url }));
            toast({ title: "Image uploaded" });
        } catch (error) {
            console.error("Blog image upload failed:", error);
            toast({
                title: "Upload failed",
                description: error instanceof Error ? error.message : "Please try again.",
                variant: "destructive",
            });
        } finally {
            setUploading(null);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!post.id) {
            toast({ title: "Post ID (slug) is required", variant: "destructive" });
            return;
        }
        if (!post.title) {
            toast({ title: "Title is required", variant: "destructive" });
            return;
        }
        setSaving(true);

        try {
            const docRef = doc(db, "jpblog", post.id);

            if (originalId && originalId !== post.id) {
                await deleteDoc(doc(db, "jpblog", originalId));
            }

            const dataToSave = {
                ...post,
                content: contentHtml,
                date: post.date || new Date().toISOString().slice(0, 10),
                dateUpdated: new Date().toISOString(),
                dateCreated: post.dateCreated || new Date().toISOString(),
            };

            await setDoc(docRef, dataToSave);
            toast({ title: "Post successfully saved!" });
            router.push("/admin/blog");
        } catch (error) {
            console.error("Error saving post:", error);
            toast({
                title: "Error saving post",
                description: error instanceof Error ? error.message : "Please try again.",
                variant: "destructive",
            });
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div className="h-screen flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em]">
            Loading Editor...
        </div>
    );

    const SectionTitle = ({ title }: { title: string }) => (
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground border-b border-border pb-2 mb-6">{title}</h3>
    );

    const Label = ({ children, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
        <label className="text-[10px] font-mono uppercase tracking-widest ml-1 mb-2 block" {...props}>{children}</label>
    );

    const ImageUploader = ({ field, label }: { field: keyof BlogPost, label: string }) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const value = post[field] as string | undefined;

        return (
            <div className="space-y-4">
                <Label>{label}</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {value ? (
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-border group col-span-2">
                            <Image src={value} alt={label} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                            <button
                                type="button"
                                onClick={() => setPost({ ...post, [field]: '' })}
                                className="absolute top-2 right-2 bg-background/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <HiOutlineXMark className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            disabled={uploading === field}
                            className="aspect-square rounded-2xl border-2 border-dashed border-border hover:border-secondary transition-colors flex flex-col items-center justify-center p-4 disabled:opacity-50"
                        >
                            <HiOutlineCloudArrowUp className="w-6 h-6 mb-2 text-foreground" />
                            <span className="text-[10px] uppercase font-mono tracking-tighter text-foreground">
                                {uploading === field ? 'Uploading...' : 'Upload'}
                            </span>
                            <input
                                type="file"
                                ref={inputRef}
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileUpload(file, field);
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
                        <Link href="/admin/blog">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <HiOutlineArrowLeft className="w-5 h-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold font-syne tracking-tight">
                                {originalId ? `Editing: ${post.title}` : 'New Post'}
                            </h1>
                            <p className="font-mono text-[9px] uppercase tracking-widest text-foreground">
                                Blog Builder
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/admin/blog">
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
                                    Save Post
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 py-12 space-y-24">
                {/* Identity */}
                <section className="space-y-8">
                    <SectionTitle title="Identity & Meta" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <Label>Title</Label>
                            <Input
                                value={post.title}
                                onChange={e => {
                                    const title = e.target.value;
                                    setPost(prev => ({
                                        ...prev,
                                        title,
                                        // Auto-derive the slug on new posts until the user edits it manually.
                                        id: !originalId && !slugEdited ? slugify(title) : prev.id,
                                    }));
                                }}
                                placeholder="e.g. Positioning before pixels"
                                className="h-12 rounded-xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>URL Slug (auto-generated)</Label>
                            <Input
                                value={post.id}
                                onChange={e => {
                                    setSlugEdited(true);
                                    setPost({ ...post, id: slugify(e.target.value) });
                                }}
                                placeholder="positioning-before-pixels"
                                className="h-12 rounded-xl font-mono text-sm"
                            />
                            <p className="text-[10px] text-foreground ml-1">Fills in from the title. Edit only if you want a custom URL.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Input value={post.category} onChange={e => setPost({ ...post, category: e.target.value })} placeholder="e.g. Strategy" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="blog-publish-date">Publish Date</Label>
                            <DatePicker
                                id="blog-publish-date"
                                value={post.date}
                                onChange={date => setPost({ ...post, date })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Read Time</Label>
                            <Input value={post.readTime} onChange={e => setPost({ ...post, readTime: e.target.value })} placeholder="5 min read" className="h-12 rounded-xl" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <Label>Author</Label>
                            <Input value={post.author} onChange={e => setPost({ ...post, author: e.target.value })} placeholder="Jide Pinheiro" className="h-12 rounded-xl" />
                        </div>
                        <div className="space-y-2">
                            <Label>Status</Label>
                            <select
                                value={post.status}
                                onChange={e => setPost({ ...post, status: e.target.value as BlogPost['status'] })}
                                className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm"
                            >
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label>Excerpt (Card / SEO description)</Label>
                        <Textarea value={post.excerpt} onChange={e => setPost({ ...post, excerpt: e.target.value })} placeholder="One or two sentence summary..." className="min-h-[80px] rounded-2xl" />
                    </div>
                </section>

                {/* Content */}
                <section className="space-y-8">
                    <SectionTitle title="Content" />
                    <div className="space-y-2">
                        <Label>Body</Label>
                        <RichTextEditor value={contentHtml} onChange={setContentHtml} />
                    </div>
                </section>

                {/* Assets */}
                <section className="space-y-12">
                    <SectionTitle title="Images" />
                    <ImageUploader field="coverImage" label="Cover Image" />
                </section>
            </main>
        </div>
    );
}
