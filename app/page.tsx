import Link from "next/link"
import Image from "next/image"
import { PhoneCall, Clock, CreditCard, CheckCircle, AlertCircle, ArrowRight } from "lucide-react"
import { Metadata } from "next"
import Script from "next/script"

import { Button } from "@/components/ui/button"
import { generateCanonicalUrl } from "@/lib/canonical"
import { generateSeoMetadata, generateLocalBusinessSchema } from "@/lib/seo"

export const metadata: Metadata = generateSeoMetadata({
  title: "In-Home Tech Support in Naperville & Wheaton | Tech Support Pal",
  description: "Patient, in-home technology support for seniors in Naperville & Wheaton. Same-day help for Wi-Fi, printers, computers & phones. Call or book online.",
  path: "/",
  keywords: [
    "tech support Naperville IL",
    "tech support Wheaton IL",
    "computer help Naperville seniors",
    "in-home computer help DuPage County",
    "senior tech support Chicagoland"
  ]
})


export default function Home() {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  In-Home Technology Support for Seniors in Naperville & Wheaton
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Friendly, patient tech support in Naperville IL and Wheaton IL, right in the comfort of your home. 
                  We specialize in making technology simple for seniors with clear, step-by-step guidance.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Request Service
                    </Button>
                  </Link>
                  <Link href="/emergency">
                    <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto bg-red-50 text-red-600 hover:bg-red-100 border-red-200">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Same-Day Tech Help
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
                alt="Man helps woman with technology support"
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-lg">Common Emergencies We Fix</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Fast Help When Technology Fails</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide urgent tech support for these common problems in Naperville and Wheaton homes.                  
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">WiFi Down Help Naperville</h3>
                <p className="text-gray-500 text-sm mb-3">Can't connect to WiFi? We'll get your internet working again quickly.</p>
                <Link href="/emergency" className="text-primary font-medium flex items-center mt-auto text-sm">
                  Get same-day help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Printer Offline Fix Naperville</h3>
                <p className="text-gray-500 text-sm mb-3">Printer not working? We'll troubleshoot and fix connection issues.</p>
                <Link href="/emergency" className="text-primary font-medium flex items-center mt-auto text-sm">
                  Get same-day help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Computer Running Slow Naperville</h3>
                <p className="text-gray-500 text-sm mb-3">Sluggish computer? We'll speed it up and optimize performance.</p>
                <Link href="/emergency" className="text-primary font-medium flex items-center mt-auto text-sm">
                  Get same-day help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Virus Removal Near Wheaton IL</h3>
                <p className="text-gray-500 text-sm mb-3">Virus or malware infection? We'll clean and secure your device.</p>
                <Link href="/emergency" className="text-primary font-medium flex items-center mt-auto text-sm">
                  Get same-day help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Password Recovery Service Naperville</h3>
                <p className="text-gray-500 text-sm mb-3">Locked out of accounts? We'll help you regain access safely.</p>
                <Link href="/emergency" className="text-primary font-medium flex items-center mt-auto text-sm">
                  Get same-day help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Data Recovery Naperville IL</h3>
                <p className="text-gray-500 text-sm mb-3">Lost important files? We can help recover your valuable data.</p>
                <Link href="/emergency" className="text-primary font-medium flex items-center mt-auto text-sm">
                  Get same-day help <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-4 text-center mt-8">
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
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Request Service Now
                  </Button>
                </Link>
                <Link href="/emergency">
                  <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    Same-Day Tech Help
                  </Button>
                </Link>
              </div>
              <div className="mt-4 text-sm">
                <p>Proudly serving: <Link href="/naperville" className="underline hover:text-gray-200">Naperville</Link> & <Link href="/wheaton" className="underline hover:text-gray-200">Wheaton</Link> seniors</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script id="local-business-schema" type="application/ld+json">
        {generateLocalBusinessSchema()}
      </Script>
    </div>
  )
}
