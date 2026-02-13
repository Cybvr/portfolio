"use client";
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-md' : 'bg-background border-b'
        }`}>
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            Jide Pinheiro
          </Link>
          <ul className="hidden md:flex items-center space-x-8">
            <li><Link href="http://visual.ng" className="hover:text-primary transition-colors">VisualHQ</Link></li>
            <li><Link href="http://jujuagi.com" className="hover:text-primary transition-colors">Juju</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
          </ul>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background transition-all duration-300 transform md:hidden ${isOpen ? 'translate-y-16' : '-translate-y-full'
          } flex flex-col`} // Added flex and flex-col for proper layout
        style={{ height: 'calc(100vh - 4rem)', overflowY: 'auto' }} // Added overflowY to handle scrolling in mobile menu
      >
        <nav className="flex flex-col p-4 space-y-4"> {/* Added space-y-4 for better spacing between items */}
          <Link
            href="/"
            className="w-full text-3xl font-bold hover:text-primary transition-colors p-4 border-b"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="http://visual.ng"
            className="w-full text-3xl font-bold hover:text-primary transition-colors p-4 border-b"
            onClick={() => setIsOpen(false)}
          >
            VisualHQ
          </Link>
          <Link
            href="http://jujuapp.co"
            className="w-full text-3xl font-bold hover:text-primary transition-colors p-4 border-b"
            onClick={() => setIsOpen(false)}
          >
            Juju
          </Link>
          <Link
            href="/portfolio"
            className="w-full text-3xl font-bold hover:text-primary transition-colors p-4 border-b"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </>
  )
}
