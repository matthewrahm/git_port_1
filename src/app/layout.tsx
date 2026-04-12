import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Matthew Rahm',
  description: 'Software engineer. Crypto native.',
  openGraph: {
    title: 'Matthew Rahm',
    description: 'Software engineer. Crypto native.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Rahm',
    description: 'Software engineer. Crypto native.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased bg-bg-base text-text-primary">
        {children}
      </body>
    </html>
  )
}
