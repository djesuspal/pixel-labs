'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { Button } from '@/components/ui/button'

// Sample blog posts data
const posts = [
  {
    id: '1',
    title: 'Understanding Token Extensions on Solana',
    excerpt: 'A deep dive into how token extensions are revolutionizing the Solana ecosystem',
    date: 'March 5, 2024',
    author: 'Denis Jesus Palma Abanto',
    slug: 'understanding-token-extensions'
  },
  {
    id: '2',
    title: 'Building Resilient Infrastructure for Blockchain Applications',
    excerpt: 'Lessons learned from scaling Solana infrastructure and how to apply them to your projects',
    date: 'February 22, 2024',
    author: 'Denis Jesus Palma Abanto',
    slug: 'resilient-blockchain-infrastructure'
  },
  {
    id: '3',
    title: 'The Future of Web3 Development',
    excerpt: 'How emerging patterns and tools are shaping the next generation of decentralized applications',
    date: 'January 18, 2024',
    author: 'Denis Jesus Palma Abanto',
    slug: 'future-of-web3-development'
  }
]

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Pixel Labs</title>
        <meta name="description" content="Insights and updates from Pixel Labs on blockchain technology, Solana development, and Web3 trends" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-20 flex items-center border-b fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
          <Link href="/" className="flex items-center gap-2 cursor-pointer h-20 py-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-high-resolution-logo-transparent%20(2)-RKttFAOiwcuzP4wxnobtCDK5sjA6Dl.png"
              alt="Pixel Labs Logo - Denis Jesus Palma Abanto's Web3 Development Company"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="ml-auto flex items-center gap-8" aria-label="Main navigation">
            <Link href="/" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/#products" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/denis-jesus-palma-abanto" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
        </header>
        <main className="flex-1 pt-20">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pixel Labs Blog</h1>
                <p className="mt-4 text-gray-500 md:text-xl">
                  Insights and updates from our team on blockchain technology, Solana development, and Web3 trends.
                </p>
              </div>
              <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                  <article key={post.id} className="overflow-hidden rounded-lg border shadow-sm">
                    <div className="bg-[#0f1711] h-40 flex items-center justify-center">
                      <span className="text-white text-5xl font-thin">PL</span>
                    </div>
                    <div className="p-6">
                      <time dateTime={post.date} className="text-xs text-gray-500">{post.date}</time>
                      <h2 className="mt-2 text-xl font-semibold">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2 text-gray-500 text-sm">{post.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="rounded-full bg-gray-100 h-8 w-8 flex items-center justify-center">
                          <span>DJ</span>
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <div className="mt-4">
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="outline" className="w-full">Read More</Button>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 Pixel Labs, Inc. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6" aria-label="Footer navigation">
            <Link href="/" className="text-xs hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/#products" className="text-xs hover:underline underline-offset-4">
              Products
            </Link>
            <Link href="/denis-jesus-palma-abanto" className="text-xs hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-xs hover:underline underline-offset-4">
              Blog
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}
