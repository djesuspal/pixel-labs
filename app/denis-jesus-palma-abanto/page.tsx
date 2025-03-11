'use client'

import { useRef } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Head from 'next/head'

export default function ProfilePage() {
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <>
      <Head>
        <title>Denis Jesus Palma Abanto | Pixel Labs</title>
        <meta name="description" content="Learn more about Denis Jesus Palma Abanto, founder of Pixel Labs and former Solana Lead SRE" />
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
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My name is Denis Jesus Palma Abanto and I was first SRE at Solana, I built all of Solana's infrastructure from scratch when it was a 10-person team in early 2021. 
                  Through dedication and expertise, I was promoted twice—to Senior SRE and then to Lead SRE—managing a team of five. 
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over a decade of experience in building and securing critical infrastructure, I've developed a deep understanding of blockchain technology and the unique challenges of Web3 development.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Pixel Labs, I lead a team of passionate engineers dedicated to building robust, secure, and innovative protocols on the Solana blockchain.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  alt="Denis Jesus Palma Abanto - Founder of Pixel Labs and Former Solana Lead SRE"
                  className="rounded-full aspect-square object-cover border"
                  height={400}
                  width={400}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Denis%20Jesus%20Palma%20Abanto%2020-GDhzXSy4ULVEyMthoHHgISjLuc9ta5.png"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f1711]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Experience & Expertise</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With a background in Site Reliability Engineering, I bring a unique perspective to blockchain development.
                </p>
                <div className="grid gap-6 lg:grid-cols-3 w-full max-w-4xl mt-8">
                  <div className="rounded-lg border border-gray-600 p-6 bg-black/40">
                    <h3 className="text-xl font-bold text-white mb-3">Solana Infrastructure</h3>
                    <p className="text-gray-300">
                      Built and maintained Solana's core infrastructure during its rapid growth phase, ensuring stability and security.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-600 p-6 bg-black/40">
                    <h3 className="text-xl font-bold text-white mb-3">Web3 Development</h3>
                    <p className="text-gray-300">
                      Expert in developing decentralized applications and protocols with a focus on performance and security.
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-600 p-6 bg-black/40">
                    <h3 className="text-xl font-bold text-white mb-3">Team Leadership</h3>
                    <p className="text-gray-300">
                      Led engineering teams through complex technical challenges while maintaining high standards of code quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={contactRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in collaborating or learning more about my work? Reach out to discuss how we can build something amazing together.
                </p>
                <Link href="mailto:contact@pixelabs.lat">
                  <Button className="bg-[#0f1711] text-white hover:bg-[#1a2419]">
                    Email Us
                  </Button>
                </Link>
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
