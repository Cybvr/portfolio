
import { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './styles/globals.css'
import ClientLayout from './client-layout'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata: Metadata = {
  title: 'Jide Pinheiro - Portfolio',
  description: 'Product Designer and Developer',
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
