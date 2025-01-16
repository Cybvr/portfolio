
import { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './styles/globals.css'
import ClientLayout from './client-layout'

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoMono.variable} font-roboto-mono`} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
