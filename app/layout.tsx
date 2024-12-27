
import ClientLayout from './client-layout'
import { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Canvas - Image Generation',
  description: 'Create artwork and images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-plus-jakarta`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
