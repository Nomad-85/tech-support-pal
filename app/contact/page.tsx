"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import type { Metadata } from 'next'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact Tech Support Pal - Get In-Home Tech Support",
  description: "Contact Tech Support Pal for in-home technology support services. Reach out via phone, email, or our contact form for personalized assistance with your tech issues.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Tech Support Pal - Get In-Home Tech Support",
    description: "Contact Tech Support Pal for in-home technology support services. Reach out via phone, email, or our contact form for personalized assistance with your tech issues.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/contact-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Support Pal Contact Information",
      },
    ],
  },
}

// Dynamically import the ContactForm component with loading state
const ContactForm = dynamic(() => import('@/components/contact-form'), {
  loading: () => (
    <div className="flex justify-center items-center py-12">
      <div className="animate-pulse text-center">
        <p className="text-lg">Loading form...</p>
      </div>
    </div>
  ),
  ssr: false
})

export default function ContactPage() {
  return (
    <div>
      <main 
        className="flex-1" 
        role="main" 
        aria-labelledby="contact-heading"
      >
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100 dark:bg-gray-800"
          aria-labelledby="contact-heading"
          role="banner"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 
                  id="contact-heading" 
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                >
                  Contact Us
                </h1>
                <p 
                  id="contact-description" 
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
                  aria-describedby="contact-heading"
                >
                  Get in touch with our team for personalized technology support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="w-full py-12 md:py-24" 
          aria-label="Contact options"
          role="region"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle id="request-service-title">Request Service</CardTitle>
                    <CardDescription id="service-form-description">
                      Fill out the form below to request an in-home technology support appointment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle id="contact-info-title">Contact Information</CardTitle>
                    <CardDescription id="contact-info-description">Reach out to us directly using the information below.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="space-y-4" 
                      role="list" 
                      aria-labelledby="contact-info-title"
                      aria-describedby="contact-info-description"
                    >
                      <div 
                        className="flex items-start gap-4" 
                        role="listitem"
                        aria-label="Phone contact information"
                      >
                        <Phone className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                        <div>
                          <h3 id="phone-title" className="font-medium">Phone</h3>
                          <p className="text-sm text-gray-500">
                            <a 
                              href="tel:+15103167632" 
                              aria-label="Call our support line at (510) 316-7632"
                              aria-describedby="phone-title"
                            >
                              (510) 316-7632
                            </a>
                          </p>
                        </div>
                      </div>
                      <div 
                        className="flex items-start gap-4" 
                        role="listitem"
                        aria-label="Email contact information"
                      >
                        <Mail className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                        <div>
                          <h3 id="email-title" className="font-medium">Email</h3>
                          <p className="text-sm text-gray-500">
                            <a 
                              href="mailto:support@techsupportpal.com" 
                              aria-label="Email our support team at support@techsupportpal.com"
                              aria-describedby="email-title"
                            >
                              support@techsupportpal.com
                            </a>
                          </p>
                          <p className="text-sm text-gray-500" id="email-response-time">We respond within 24 hours</p>
                        </div>
                      </div>
                      <div 
                        className="flex items-start gap-4" 
                        role="listitem"
                        aria-label="Service area information"
                      >
                        <MapPin className="h-5 w-5 text-primary mt-0.5" aria-hidden="true" />
                        <div>
                          <h3 id="service-area-title" className="font-medium">Service Area</h3>
                          <p className="text-sm text-gray-500" aria-describedby="service-area-title">
                            We serve the Naperville area and surrounding suburbs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle id="faq-title">Frequently Asked Questions</CardTitle>
                    <CardDescription id="faq-description" className="sr-only">
                      Common questions about our services, pricing, and process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="space-y-4" 
                      role="list" 
                      aria-labelledby="faq-title"
                      aria-describedby="faq-description"
                    >
                      <div 
                        role="listitem"
                        className="faq-item"
                      >
                        <h3 id="faq-cost" className="font-medium">How much do your services cost?</h3>
                        <p 
                          className="text-sm text-gray-500 mt-1" 
                          id="faq-cost-answer"
                          aria-labelledby="faq-cost"
                        >
                          Our standard rate is $100/hour with a one-hour minimum. Additional time after the first hour is billed in 15 minute increments. Most common issues can be resolved in
                          1-2 hours.
                        </p>
                      </div>
                      <div 
                        role="listitem"
                        className="faq-item"
                      >
                        <h3 id="faq-timing" className="font-medium">How soon can you come to my home?</h3>
                        <p 
                          className="text-sm text-gray-500 mt-1" 
                          id="faq-timing-answer"
                          aria-labelledby="faq-timing"
                        >
                          We typically schedule appointments within 24-48 hours of your request, depending on
                          availability.
                        </p>
                      </div>
                      <div 
                        role="listitem"
                        className="faq-item"
                      >
                        <h3 id="faq-prepare" className="font-medium">Do I need to prepare anything before your visit?</h3>
                        <p 
                          className="text-sm text-gray-500 mt-1" 
                          id="faq-prepare-answer"
                          aria-labelledby="faq-prepare"
                        >
                          Please have your devices powered on and any relevant passwords or account information
                          available.
                        </p>
                      </div>
                      <div 
                        role="listitem"
                        className="faq-item"
                      >
                        <h3 id="faq-payment" className="font-medium">How do I pay for services?</h3>
                        <p 
                          className="text-sm text-gray-500 mt-1" 
                          id="faq-payment-answer"
                          aria-labelledby="faq-payment"
                        >
                          We accept credit cards, checks, and cash. Payment is due at the completion of service.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
