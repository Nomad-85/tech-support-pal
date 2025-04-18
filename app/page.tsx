import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Clock, CreditCard, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Tech Support Pal Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">Tech Support Pal</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-lg font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-lg font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="hidden md:flex">
                <PhoneCall className="mr-2 h-4 w-4" />
                Request Help
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
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
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  In-Home Technology Support for Seniors
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Friendly, patient technology help in the comfort of your own home. We specialize in making technology
                  simple for everyone.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Request Service
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/header-image.png"
                alt="Senior receiving tech support"
                width={550}
                height={550}
                className="object-contain scale-90 rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Process, Expert Help</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We make getting technology help easy and stress-free with our simple three-step process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <PhoneCall className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">1. Contact Us</h3>
                <p className="text-gray-500">
                  Fill out our simple contact form or give us a call to describe your technology issue.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">2. Schedule Visit</h3>
                <p className="text-gray-500">
                  We'll arrange a convenient time to visit your home and help with your technology.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <CreditCard className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">3. Problem Solved</h3>
                <p className="text-gray-500">
                  We'll solve your technology issues and only bill you when the job is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of technology support services to help you get the most out of your devices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              {[
                {
                  title: "Phone Setup & Transfers",
                  description: "Get help setting up a new phone or transferring data from your old device.",
                },
                {
                  title: "Internet & Cable Setup",
                  description: "Assistance with internet connections, WiFi setup, and cable/streaming services.",
                },
                {
                  title: "TV & Entertainment Systems",
                  description: "Setup and troubleshooting for TVs, remotes, sound systems, and streaming devices.",
                },
                {
                  title: "Computer Support",
                  description: "Help with Apple and Windows computers, including setup, updates, and troubleshooting.",
                },
                {
                  title: "Streaming Device Setup",
                  description: "Setup and instruction for Apple TV, Roku, Fire Stick, and other streaming devices.",
                },
                {
                  title: "Printer Assistance",
                  description: "Help with printer setup, wireless printing, and troubleshooting print issues.",
                },
              ].map((service, index) => (
                <div key={index} className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/services">
                <Button size="lg">View All Services</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <blockquote className="text-lg italic text-gray-500 border-l-4 pl-4 border-primary">
                  "I was struggling with my new smartphone until Tech Support Pal came to my rescue. They were patient,
                  kind, and explained everything in a way I could understand. Now I can video chat with my
                  grandchildren!"
                </blockquote>
                <p className="font-medium">- Margaret W., 72</p>
                <blockquote className="text-lg italic text-gray-500 border-l-4 pl-4 border-primary">
                  "After my wife passed away, I had no idea how to manage our online accounts. Tech Support Pal sorted
                  everything out and taught me how to handle it myself. Their service was invaluable."
                </blockquote>
                <p className="font-medium">- Robert T., 76</p>
              </div>
              <Image
                src="/testimonial-pic.png?height=550&width=550"
                alt="Happy senior client"
                width={550}
                height={550}
                className="object-contain scale-75 rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for Tech Help?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule your in-home technology support appointment.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="mt-4">
                  Request Service Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Tech Support Pal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
