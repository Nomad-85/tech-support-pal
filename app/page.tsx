import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Clock, CreditCard } from "lucide-react"
import type { Metadata } from 'next'

import { Button } from "@/components/ui/button"
import JsonLd, { createLocalBusinessSchema, createFAQPageSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Tech Support Pal - In-Home Technology Support",
  description: "Friendly, patient technology help in the comfort of your own home. We specialize in making technology simple for everyone.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tech Support Pal - In-Home Technology Support",
    description: "Friendly, patient technology help in the comfort of your own home. We specialize in making technology simple for everyone.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/header-image.png",
        width: 550,
        height: 550,
        alt: "Tech Support Pal - In-Home Technology Support",
      },
    ],
  },
}


// Dynamically import the ServicesShowcase component with loading state
const ServicesShowcase = dynamic(() => import('@/components/services-showcase'), {
  loading: () => (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 flex justify-center items-center">
        <div className="animate-pulse text-center">
          <p className="text-lg">Loading services...</p>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

export default function Home() {
  // FAQ data for structured data
  const faqData = [
    {
      question: "What types of technology support do you offer?",
      answer: "We offer a wide range of technology support services including computer setup and troubleshooting, smartphone and tablet assistance, smart home device setup, printer configuration, internet connectivity help, and more."
    },
    {
      question: "Do you come to my home?",
      answer: "Yes, we provide in-home technology support services, coming directly to your location for personalized assistance."
    },
    {
      question: "How much do your services cost?",
      answer: "Our service rates vary depending on the type of support needed. We offer transparent pricing with no hidden fees, and we'll provide a clear quote before beginning any work."
    },
    {
      question: "How soon can you help me?",
      answer: "In most cases, we can schedule an appointment within 24-48 hours of your request, depending on availability."
    }
  ];

  return (
    <div>
      {/* Add JSON-LD structured data */}
      <JsonLd data={createLocalBusinessSchema()} />
      <JsonLd data={createFAQPageSchema(faqData)} />
      <main className="flex-1">
        <section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" 
          aria-labelledby="hero-heading"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 
                  id="hero-heading" 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                >
                  In-Home Technology Support for Everyone
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Friendly, patient technology help in the comfort of your own home. We specialize in making technology
                  simple for everyone.
                </p>
                <div 
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                  role="navigation"
                  aria-label="Primary call to action"
                >
                  <Link 
                    href="/contact"
                    aria-label="Request service - contact us for technology help"
                  >
                    <Button 
                      size="lg" 
                      className="w-full min-[400px]:w-auto"
                    >
                      Request Service
                    </Button>
                  </Link>
                  <Link 
                    href="/services"
                    aria-label="View our technology support services"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full min-[400px]:w-auto"
                    >
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="/header-image.png"
                alt="Tech support specialist helping client with computer troubleshooting"
                width={550}
                height={550}
                className="object-contain scale-90 rounded-xl"
              />
            </div>
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24 lg:py-32"
          aria-labelledby="process-heading"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div 
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg"
                  aria-hidden="true"
                >
                  How It Works
                </div>
                <h2 
                  id="process-heading" 
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                >
                  Simple Process, Expert Help
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We make getting technology help easy and stress-free with our simple three-step process.
                </p>
              </div>
            </div>
            <div 
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12"
              role="list"
              aria-label="Three-step service process"
            >
              <div 
                className="flex flex-col items-center space-y-4 text-center"
                role="listitem"
              >
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden="true"
                >
                  <PhoneCall className="h-8 w-8" />
                </div>
                <h3 id="step1-heading" className="text-xl font-bold">1. Contact Us</h3>
                <p className="text-gray-500" aria-labelledby="step1-heading">
                  Fill out our simple contact form or give us a call to describe your technology issue.
                </p>
              </div>
              <div 
                className="flex flex-col items-center space-y-4 text-center"
                role="listitem"
              >
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden="true"
                >
                  <Clock className="h-8 w-8" />
                </div>
                <h3 id="step2-heading" className="text-xl font-bold">2. Schedule Visit</h3>
                <p className="text-gray-500" aria-labelledby="step2-heading">
                  We'll arrange a convenient time to visit your home and help with your technology.
                </p>
              </div>
              <div 
                className="flex flex-col items-center space-y-4 text-center"
                role="listitem"
              >
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white"
                  aria-hidden="true"
                >
                  <CreditCard className="h-8 w-8" />
                </div>
                <h3 id="step3-heading" className="text-xl font-bold">3. Problem Solved</h3>
                <p className="text-gray-500" aria-labelledby="step3-heading">
                  We'll solve your technology issues and only bill you when the job is complete.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ServicesShowcase services={[
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
        ]} />

        {/* comment out Testimonials */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
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
                alt="Happy client"
                width={550}
                height={550}
                className="object-contain scale-75 rounded-xl"
              />
            </div>
          </div>
        </section> */}

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partners & Affiliates</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Proud to work with trusted organizations in our community.
                </p>
              </div>
            </div>
            <div className="mx-auto flex flex-wrap justify-center items-center gap-8 py-12">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/IL-COC-logo-dark-800px.webp"
                  alt="Illinois Continuity of Care Association Logo"
                  width={300}
                  height={150}
                  className="object-contain"
                />
                <p className="text-center text-gray-600 font-medium">Illinois Continuity of Care Association</p>
              </div>
              {/* Additional partner logos can be added here in the future */}
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
    </div>
  )
}
