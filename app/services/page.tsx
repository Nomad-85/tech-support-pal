import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, PhoneCall, Clock, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
      image: "/streaming-devices.webp",
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of technology support services to help everyone, regardless of their
                  technical experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600} // use 2x if your layout shows it as 300px wide
                      height={500} // 2x for 250px
                      quality={100}
                      sizes="(min-width: 1024px) 300px, 100vw"
                      style={{ width: '100%', height: '250px' }}
                      className="object-cover object-[center-top] rounded-t-lg"
                    />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/contact" className="w-full">
                      <Button className="w-full">
                        Request This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need a Different Service?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't see what you need? Contact us anyway! We're happy to discuss your specific technology needs.
                </p>
              </div>
              <Link href="/contact">
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
