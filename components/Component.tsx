'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Head from 'next/head'

export default function Component() {
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
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
    if (hash === '#about') scrollToSection(aboutRef)
    else if (hash === '#products') scrollToSection(productsRef)
    else if (hash === '#contact') scrollToSection(contactRef)
  }, [])

  return (
    <>
      <Head>
        <link rel="canonical" href="https://yourdomain.com" />
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
            <button className="text-base font-medium text-black dark:text-white hover:underline underline-offset-4" onClick={() => scrollToSection(aboutRef)}>
              About
            </button>
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
          <section ref={homeRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32 bg-[#0f1711]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Building stronger protocols together
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Pixel Labs was founded by Denis Jesus Palma Abanto, bringing years of experience as Solana's Lead SRE to solve the toughest problems in Web3.
                  Crypto ecosystems rely on robust protocols, and we believe those are best built out in the open, with multiple contributors.
                </p>
                <Button className="bg-white text-[#0f1711] hover:bg-gray-100" onClick={() => scrollToSection(contactRef)}>
                  Contact us
                </Button>
              </div>
            </div>
          </section>

          <section ref={aboutRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My name is Denis Jesus Palma Abanto and I was first SRE at Solana, I built all of Solana's infrastructure from scratch when it was a 10-person team in early 2021. 
                  Through dedication and expertise, I was promoted twice—to Senior SRE and then to Lead SRE—managing a team of five. 
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

          {/* Rest of the sections remain the same but with improved alt texts and aria-labels */}
          
          <section ref={productsRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32 bg-[#0f1711]">
            <div className="container grid items-center gap-6 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Our Products</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our suite of Web3 development tools and services
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="relative group overflow-hidden rounded-lg border p-6 bg-black/40">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Token Extensions</h3>
                    <p className="text-gray-300">
                      Token extensions are the next generation Solana token program designed to enhance functionality at the protocol level.
                    </p>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg border p-6 bg-black/40">
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

          <section ref={contactRef as React.RefObject<HTMLElement>} className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Build Together</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Collaborate with me and our expert engineers to access guidance in building, launching, and maintaining leading Web3 protocols.
                </p>
                <Button className="bg-[#0f1711] text-white hover:bg-[#1a2419]">Contact us</Button>
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
            <button className="text-xs hover:underline underline-offset-4" onClick={() => scrollToSection(aboutRef)}>
              About
            </button>
            <button className="text-xs hover:underline underline-offset-4" onClick={() => scrollToSection(contactRef)}>
              Contact
            </button>
          </nav>
        </footer>
      </div>
    </>
  )
}
