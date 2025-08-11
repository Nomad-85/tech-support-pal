import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CityPageProps {
  city: string
  services: {
    title: string
    description: string
    link: string
  }[]
  helpCenterArticles?: {
    title: string
    link: string
  }[]
}

export function CityPage({ city, services, helpCenterArticles = [] }: CityPageProps) {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                In-Home Tech Support in {city}
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Friendly, patient technology help for seniors in the comfort of your {city} home. 
                Our experienced technicians provide same-day assistance with computers, Wi-Fi, 
                printers, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Tech Services We Offer in {city}
            </h2>
            <p className="max-w-[700px] text-gray-500">
              Our most requested services for {city} residents, with special focus on 
              senior-friendly support and clear, patient instruction.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4 flex-1">{service.description}</p>
                <Link href={service.link} className="text-primary font-medium flex items-center mt-auto">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {helpCenterArticles.length > 0 && (
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Common Tech Issues in {city}
              </h2>
              <p className="max-w-[700px] text-gray-500">
                Helpful guides for {city} residents facing these common technology challenges.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {helpCenterArticles.map((article, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <Link href={article.link} className="font-medium hover:underline">
                      {article.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full py-12 md:py-24 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Need Tech Help in {city}?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to schedule your in-home technology support appointment.
                We offer same-day service for urgent issues.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Schedule a Visit
                </Button>
              </Link>
              <Link href="/emergency">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Same-Day Tech Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
