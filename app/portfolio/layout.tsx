
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="bg-background border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-foreground">
          <Link href="/" className="text-xl font-bold transition-colors">
            Jide Pinheiro
          </Link>
          <Link href="/portfolio">
            <Button variant="ghost">Portfolio</Button>
          </Link>
        </nav>
      </header>
      {children}
    </>
  )
}
