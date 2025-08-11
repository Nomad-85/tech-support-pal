import Link from "next/link"
import { Metadata } from "next"
import Script from "next/script"
import { PhoneCall, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { generateSeoMetadata, generateServiceSchema } from "@/lib/seo"

export const metadata: Metadata = generateSeoMetadata({
  title: "Same-Day Computer & Tech Help in Naperville & Wheaton",
  description: "Urgent tech support with same-day service in Naperville & Wheaton. Fast fixes for WiFi issues, printer problems, virus removal, and password recovery.",
  path: "/emergency",
  keywords: [
    "urgent computer repair Naperville",
    "same-day tech help Wheaton",
    "printer offline fix Naperville",
    "password recovery service Naperville",
    "wifi down help Naperville",
    "virus removal near Wheaton IL",
    "data recovery Naperville IL"
  ]
})

export default function EmergencyPage() {
  const emergencyServices = [
    {
      title: "WiFi Down & Internet Issues",
      description: "Fast WiFi down help in Naperville & Wheaton. We'll get your internet connection back up and running quickly."
    },
    {
      title: "Virus & Malware Removal",
      description: "Same-day virus removal near Wheaton & Naperville. We'll clean your device and secure it against future threats."
    },
    {
      title: "Printer Not Working",
      description: "Printer offline fix in Naperville & Wheaton. We'll troubleshoot connection issues and get you printing again."
    },
    {
      title: "Password Recovery",
      description: "Password recovery service in Naperville for locked accounts, devices, and important services."
    },
    {
      title: "Data Recovery",
      description: "Emergency data recovery in Naperville IL for accidentally deleted files or failing hard drives."
    },
    {
      title: "Email & Account Access",
      description: "Can't access your email or important accounts? We provide same-day help to restore your access."
    }
  ]

  return (
    <div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Urgent Tech Support—We Come to You Today
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  When technology problems can't wait, our same-day tech help in Naperville and Wheaton 
                  gets you back up and running quickly. Our patient, friendly technicians come to your 
                  home with solutions for your most pressing tech emergencies.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto">
                      <PhoneCall className="mr-2 h-4 w-4" />
                      Request Same-Day Help
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Common Tech Emergencies We Fix
              </h2>
              <p className="max-w-[700px] text-gray-500">
                Our technicians are ready to help with these urgent tech issues in Naperville and Wheaton homes.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {emergencyServices.map((service, index) => (
                <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Our Same-Day Service Promise
              </h2>
              <p className="max-w-[700px] text-gray-500">
                When you're facing an urgent tech problem, we understand the stress and frustration. 
                That's why we prioritize same-day appointments for emergency situations.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <PhoneCall className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">1. Contact Us</h3>
                <p className="text-gray-500">
                  Call or use our contact form and mention it's urgent. We prioritize emergency requests.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">2. Same-Day Visit</h3>
                <p className="text-gray-500">
                  We'll arrange a same-day appointment at your Naperville or Wheaton home.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">3. Problem Solved</h3>
                <p className="text-gray-500">
                  Our expert will diagnose and fix your tech emergency with clear explanations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Urgent Tech Help?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't struggle with technology problems. Our patient, friendly technicians are ready 
                  to help seniors in Naperville and Wheaton today.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="mt-4">
                  Request Same-Day Service
                </Button>
              </Link>
              <div className="mt-4 text-sm">
                <p>Proudly serving: <Link href="/naperville" className="underline hover:text-gray-200">Naperville</Link> & <Link href="/wheaton" className="underline hover:text-gray-200">Wheaton</Link> seniors</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script id="emergency-service-schema" type="application/ld+json">
        {generateServiceSchema(
          "Same-Day Tech Support", 
          "Urgent in-home technology support with same-day service for seniors in Naperville and Wheaton, IL."
        )}
      </Script>
    </div>
  )
}
