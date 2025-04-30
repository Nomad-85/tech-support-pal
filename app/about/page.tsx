import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"


export default function AboutPage() {
  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Tech Support Pal</h1>
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
              <Image
                src="/favicon.png"
                alt="Tech support specialist helping client"
                width={550}
                height={550}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What makes Tech Support Pal different from other technology support services?
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">In-Home Service</h3>
                <p className="text-gray-500">
                  We come to you, so you can learn in the comfort of your own home with your own devices.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Patient Teaching</h3>
                <p className="text-gray-500">
                  We take our time to explain things clearly and never rush you through the learning process.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-gray-500">
                  We're available for follow-up questions and additional help whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our friendly, patient technicians are dedicated to helping you navigate the digital world.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="flex flex-col items-center space-y-6 text-center">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt="Travis Roesner"
                  width={250}
                  height={250}
                  className="rounded-full object-cover"
                />
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold">Travis Roesner</h3>
                  <p className="text-gray-500 text-lg">Founder & Lead Technician</p>
                  <p className="mt-4 text-gray-500">
                    With over 30 years of experience in technology, Travis specializes in making technology accessible
                    to everyone. Travis has a gift for explaining complex concepts in simple terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule your in-home technology support appointment.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="mt-4">
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
