import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import JsonLd, { createServiceSchema } from "@/components/json-ld"

interface Service {
  title: string
  description: string
  image?: string
  features: string[]
}

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  // Create service schema objects for structured data
  const serviceSchemas = services.map(service => {
    return createServiceSchema({
      name: service.title,
      description: service.description,
      url: `https://techsupportpal.com/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
    });
  });

  return (
    <>
      {/* Add structured data for each service */}
      {serviceSchemas.map((schema, index) => (
        <React.Fragment key={`service-schema-${index}`}>
          <JsonLd data={schema} />
        </React.Fragment>
      ))}
      
      <div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" 
        role="list" 
        aria-label="Available services"
        aria-describedby="services-heading"
      >
        {services.map((service, index) => {
          const serviceId = `service-${service.title.toLowerCase().replace(/\s+/g, '-')}`;
          const titleId = `${serviceId}-title`;
          const descId = `${serviceId}-desc`;
          const featuresId = `${serviceId}-features`;
          
          return (
            <Card 
              key={index} 
              className="flex flex-col h-full" 
              id={serviceId}
              role="listitem"
              aria-labelledby={titleId}
              aria-describedby={descId}
            >
              <CardHeader>
                <CardTitle id={titleId} className="text-xl">{service.title}</CardTitle>
                <CardDescription id={descId}>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul 
                  className="space-y-2" 
                  aria-label={`${service.title} features`}
                  id={featuresId}
                  role="list"
                >
                  {service.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-2"
                      role="listitem"
                    >
                      <CheckCircle 
                        className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" 
                        aria-hidden="true" 
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link 
                  href="/contact" 
                  className="w-full"
                  aria-label={`Request ${service.title} service`}
                  aria-describedby={`${titleId} ${featuresId}`}
                >
                  <Button 
                    className="w-full"
                  >
                    Request This Service
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  )
}
