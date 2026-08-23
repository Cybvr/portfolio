'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import { Menu, LogOut, LayoutDashboard, Pencil } from 'lucide-react'
import { HiOutlineBriefcase, HiOutlineEnvelope, HiOutlineNewspaper, HiOutlineSparkles, HiOutlineUser } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import { ToptalBadge } from '@/components/ToptalBadge'

const primaryLinks = [
  { href: '/about', label: 'About', icon: HiOutlineUser },
  { href: '/portfolio', label: 'Portfolio', icon: HiOutlineBriefcase },
  { href: '/blog', label: 'Blog', icon: HiOutlineNewspaper },
  { href: 'https://visualcns.com', label: 'CNS', icon: HiOutlineSparkles },
  { href: '/contact', label: 'Contact', icon: HiOutlineEnvelope },
]

const textLinkStyles = 'underline decoration-border underline-offset-4 transition-colors hover:text-blue-600 hover:decoration-blue-600'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
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

  const userMenu = user ? (
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
        <div className="px-2 py-1.5 text-foreground truncate border-b border-border/50 mb-1">
          {user.email}
        </div>
        <DropdownMenuItem asChild>
          <Link href="/admin" className="flex items-center gap-2 cursor-pointer">
            <LayoutDashboard className="w-4 h-4" />
            Admin Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/admin/portfolio" className="flex items-center gap-2 cursor-pointer">
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
  ) : null

  return (
    <div className="min-h-screen">
      {/* Desktop side navigation */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-56 flex-col justify-between border-r border-border bg-background px-6 py-8 text-foreground">
        <div className="space-y-10">
          <Link
            href="/"
            aria-label="Jide Pinheiro home"
            className="block w-fit rounded-sm transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Image
              src="/images/jide-pinheiro-logo.png"
              alt=""
              width={1254}
              height={1254}
              priority
              unoptimized
              className="h-auto w-36"
            />
          </Link>

          <nav>
            <ul className="space-y-1 text-[11px] uppercase tracking-[0.2em] text-foreground">
              {primaryLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 py-2 ${textLinkStyles} ${isActiveLink(href) ? 'text-foreground' : ''}`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {user && (
          <div className="space-y-4">
            <Link href="/admin" className="block">
              <Button variant="outline" size="sm" className="w-full text-[10px] uppercase tracking-[0.2em] gap-2">
                <LayoutDashboard className="w-3 h-3" />
                Admin Dashboard
              </Button>
            </Link>
            {userMenu}
          </div>
        )}
      </aside>

      {/* Mobile top header */}
      <header className="md:hidden sticky top-0 z-50 bg-background border-b border-border">
        <nav className="h-16 px-4 flex items-center justify-between text-foreground">
          <Link
            href="/"
            aria-label="Jide Pinheiro home"
            className="block w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Image
              src="/images/jide-pinheiro-logo.png"
              alt=""
              width={1254}
              height={1254}
              priority
              unoptimized
              className="h-12 w-12 object-contain"
            />
          </Link>

          <div className="flex items-center gap-2">
            {userMenu}
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 h-screen w-full bg-background border-t border-border">
            <nav className="flex flex-col items-start p-4 text-xl uppercase tracking-[0.15em]">
              <Link href="/" className={`w-full border-b border-border py-4 ${textLinkStyles}`} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              {primaryLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className={`flex w-full items-center gap-3 border-b border-border py-4 ${textLinkStyles}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="w-6 h-6" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Content offset for the desktop sidebar */}
      <div className="flex min-h-screen flex-col md:pl-56">
        <main className="flex-1">{children}</main>

        <footer className="mt-20 px-4 pb-8 md:px-8">
        <div className="max-w-6xl mx-auto border-t border-b border-foreground py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-foreground">Contact</p>
              <div className="scale-[0.5] origin-top-left -mb-20">
                <ToptalBadge />
              </div>
              <p className="max-w-[220px] text-[11px] leading-5 text-foreground">
                Selected as Toptal top 3% talent for the combination of strategic thinking, design rigor, and digital
                execution.
              </p>
            </div>
            <div className="space-y-8">
              <p className="max-w-3xl text-2xl leading-10">
                Brand consulting across positioning, messaging, and digital expression.
              </p>
              <div className="grid gap-4 border-t border-border pt-5 md:grid-cols-5">
                {primaryLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`text-sm uppercase tracking-[0.15em] text-foreground ${textLinkStyles}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className="grid gap-4 border-t border-border pt-5 md:grid-cols-4">
                <a href="mailto:jide.pinheiro@gmail.com" className={`text-sm text-foreground ${textLinkStyles}`}>
                  jide.pinheiro@gmail.com
                </a>
                <Link href="https://www.linkedin.com/in/jidepinheiro/" className={`text-sm text-foreground ${textLinkStyles}`}>
                  LinkedIn
                </Link>
                <Link href="https://github.com/Cybvr" className={`text-sm text-foreground ${textLinkStyles}`}>
                  GitHub
                </Link>
                <Link href="https://www.toptal.com/designers/resume/jidepinheiro" className={`text-sm text-foreground ${textLinkStyles}`}>
                  Toptal
                </Link>
              </div>
              <div className="grid gap-3 border-t border-border pt-5 text-sm text-foreground md:grid-cols-[minmax(0,1fr)_auto]">
                <p>Jide Pinheiro</p>
                <p>(c) {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>

      <Toaster />
    </div>
  )
}
