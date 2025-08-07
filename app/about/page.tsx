import dynamic from "next/dynamic"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import type { Metadata } from 'next'

// Import our OptimizedImage component
const OptimizedImage = dynamic(() => import('@/components/optimized-image'), {
  loading: () => <div className="aspect-video rounded-xl bg-gray-200 animate-pulse"></div>,
  ssr: true
})

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Tech Support Pal - Our Mission and Team",
  description: "Learn about Tech Support Pal's mission to make technology accessible and understandable for everyone, regardless of technical background or experience.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Tech Support Pal - Our Mission and Team",
    description: "Learn about Tech Support Pal's mission to make technology accessible and understandable for everyone, regardless of technical background or experience.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/travis-roesner.png",
        width: 250,
        height: 250,
        alt: "Travis Roesner - Founder & Lead Technician",
      },
    ],
  },
}


// Dynamically import the TeamSection component with loading state
const TeamSection = dynamic(() => import('@/components/team-section'), {
  loading: () => (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 flex justify-center items-center">
        <div className="animate-pulse text-center">
          <p className="text-lg">Loading team information...</p>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

export default function AboutPage() {
  return (
    <div>
      <main className="flex-1">
        <section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" 
          aria-labelledby="about-heading"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Tech Support Pal</h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tech Support Pal was founded with a simple mission: to make technology accessible and understandable
                  for everyone, regardless of their technical background or experience.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand that technology can be intimidating, but it doesn't have to be. Our patient, friendly
                  technicians take the time to explain things in plain language and ensure you're comfortable with your
                  devices.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We come to your home, work at your pace, and focus on teaching rather than just fixing. Our goal is to
                  empower you to use technology confidently and independently.
                </p>
              </div>
              <OptimizedImage
                src="/favicon.png"
                alt="Tech support specialist helping client with computer setup"
                type="hero"
                position="above-fold"
                importance="high"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24 lg:py-32" 
          aria-labelledby="approach-heading"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="approach-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What makes Tech Support Pal different from other technology support services?
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3" role="list" aria-label="Our service approach features">
              <div className="flex flex-col items-center space-y-4 text-center" role="listitem">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 id="feature-home-service" className="text-xl font-bold">In-Home Service</h3>
                <p className="text-gray-500" aria-labelledby="feature-home-service">
                  We come to you, so you can learn in the comfort of your own home with your own devices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center" role="listitem">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 id="feature-patient-teaching" className="text-xl font-bold">Patient Teaching</h3>
                <p className="text-gray-500" aria-labelledby="feature-patient-teaching">
                  We take our time to explain things clearly and never rush you through the learning process.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center" role="listitem">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 id="feature-ongoing-support" className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-gray-500" aria-labelledby="feature-ongoing-support">
                  We're available for follow-up questions and additional help whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <TeamSection />

        <section 
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white" 
          aria-labelledby="cta-heading"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule your in-home technology support appointment.
                </p>
              </div>
              <Link 
                href="/contact"
                aria-label="Contact us to schedule an appointment"
              >
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="mt-4"
                  aria-describedby="cta-heading"
                >
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
