import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Pixel Labs',
  description: 'Insights and updates from Pixel Labs on blockchain technology, Solana development, and Web3 trends',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}
