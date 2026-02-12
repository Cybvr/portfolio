
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronRight } from 'lucide-react'
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
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-background border-b border-border'
        }`}>
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-foreground">
          <Link href="/" className="text-xl font-bold transition-colors">
            Jide Pinheiro
          </Link>

          <ul className="hidden md:flex items-center space-x-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
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
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
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
                <nav className="flex flex-col items-start p-4 space-y-4 font-mono text-xl uppercase tracking-widest">
                  <Link href="/" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/about" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                  </Link>
                  <Link href="/portfolio" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    Portfolio
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      Products
                      <ChevronRight className={`w-6 h-6 transition-transform ${productsOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {productsOpen && (
                      <div className="space-y-4 py-4 pl-4 text-lg">
                        <Link href="http://visual.ng" className="block hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                          VisualHQ
                        </Link>
                        <Link href="http://jujuagi.com" className="block hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                          Juju
                        </Link>
                        <Link href="http://prune.cc" className="block hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                          Prune
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/contact" className="hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
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
      <footer className="mt-20 px-4 pb-8">
        <div className="max-w-6xl mx-auto bg-[#DDE5C9] rounded-[40px] py-16 px-8 text-center text-[#2C3E2D]">
          <h2 className="text-3xl md:text-5xl uppercase mb-8 tracking-tight">
            The Portfolio of Jide Pinheiro
          </h2>

          <div className="mb-8 font-mono">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium block mb-4">Connect</span>
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
