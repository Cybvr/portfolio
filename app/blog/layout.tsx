import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on brand strategy, positioning, messaging, design, and building clearer businesses.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
