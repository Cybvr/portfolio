
'use client'

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    HiOutlineBriefcase,
    HiOutlineArrowLeftOnRectangle,
    HiOutlineChartBar,
    HiOutlineSparkles,
    HiOutlineCog6Tooth
} from "react-icons/hi2";

export default function AdminDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/admin/login");
            } else {
                setUser(user);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    if (loading || !user) return (
        <div className="h-screen flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.3em]">
            Verifying Access...
        </div>
    );

    return (
        <div className="min-h-screen bg-background p-4 sm:p-8 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-12 border-b border-border">
                    <div className="space-y-1">
                        <h1 className="text-4xl md:text-5xl font-bold font-syne tracking-tight">Dashboard</h1>
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                            Welcome back, {user.displayName}
                        </p>
                    </div>
                    <Button
                        onClick={handleLogout}
                        variant="ghost"
                        className="font-mono text-[10px] uppercase tracking-widest gap-2"
                    >
                        <HiOutlineArrowLeftOnRectangle className="w-4 h-4" />
                        Sign Out
                    </Button>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link href="/admin/portfolio" className="group">
                        <div className="h-full bg-card border border-border p-8 rounded-[32px] transition-all duration-300 hover:bg-secondary/50 flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center transition-transform group-hover:scale-110">
                                <HiOutlineBriefcase className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-syne">Portfolio Management</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Add, edit, or remove projects from your portfolio collection.
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="group opacity-50 cursor-not-allowed">
                        <div className="h-full bg-card border border-border p-8 rounded-[32px] flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                                <HiOutlineChartBar className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-syne">Analytics</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    View traffic and engagement metrics (Coming soon).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="group opacity-50 cursor-not-allowed">
                        <div className="h-full bg-card border border-border p-8 rounded-[32px] flex flex-col gap-6">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                                <HiOutlineCog6Tooth className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold font-syne">Settings</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Configure your profile and global preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-secondary/20 rounded-[40px] p-8 md:p-12 border border-border">
                    <div className="flex items-center gap-4 mb-8 text-[#8B8B6B]">
                        <HiOutlineSparkles className="w-6 h-6" />
                        <h2 className="font-mono text-[10px] uppercase tracking-widest">Quick Tips</h2>
                    </div>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        To update your portfolio, click on "Portfolio Management". All changes are live immediately across the site.
                    </p>
                </section>
            </div>
        </div>
    );
}
