"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white" role="banner">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Tech Support Pal Home">
          <Image
            src="/favicon.png"
            alt="Tech Support Pal Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold">Tech Support Pal</span>
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Main navigation">
          <Link href="/" className="text-lg font-medium hover:text-primary">Home</Link>
          <Link href="/services" className="text-lg font-medium hover:text-primary">Services</Link>
          <Link href="/help-center" className="text-lg font-medium hover:text-primary">Help Center</Link>
          <Link href="/about" className="text-lg font-medium hover:text-primary">About</Link>
          <Link href="/contact" className="text-lg font-medium hover:text-primary">Contact</Link>
          <Link href="/image-optimization" className="text-lg font-medium hover:text-primary">Images</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="hidden md:flex" aria-label="Request technical support">
              <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
              Request Help
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" role="navigation" aria-label="Mobile navigation">
          <div className="container py-4 flex flex-col space-y-4 bg-white border-t" role="menu" aria-label="Mobile navigation links">
            <Link 
              href="/" 
              role="menuitem"
              className="text-lg font-medium hover:text-primary px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              role="menuitem"
              className="text-lg font-medium hover:text-primary px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/help-center" 
              role="menuitem"
              className="text-lg font-medium hover:text-primary px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Help Center
            </Link>
            <Link 
              href="/about" 
              role="menuitem"
              className="text-lg font-medium hover:text-primary px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-lg font-medium hover:text-primary px-4 py-2"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/image-optimization" 
              className="text-lg font-medium hover:text-primary px-4 py-2"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              Images
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button size="lg" className="w-full" aria-label="Request technical support">
                <PhoneCall className="mr-2 h-4 w-4" aria-hidden="true" />
                Request Help
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
