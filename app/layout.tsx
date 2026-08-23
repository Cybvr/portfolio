import React, { Suspense } from 'react'
import { Metadata } from 'next'
import './styles/globals.css'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: 'Jide Pinheiro - Brand Consultant',
  description: 'Brand consultant focused on positioning, messaging, and digital expression.',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '256x256' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/favicon.png', type: 'image/png', sizes: '256x256' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Goudy+Bookletter+1911&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
      </body>
    </html>
  )
}
