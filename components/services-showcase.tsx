import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Service {
  title: string
  description: string
}

interface ServicesShowcaseProps {
  services: Service[]
}

export default function ServicesShowcase({ services }: ServicesShowcaseProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" aria-labelledby="services-heading">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 id="services-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of technology support services to help you get the most out of your devices.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2" role="list" aria-label="Available services">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm" role="listitem" aria-labelledby={`service-title-${index}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <CheckCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 id={`service-title-${index}`} className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/services" aria-label="View all available services">
            <Button size="lg" aria-label="View all available services">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
