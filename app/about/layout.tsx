import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn how Jide Pinheiro works across brand strategy, positioning, messaging, and digital expression.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
