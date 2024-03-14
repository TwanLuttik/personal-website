import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Twan Luttik',
  description: 'Welcome into my place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script defer data-domain="twanluttik.com" src="https://plausible.io/js/script.js"></Script>
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
