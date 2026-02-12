
import { Metadata } from 'next'
import { Old_Standard_TT, DM_Sans } from 'next/font/google'
import './styles/globals.css'
import ClientLayout from './client-layout'

const oldStandardTT = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-old-standard',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
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
