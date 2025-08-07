import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Clock, CreditCard } from "lucide-react"
import type { Metadata } from 'next'
import React from "react";

import { Button } from "@/components/ui/button"
import JsonLd, { createLocalBusinessSchema } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Tech Support Services - Tech Support Pal",
  description: "Browse our range of in-home technology support services including phone setup, internet troubleshooting, computer support, TV setup, and more for seniors and non-technical users.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Tech Support Services - Tech Support Pal",
    description: "Browse our range of in-home technology support services including phone setup, internet troubleshooting, computer support, TV setup, and more for seniors and non-technical users.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/services-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Support Pal Services",
      },
    ],
  },
}

// Dynamically import the ServicesGrid component with loading state
const ServicesGrid = dynamic(() => import('@/components/services-grid'), {
  loading: () => (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6 flex justify-center items-center">
        <div className="animate-pulse text-center">
          <p className="text-lg">Loading services...</p>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

export default function ServicesPage() {
  // Define services array for both UI rendering and structured data
  const services = [
    {
      title: "Phone Setup & Transfers",
      description:
        "We'll help you set up your new smartphone or tablet and transfer all your contacts, photos, and apps from your old device. We can also help with email setup, app installation, and basic training.",
      image: "/phone-transfer.png",
      features: [
        "New phone setup and configuration",
        "Data transfer from old devices",
        "Email and account setup",
        "App installation and organization",
        "Basic usage training",
      ],
    },
    {
      title: "Internet & Cable Setup",
      description:
        "Get help with your internet connection, WiFi setup, and cable or streaming services. We'll help you understand your bills, optimize your services, and ensure you're getting the best value.",
      image: "/internet-cable.png",
      features: [
        "WiFi router setup and optimization",
        "Internet troubleshooting",
        "Cable and streaming account setup",
        "Bill review and service optimization",
        "Network security setup",
      ],
    },
    {
      title: "TV & Entertainment Systems",
      description:
        "We'll help you set up and configure your TV, sound system, and remotes. We can also help you understand how to use your entertainment system and troubleshoot any issues.",
      image: "/soundbar.png",
      features: [
        "TV setup and configuration",
        "Remote control programming",
        "Sound system setup",
        "Cable box and DVR setup",
        "Basic usage training",
      ],
    },
    {
      title: "Computer Support",
      description:
        "Get help with your Windows PC or Apple Mac computer. We can help with setup, updates, troubleshooting, and basic training to help you get the most out of your computer.",
      image: "/computer-support.png",
      features: [
        "Computer setup and configuration",
        "Software updates and installation",
        "Data backup solutions",
        "Performance optimization",
        "Basic usage training",
      ],
    },
    {
      title: "Streaming Device Setup",
      description:
        "We'll help you set up and use streaming devices like Apple TV, Roku, and Amazon Fire Stick. We can also help you understand how to access your favorite shows and movies.",
      features: [
        "Streaming device installation",
        "Account setup for streaming services",
        "Content organization",
        "Remote control setup",
        "Basic usage training",
      ],
    },
    {
      title: "Printer Assistance",
      description:
        "Get help setting up your printer, connecting it to your devices wirelessly, and troubleshooting any printing issues. We can also help with scanner setup and basic usage.",
      image: "/printer.png",
      features: [
        "Printer setup and configuration",
        "Wireless printing setup",
        "Scanner setup",
        "Ink replacement guidance",
        "Troubleshooting print issues",
      ],
    },
  ]



  return (
    <div>
      {/* Add JSON-LD structured data */}
      <JsonLd data={createLocalBusinessSchema()} />
      <main className="flex-1">
        <section 
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" 
          role="region" 
          aria-labelledby="services-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 id="services-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of technology support services to help everyone, regardless of their
                  technical experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24" 
          role="region" 
          aria-labelledby="services-heading"
        >
          <div className="container px-4 md:px-6">
            <ServicesGrid services={services} />
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24 bg-gray-50" 
          role="region" 
          aria-labelledby="beyond-basics-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="beyond-basics-heading" className="text-2xl font-bold mb-4">Beyond the Basics</h2>
              <p className="text-gray-600 leading-relaxed">
                These are just some of the services we offer, but our expertise extends far beyond this list. 
                No tech support challenge is too big or too complex for us to handle. Whether you're facing 
                a simple setup issue or a complex system-wide problem, we have the knowledge and experience 
                to help you resolve it.
              </p>
              <p className="text-gray-600 mt-4">
                Don't see what you need? Just let us know what you're dealing with, and we'll help you find 
                the perfect solution. We're here to make technology work for you, no matter what.
              </p>
            </div>
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24 bg-primary text-white" 
          role="region" 
          aria-labelledby="contact-cta-heading"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 id="contact-cta-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a Different Service?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't see what you need? Contact us anyway! We're happy to discuss your specific technology needs.
                </p>
              </div>
              <Link 
                href="/contact" 
                aria-label="Contact us about custom technology support services"
              >
                <Button size="lg" variant="secondary" className="mt-4">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
