import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Jide Pinheiro for consulting, direction, and brand work.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
