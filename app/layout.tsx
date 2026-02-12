
import { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './styles/globals.css'
import ClientLayout from './client-layout'

const oldStandardTT = localFont({
  src: [
    {
      path: '../public/fonts/OldStandardTT-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/OldStandardTT-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/OldStandardTT-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-old-standard',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
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
      <body className={`${oldStandardTT.variable} ${dmSans.variable} font-sans antialiased`} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
