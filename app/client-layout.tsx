'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { Menu, LogOut, LayoutDashboard, Pencil } from 'lucide-react'
import { HiOutlineBriefcase, HiOutlineEnvelope, HiOutlineSparkles, HiOutlineUser } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'

const primaryLinks = [
  { href: '/about', label: 'About', icon: HiOutlineUser },
  { href: '/portfolio', label: 'Portfolio', icon: HiOutlineBriefcase },
  { href: 'http://visualhq.space', label: 'Agency', icon: HiOutlineSparkles },
  { href: '/contact', label: 'Contact', icon: HiOutlineEnvelope },
]

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
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

  const isActiveLink = (href: string) => {
    if (!href.startsWith('/')) return false
    return href === '/' ? pathname === '/' : pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`sticky top-0 z-50 bg-background ${isScrolled ? 'border-b border-border' : ''}`}>
        <nav className="max-w-6xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between text-foreground">
          <h2 className="text-xl font-bold">
            <Link href="/" className="transition-colors">
              Jide Pinheiro
            </Link>
          </h2>

          <ul className={`hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground ${!user ? 'ml-auto' : ''}`}>
            {primaryLinks.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`flex items-center gap-2 transition-colors ${isActiveLink(href) ? 'text-foreground' : 'hover:text-foreground'}`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {user && (
              <>
                <Link href="/admin/portfolio" className="hidden sm:block">
                  <Button variant="outline" size="sm" className="text-[10px] uppercase tracking-[0.2em] gap-2">
                    <Pencil className="w-3 h-3" />
                    Edit Portfolio
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="overflow-hidden border border-border h-8 w-8 rounded">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName || 'Profile'} className="w-full h-full object-cover" />
                      ) : (
                        <HiOutlineUser className="w-4 h-4" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 text-[10px] uppercase tracking-[0.2em]">
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
                <div className="absolute top-16 left-0 h-screen w-full bg-background border-t border-border">
                  <nav className="flex flex-col items-start p-4 text-xl uppercase tracking-[0.15em]">
                    <Link href="/" className="w-full border-b border-border py-4" onClick={() => setIsMobileMenuOpen(false)}>
                      Home
                    </Link>
                    {primaryLinks.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={label}
                        href={href}
                        className="flex items-center gap-3 w-full border-b border-border py-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-6 h-6" />
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 px-4 pb-8 md:px-8">
        <div className="max-w-6xl mx-auto border-t border-b border-foreground py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            </div>
            <div className="space-y-8">
              <p className="max-w-3xl text-2xl leading-10">
                Brand consulting across positioning, messaging, and digital expression.
              </p>
              <div className="grid gap-4 border-t border-border pt-5 md:grid-cols-4">
                <a href="mailto:jide.pinheiro@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  jide.pinheiro@gmail.com
                </a>
                <Link href="https://www.linkedin.com/in/jidepinheiro/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </Link>
                <Link href="https://github.com/Cybvr" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </Link>
                <Link href="https://www.toptal.com/designers/resume/jide-pinheiro" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Toptal
                </Link>
              </div>
              <div className="grid gap-3 border-t border-border pt-5 text-sm text-muted-foreground md:grid-cols-[minmax(0,1fr)_auto]">
                <p>Jide Pinheiro</p>
                <p>(c) {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
