'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Head from 'next/head'
import Link from 'next/link'

export default function Component() {
  const homeRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#products') scrollToSection(productsRef)
    else if (hash === '#contact') scrollToSection(contactRef)
  }, [])

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.pixelabs.lat/" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-20 flex items-center border-b fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2 cursor-pointer h-20 py-4" onClick={() => scrollToSection(homeRef)}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-high-resolution-logo-transparent%20(2)-RKttFAOiwcuzP4wxnobtCDK5sjA6Dl.png"
              alt="Pixel Labs Logo - Denis Jesus Palma Abanto's Web3 Development Company"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>
          <nav className="ml-auto flex items-center gap-8" aria-label="Main navigation">
            <button className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4" onClick={() => scrollToSection(homeRef)}>
              Home
            </button>
            <button className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4" onClick={() => scrollToSection(productsRef)}>
              Products
            </button>
            <Link href="/denis-jesus-palma-abanto" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4">
              Blog
            </Link>
            <Button 
              variant="outline" 
              className="ml-4 px-6 text-base bg-white text-black hover:bg-gray-100 border-gray-200" 
              onClick={() => scrollToSection(contactRef)}
            >
              Contact us
            </Button>
          </nav>
        </header>
        <main className="flex-1 pt-20">
          {/* Hero section - Dark green */}
          <section ref={homeRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32 bg-[#0f1711]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Building stronger protocols together
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Pixel Labs was founded by Denis Jesus Palma Abanto, bringing years of experience as Solana Lead SRE to solve the toughest problems in Web3.
                  Crypto ecosystems rely on robust protocols, and we believe those are best built out in the open, with multiple contributors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-[#0f1711] hover:bg-gray-100" onClick={() => scrollToSection(contactRef)}>
                    Contact us
                  </Button>
                  <Link href="/denis-jesus-palma-abanto">
                    <Button variant="outline" className="text-white border-white hover:bg-white/10">
                      About Denis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Products section - Deep blue color that complements the green */}
          <section ref={productsRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32 bg-[#101b2b]">
            <div className="container grid items-center gap-6 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Products</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our suite of Web3 development tools and services
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="relative group overflow-hidden rounded-lg border border-gray-700 p-6 bg-black/40">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Token Extensions</h3>
                    <p className="text-gray-300">
                      Token extensions are the next generation Solana token program designed to enhance functionality at the protocol level.
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg border border-gray-700 p-6 bg-black/40">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Solana Client Application SDK</h3>
                    <p className="text-gray-300">
                      Build quickly for the web, Node, and React Native with our open-source, Apache 2.0 licensed developer tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Blog section - Light background for contrast */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-5xl">Latest from Our Blog</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights and updates from our team on blockchain technology and Web3 trends
                </p>
                <div className="grid gap-6 lg:grid-cols-3 w-full max-w-5xl mt-8">
                  <div className="rounded-lg border shadow-sm p-6 bg-white">
                    <time dateTime="2024-03-05" className="text-xs text-gray-500 mb-2 block">March 5, 2024</time>
                    <h3 className="text-xl font-bold text-black mb-2">Understanding Token Extensions on Solana</h3>
                    <p className="text-gray-500 mb-4 text-sm">A deep dive into how token extensions are revolutionizing the Solana ecosystem</p>
                    <Link href="/blog/understanding-token-extensions" className="text-sm font-medium text-[#0f1711] hover:underline">
                      Read More →
                    </Link>
                  </div>
                  <div className="rounded-lg border shadow-sm p-6 bg-white">
                    <time dateTime="2024-02-22" className="text-xs text-gray-500 mb-2 block">February 22, 2024</time>
                    <h3 className="text-xl font-bold text-black mb-2">Building Resilient Infrastructure</h3>
                    <p className="text-gray-500 mb-4 text-sm">Lessons learned from scaling Solana infrastructure and how to apply them to your projects</p>
                    <Link href="/blog/resilient-blockchain-infrastructure" className="text-sm font-medium text-[#0f1711] hover:underline">
                      Read More →
                    </Link>
                  </div>
                  <div className="rounded-lg border shadow-sm p-6 bg-white">
                    <time dateTime="2024-01-18" className="text-xs text-gray-500 mb-2 block">January 18, 2024</time>
                    <h3 className="text-xl font-bold text-black mb-2">The Future of Web3 Development</h3>
                    <p className="text-gray-500 mb-4 text-sm">How emerging patterns and tools are shaping the next generation of decentralized applications</p>
                    <Link href="/blog/future-of-web3-development" className="text-sm font-medium text-[#0f1711] hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
                <Link href="/blog" className="mt-8">
                  <Button variant="outline" className="border-[#0f1711] text-[#0f1711] hover:bg-[#0f1711] hover:text-white">
                    View All Posts
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Contact section - Medium green that sits between hero and products sections */}
          <section ref={contactRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32 bg-[#1a2419]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Let's Build Together</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Collaborate with us and our expert engineers to access guidance in building, launching, and maintaining leading Web3 protocols.
                </p>
                <Button className="bg-white text-[#1a2419] hover:bg-gray-100">Contact us</Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 Pixel Labs, Inc. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6" aria-label="Footer navigation">
            <button className="text-xs hover:underline underline-offset-4" onClick={() => scrollToSection(homeRef)}>
              Home
            </button>
            <button className="text-xs hover:underline underline-offset-4" onClick={() => scrollToSection(productsRef)}>
              Products
            </button>
            <Link href="/denis-jesus-palma-abanto" className="text-xs hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/blog" className="text-xs hover:underline underline-offset-4">
              Blog
            </Link>
            <button className="text-xs hover:underline underline-offset-4" onClick={() => scrollToSection(contactRef)}>
              Contact
            </button>
          </nav>
        </footer>
      </div>
    </>
  )
}
