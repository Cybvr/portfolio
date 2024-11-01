'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'
import './styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  // Check if we're in a portfolio subpage (but not the main portfolio page)
  const isPortfolioSubPage = pathname?.startsWith('/portfolio/') && pathname !== '/portfolio'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          {!isPortfolioSubPage && (
            <header className={`sticky top-0 z-50 transition-all duration-300 ${
              isScrolled ? 'bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-background border-b'
            }`}>
              <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
                  Jide Pinheiro
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-8">
                  <li>
                    <Link href="http://visual.ng" className="hover:text-primary transition-colors">
                      VisualHQ
                    </Link>
                  </li>
                  <li>
                    <Link href="http://jujuagi.com" className="hover:text-primary transition-colors">
                      Juju
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-primary transition-colors">
                      Portfolio
                    </Link>
                  </li>
                </ul>

                {/* Mobile Navigation */}
                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <nav className="flex flex-col space-y-4 mt-8">
                      <Link href="/" className="text-lg hover:text-primary transition-colors">
                        Home
                      </Link>
                      <Link href="/portfolio" className="text-lg hover:text-primary transition-colors">
                        Portfolio
                      </Link>
                    </nav>
                  </SheetContent>
                </Sheet>
              </nav>
            </header>
          )}
          <main className="flex-1">
            {children}
          </main>
          {!isPortfolioSubPage && (
            <footer className="border-t mt-20">
              <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Contact</h3>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                    <p className="text-gray-600">Member since January 21, 2022</p>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Skills</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>UX Research & Strategy</li>
                      <li>Web & App Development</li>
                      <li>Business Development</li>
                      <li>Brand Strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">Connect</h3>
                    <ul className="text-gray-600 space-y-2">
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
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-gray-600">
                  <p>&copy; {new Date().getFullYear()} Jide Pinheiro. All rights reserved.</p>
                </div>
              </div>
            </footer>
          )}
        </div>
      </body>
    </html>
  )
}