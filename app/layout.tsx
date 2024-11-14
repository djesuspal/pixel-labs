import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denis Jesus Palma Abanto | Pixel Labs',
  description: 'Pixel Labs is a Solana-focused software development firm, building resilient, elegant, and impactful protocols. Led by Denis Jesus Palma Abanto, former Lead SRE at Solana.',
  openGraph: {
    title: 'Denis Jesus Palma Abanto | Pixel Labs',
    description: 'Pixel Labs is a Solana-focused software development firm, building resilient, elegant, and impactful protocols.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-high-resolution-logo-transparent%20(2)-RKttFAOiwcuzP4wxnobtCDK5sjA6Dl.png',
        width: 1200,
        height: 630,
        alt: 'Pixel Labs Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Jesus Palma Abanto | Pixel Labs',
    description: 'Pixel Labs is a Solana-focused software development firm, building resilient, elegant, and impactful protocols.',
  },
  keywords: [
    'Denis Jesus Palma Abanto',
    'Denis Palma Abanto',
    'Pixel Labs',
    'Solana',
    'Web3',
    'Blockchain',
    'Protocol Development',
    'SRE',
    'Site Reliability Engineering'
  ],
  authors: [{ name: 'Denis Jesus Palma Abanto' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
