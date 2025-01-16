
import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Sites',
  description: 'Collection of sites',
}

export default function SitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
