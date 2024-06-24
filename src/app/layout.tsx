import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@components/containers/Providers/Providers'

import Header from '@components/containers/Layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swissify',
  description: 'Swissify CRM',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header text='Swissify' />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
