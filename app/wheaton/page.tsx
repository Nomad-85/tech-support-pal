import { Metadata } from "next"
import Script from "next/script"

import { CityPage } from "@/components/city-page"
import { generateSeoMetadata, generateLocalBusinessSchema } from "@/lib/seo"

export const metadata: Metadata = generateSeoMetadata({
  title: "Tech Support in Wheaton, IL | In-Home Help for Seniors",
  description: "Patient, in-home tech support for seniors in Wheaton. Same-day help for Wi-Fi, printers, computers & phones. Serving DuPage County since 2020.",
  path: "/wheaton",
  keywords: [
    "tech support Wheaton IL",
    "computer help Wheaton seniors",
    "in-home computer help DuPage County",
    "same-day tech help Wheaton",
    "smartphone lessons for seniors Wheaton",
    "virus removal near Wheaton IL"
  ]
})

export default function WheatonPage() {
  const services = [
    {
      title: "Same-Day Tech Support",
      description: "Urgent same-day tech help in Wheaton for seniors when technology problems can't wait. Fast, friendly service at your home.",
      link: "/emergency"
    },
    {
      title: "Computer Virus Removal",
      description: "Professional virus removal near Wheaton IL. We'll clean your computer, remove malware, and help protect you from future threats.",
      link: "/services"
    },
    {
      title: "Wi-Fi Connection Help",
      description: "Can't connect to WiFi in Wheaton? Our experts will diagnose and fix your connection issues with clear, patient explanations.",
      link: "/services"
    },
    {
      title: "Smartphone & Tablet Lessons",
      description: "Friendly smartphone lessons for seniors in Wheaton. Learn to use FaceTime, send photos, and stay connected with family.",
      link: "/services"
    },
    {
      title: "Password Recovery & Management",
      description: "Forgot iPad password in Wheaton? We can help recover accounts and set up password management systems that are easy to use.",
      link: "/services"
    },
    {
      title: "Smart Home Device Setup",
      description: "Expert smart home device setup in Wheaton homes. From thermostats to security cameras, we make technology work for you.",
      link: "/services"
    }
  ]

  const helpCenterArticles = [
    {
      title: "Can't Connect to WiFi in Wheaton? Easy Fixes to Try First",
      link: "/help-center"
    },
    {
      title: "How to Use FaceTime for Seniors - Simple Wheaton Guide",
      link: "/help-center"
    },
    {
      title: "Install Antivirus in Wheaton IL - Step by Step Guide",
      link: "/help-center"
    },
    {
      title: "Forgot iPad Password? Recovery Options for Wheaton Residents",
      link: "/help-center"
    }
  ]

  return (
    <>
      <CityPage 
        city="Wheaton" 
        services={services} 
        helpCenterArticles={helpCenterArticles} 
      />
      <Script id="local-business-schema" type="application/ld+json">
        {generateLocalBusinessSchema()}
      </Script>
    </>
  )
}
