'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { href: "/portfolio/selectsportsusa/players", label: "TEAMS" },
  { href: "/portfolio/selectsportsusa/training", label: "TRAINING" },
  { href: "/portfolio/selectsportsusa/camps", label: "CAMPS & CLINICS" },
  { href: "/portfolio/selectsportsusa/leagues", label: "LEAGUES" },
  { href: "/portfolio/selectsportsusa/resources", label: "RESOURCES" },
  { href: "/portfolio/selectsportsusa/about", label: "ABOUT US" },
  { href: "/portfolio/selectsportsusa/contact", label: "CONTACT" }
]

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if current path is in the auth directory
  const isAuthPage = pathname.includes('/auth')

  // If it's an auth page, return just the children without header/footer
  if (isAuthPage) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-[#1a2d5a] text-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">SSU</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigationItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="transition-colors hover:text-gray-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:text-gray-200" 
              asChild
            >
              <Link href="/auth/login">Log In</Link>
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white" 
              asChild
            >
              <Link href="/auth/signup">Get Started</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            className="md:hidden text-white"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-6 bg-[#1a2d5a]">
            <nav className="flex flex-col space-y-3 px-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full text-white" asChild>
                  <Link href="/auth/login">Log In</Link>
                </Button>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-[#1a2d5a] text-white">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4">
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-primary">About</h4>
            <p className="text-sm text-muted-foreground">
              SelectSportsUSA connects young athletes with top sports programs across the nation.
              Find the perfect fit for your athletic journey.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sm text-primary">Programs</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/teams" className="hover:text-muted-foreground">Teams</Link>
              <Link href="/training" className="hover:text-muted-foreground">Training</Link>
              <Link href="/camps" className="hover:text-muted-foreground">Camps & Clinics</Link>
              <Link href="/leagues" className="hover:text-muted-foreground">Leagues</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sm text-primary">Resources</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/resources/athletes" className="hover:text-muted-foreground">For Athletes</Link>
              <Link href="/resources/coaches" className="hover:text-muted-foreground">For Coaches</Link>
              <Link href="/resources/programs" className="hover:text-muted-foreground">For Programs</Link>
              <Link href="/blog" className="hover:text-muted-foreground">Blog</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-sm text-primary">Support</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/contact" className="hover:text-muted-foreground">Contact Us</Link>
              <Link href="/help" className="hover:text-muted-foreground">Help Center</Link>
              <Link href="/privacy" className="hover:text-muted-foreground">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-muted-foreground">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container flex flex-col md:flex-row justify-between items-center py-6 px-4">
            <p className="text-sm text-primary">
              © {new Date().getFullYear()} SelectSportsUSA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-primary hover:text-muted-foreground">
                Twitter
              </Link>
              <Link href="#" className="text-primary hover:text-muted-foreground">
                Facebook
              </Link>
              <Link href="#" className="text-primary hover:text-muted-foreground">
                Instagram
              </Link>
              <Link href="#" className="text-primary hover:text-muted-foreground">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}