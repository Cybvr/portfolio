'use client'

import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import {
    HiOutlinePlus,
    HiOutlinePencilSquare,
    HiOutlineTrash,
    HiOutlineArrowLeft,
    HiOutlineEye,
    HiOutlineEllipsisVertical,
} from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@/types/blog";
import DeleteConfirmDialog from "@/components/admin/DeleteConfirmDialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function formatPostDate(value?: string) {
    if (!value) return "No publish date";

    const parsedDate = new Date(value.length === 10 ? `${value}T00:00:00` : value);
    if (Number.isNaN(parsedDate.getTime())) return value;

    return parsedDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default function BlogManagement() {
    const router = useRouter();
    const { toast } = useToast();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/admin/login");
            } else {
                fetchPosts();
            }
        });
        return () => unsubscribe();
    }, [router]);

    async function fetchPosts() {
        try {
            const q = query(collection(db, 'jpblog'), orderBy('date', 'desc'));
            const querySnapshot = await getDocs(q);
            const data = querySnapshot.docs.map(d => ({ ...d.data() })) as BlogPost[];
            setPosts(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, "jpblog", id));
            toast({ title: "Post deleted" });
            await fetchPosts();
        } catch (error) {
            toast({ title: "Error deleting post", variant: "destructive" });
            throw error;
        }
    };

    if (loading) return (
        <div className="h-screen flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em]">
            Loading Blog...
        </div>
    );

    return (
        <div className="min-h-screen bg-background p-4 sm:p-8 md:p-12">
            <div className="max-w-7xl mx-auto space-y-12">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div className="space-y-4">
                        <Link href="/admin">
                            <Button variant="ghost" size="sm" className="font-mono text-[10px] uppercase tracking-widest px-0 hover:bg-transparent">
                                <HiOutlineArrowLeft className="w-4 h-4 mr-2" />
                                Back to Dashboard
                            </Button>
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold font-syne tracking-tight">Blog</h1>
                    </div>

                    <Link href="/admin/blog/new">
                        <Button className="rounded-xl gap-2 font-medium h-12 px-6 shadow-lg shadow-black/5">
                            <HiOutlinePlus className="w-5 h-5" />
                            Add Post
                        </Button>
                    </Link>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            role="link"
                            tabIndex={0}
                            aria-label={`Open ${post.title}`}
                            onClick={() => router.push(`/blog/${post.id}`)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    router.push(`/blog/${post.id}`);
                                }
                            }}
                            className="flex cursor-pointer flex-col overflow-hidden rounded-sm border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            {post.coverImage || post.thumbnail ? (
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image src={(post.coverImage || post.thumbnail) as string} alt={post.title} fill className="object-cover" />
                                </div>
                            ) : null}
                            <div className="flex flex-1 flex-col gap-6 p-8">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-foreground">
                                            <span>{post.category}</span>
                                            {post.status === 'draft' && <span className="text-destructive">• Draft</span>}
                                        </div>
                                        <h3 className="text-2xl font-bold font-syne tracking-tight">{post.title}</h3>
                                        <p className="text-sm leading-relaxed text-foreground">
                                            {formatPostDate(post.date)}
                                        </p>
                                    </div>
                                    <div
                                        className="shrink-0"
                                        onClick={(event) => event.stopPropagation()}
                                        onKeyDown={(event) => event.stopPropagation()}
                                    >
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-10 w-10 rounded-sm"
                                                    aria-label={`More actions for ${post.title}`}
                                                >
                                                    <HiOutlineEllipsisVertical className="h-5 w-5" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48">
                                                <DropdownMenuLabel>Post actions</DropdownMenuLabel>
                                                <DropdownMenuItem onSelect={() => router.push(`/blog/${post.id}`)}>
                                                    <HiOutlineEye />
                                                    View detail
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onSelect={() => router.push(`/admin/blog/${post.id}`)}>
                                                    <HiOutlinePencilSquare />
                                                    Edit post
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DeleteConfirmDialog
                                                    itemType="post"
                                                    itemName={post.title}
                                                    onConfirm={() => handleDelete(post.id)}
                                                    trigger={
                                                        <DropdownMenuItem
                                                            onSelect={(event) => event.preventDefault()}
                                                            className="text-destructive focus:text-destructive"
                                                        >
                                                            <HiOutlineTrash />
                                                            Delete post
                                                        </DropdownMenuItem>
                                                    }
                                                />
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {posts.length === 0 && !loading && (
                    <div className="text-center py-24 border border-dashed border-border rounded-sm">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                            No posts yet. Click “Add Post” to create your first one.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
