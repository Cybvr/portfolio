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
} from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@/types/blog";
import DeleteConfirmDialog from "@/components/admin/DeleteConfirmDialog";

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
                        <div key={post.id} className="bg-card border border-border rounded-[40px] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                {post.coverImage || post.thumbnail ? (
                                    <Image src={(post.coverImage || post.thumbnail) as string} alt={post.title} fill className="object-cover" />
                                ) : null}
                            </div>
                            <div className="p-8 flex-1 flex flex-col gap-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-foreground">
                                        <span>{post.category}</span>
                                        {post.status === 'draft' && <span className="text-destructive">• Draft</span>}
                                    </div>
                                    <h3 className="text-2xl font-bold font-syne tracking-tight group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-foreground text-sm line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                                    <Link href={`/admin/blog/${post.id}`}>
                                        <Button variant="outline" size="icon" className="rounded-xl border-border hover:bg-secondary">
                                            <HiOutlinePencilSquare className="w-5 h-5" />
                                        </Button>
                                    </Link>
                                    <DeleteConfirmDialog
                                        itemType="post"
                                        itemName={post.title}
                                        onConfirm={() => handleDelete(post.id)}
                                        trigger={
                                            <Button
                                                variant="destructive"
                                                size="icon"
                                                className="rounded-xl"
                                                aria-label={`Delete ${post.title}`}
                                            >
                                                <HiOutlineTrash className="w-5 h-5" />
                                            </Button>
                                        }
                                    />
                                    <div className="ml-auto flex items-center">
                                        <span className="font-mono text-[9px] uppercase tracking-widest text-foreground opacity-50">
                                            {post.date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {posts.length === 0 && !loading && (
                    <div className="text-center py-24 border border-dashed border-border rounded-[40px]">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                            No posts yet. Click “Add Post” to create your first one.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
