
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Menu, LogOut, LayoutDashboard, Pencil } from 'lucide-react'
import { HiOutlineUser, HiOutlineBriefcase, HiOutlineEnvelope, HiOutlineSparkles, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { Toaster } from "@/components/ui/toaster"
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? ''
          : ' '
          }`}
      >
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-foreground">
          <h2 className="text-xl font-bold">
            <Link href="/" className="transition-colors">
              Jide Pinheiro
            </Link>
          </h2>

          <ul className={`bg-card p-4 rounded-full hidden md:flex items-center space-x-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-4 ${!user ? 'ml-auto' : ''}`}>
            <li>
              <Link href="/about" className="hover:text-foreground transition-colors flex items-center gap-2">
                <HiOutlineUser className="w-4 h-4" />
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-foreground transition-colors flex items-center gap-2">
                <HiOutlineBriefcase className="w-4 h-4" />
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="http://visualhq.space" className="hover:text-foreground transition-colors flex items-center gap-2">
                <HiOutlineSparkles className="w-4 h-4" />
                Studio
              </Link>
            </li>
            <li>
              <Link href="http://jujuapp.co" className="hover:text-foreground transition-colors flex items-center gap-2">
                <HiOutlineGlobeAlt className="w-4 h-4" />
                Juju
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground transition-colors flex items-center gap-2">
                <HiOutlineEnvelope className="w-4 h-4" />
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            {user && (
              <>
                <Link href="/admin/portfolio" className="hidden sm:block">
                  <Button variant="outline" size="sm" className="font-mono text-[10px] uppercase tracking-widest gap-2 bg-primary/5 hover:bg-primary/10 border-primary/20">
                    <Pencil className="w-3 h-3" />
                    Edit Portfolio
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full overflow-hidden border border-border h-8 w-8">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || 'Profile'} className="w-full h-full object-cover" />
                      ) : (
                        <HiOutlineUser className="w-4 h-4" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 font-mono text-[10px] uppercase tracking-widest">
                    <div className="px-2 py-1.5 text-muted-foreground truncate border-b border-border/50 mb-1">
                      {user.email}
                    </div>
                    <DropdownMenuItem asChild>
                      <Link href="/admin" className="flex items-center gap-2 cursor-pointer">
                        <LayoutDashboard className="w-4 h-4" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/admin/portfolio" className="flex items-center gap-2 cursor-pointer sm:hidden">
                        <Pencil className="w-4 h-4" />
                        Edit Portfolio
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
              {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 h-screen w-full bg-background shadow-md">
                  <nav className="flex flex-col items-start p-4 space-y-4 font-mono text-xl uppercase tracking-widest">
                    <Link href="/" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                    <Link href="/about" className="hover:text-foreground transition-colors flex items-center gap-3 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <HiOutlineUser className="w-6 h-6" />
                      About
                    </Link>
                    <Link href="/portfolio" className="hover:text-foreground transition-colors flex items-center gap-3 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <HiOutlineBriefcase className="w-6 h-6" />
                      Portfolio
                    </Link>
                    <Link href="http://visual.ng" className="hover:text-foreground transition-colors flex items-center gap-3 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <HiOutlineSparkles className="w-6 h-6" />
                      VisualHQ
                    </Link>
                    <Link href="http://jujuapp.co" className="hover:text-foreground transition-colors flex items-center gap-3 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <HiOutlineGlobeAlt className="w-6 h-6" />
                      Juju
                    </Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors flex items-center gap-3 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      <HiOutlineEnvelope className="w-6 h-6" />
                      Contact
                    </Link>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="mt-20 px-4 pb-8">
        <div className="max-w-6xl mx-auto bg-[#DDE5C9] rounded-[40px] py-16 px-8 text-center text-[#2C3E2D]">
          <h2 className="text-3xl md:text-5xl uppercase mb-8 tracking-tight">
            The Portfolio of Jide Pinheiro
          </h2>

          <div className="mb-8 font-mono">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium block mb-4">
              Connect
            </span>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-medium">
              <Link href="https://www.linkedin.com/in/jidepinheiro/" className="hover:opacity-60 transition-opacity">
                LinkedIn
              </Link>
              <Link href="https://github.com/Cybvr" className="hover:opacity-60 transition-opacity">
                GitHub
              </Link>
              <Link href="https://www.toptal.com/designers/resume/jide-pinheiro" className="hover:opacity-60 transition-opacity">
                Toptal
              </Link>
            </div>
          </div>

          <div className="pt-8 text-xs opacity-60">
            <p>© {new Date().getFullYear()} . All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
