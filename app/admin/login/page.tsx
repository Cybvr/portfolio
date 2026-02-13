
'use client'

import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/admin");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/admin");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    if (loading) return null;

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-8 text-center">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
                        <HiOutlineLockClosed className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold font-syne tracking-tight">Admin Access</h1>
                        <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-widest">
                            Please sign in to continue
                        </p>
                    </div>
                </div>

                <div className="bg-card border border-border rounded-[32px] p-8 shadow-sm">
                    <Button
                        onClick={handleLogin}
                        variant="outline"
                        className="w-full h-12 gap-3 rounded-xl font-medium"
                    >
                        <FcGoogle className="h-5 w-5" />
                        Continue with Google
                    </Button>

                    <div className="mt-8 pt-8 border-t border-border">
                        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest leading-loose">
                            Security Notice:<br />
                            Access is restricted to authorized users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
