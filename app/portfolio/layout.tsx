import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected brand, digital, and product work by Jide Pinheiro.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
