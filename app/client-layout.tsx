
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import { Toaster } from "@/components/ui/toaster"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-background border-b border-border'
        }`}>
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-foreground">
          <Link href="/" className="text-xl font-bold transition-colors">
            Jide Pinheiro
          </Link>

          <ul className="hidden md:flex items-center space-x-8 text-muted-foreground">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-foreground transition-colors">Products</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="http://visual.ng" className="flex items-center">
                      VisualHQ
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="http://jujuagi.com" className="flex items-center">
                      Juju
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="http://prune.cc" className="flex items-center">
                      Prune
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-foreground transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
            {isMobileMenuOpen && (
              <div className="absolute top-16 left-0 h-screen w-full bg-background shadow-md">
                <nav className="flex flex-col items-start p-4 space-y-4">
                  <Link href="/" className="text-6xl font-bold hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/portfolio" className="text-6xl font-bold hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Portfolio
                  </Link>
                  <div className="space-y-4 py-4 pl-4">
                    <Link href="http://visual.ng" className="block text-3xl hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      VisualHQ
                    </Link>
                    <Link href="http://jujuagi.com" className="block text-3xl hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Juju
                    </Link>
                    <Link href="http://prune.cc" className="block text-3xl hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      Prune
                    </Link>
                  </div>
                  <Link href="/contact" className="text-6xl font-bold hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t mt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground">
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-muted-foreground">Lagos, Nigeria</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Skills</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>UX Research & Strategy</li>
                <li>Web & App Development</li>
                <li>Business Development</li>
                <li>Brand Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  <Link href="https://www.linkedin.com/in/jidepinheiro/" className="hover:text-gray-900 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Cybvr" className="hover:text-gray-900 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://www.toptal.com/designers/resume/jide-pinheiro" className="hover:text-gray-900 transition-colors">
                    Toptal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Jide Pinheiro. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  )
}
