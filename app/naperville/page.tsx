import { Metadata } from "next"
import Script from "next/script"

import { CityPage } from "@/components/city-page"
import { generateSeoMetadata, generateLocalBusinessSchema } from "@/lib/seo"

export const metadata: Metadata = generateSeoMetadata({
  title: "Tech Support in Naperville, IL | In-Home Help for Seniors",
  description: "Patient, in-home tech support for seniors in Naperville. Same-day help for Wi-Fi, printers, computers & phones. Serving DuPage County since 2020.",
  path: "/naperville",
  keywords: [
    "tech support Naperville IL",
    "computer help Naperville seniors",
    "in-home computer help DuPage County",
    "wifi network setup Naperville home",
    "printer setup for seniors",
    "computer running slow Naperville"
  ]
})

export default function NapervillePage() {
  const services = [
    {
      title: "Wi-Fi Network Setup & Troubleshooting",
      description: "Expert Wi-Fi setup and troubleshooting for Naperville homes. We'll ensure your internet is fast, secure, and accessible on all your devices.",
      link: "/services"
    },
    {
      title: "Computer Support & Optimization",
      description: "Is your computer running slow in Naperville? We'll speed it up, remove viruses, and ensure it's working properly for all your needs.",
      link: "/services"
    },
    {
      title: "Printer Setup & Configuration",
      description: "Printer setup for seniors in Naperville with clear instructions and ongoing support if you encounter any issues.",
      link: "/services"
    },
    {
      title: "Smart TV & Streaming Setup",
      description: "Professional smart TV installation in Naperville homes with senior-friendly tutorials on using streaming services.",
      link: "/services"
    },
    {
      title: "Smartphone & Tablet Assistance",
      description: "Friendly smartphone lessons for Naperville seniors. Learn to use FaceTime, send photos, and stay connected with family.",
      link: "/services"
    },
    {
      title: "Data Backup & Recovery",
      description: "Secure backup computer to cloud services for Naperville residents. Protect your precious photos and important documents.",
      link: "/services"
    }
  ]

  const helpCenterArticles = [
    {
      title: "Computer Running Slow in Naperville? 5 Quick Fixes to Try",
      link: "/help-center"
    },
    {
      title: "Can't Connect to WiFi in Naperville? Troubleshooting Guide",
      link: "/help-center"
    },
    {
      title: "How to Backup Your Computer to the Cloud in Naperville",
      link: "/help-center"
    },
    {
      title: "Printer Keeps Jamming? Solutions for Naperville Residents",
      link: "/help-center"
    }
  ]

  return (
    <>
      <CityPage 
        city="Naperville" 
        services={services} 
        helpCenterArticles={helpCenterArticles} 
      />
      <Script id="local-business-schema" type="application/ld+json">
        {generateLocalBusinessSchema()}
      </Script>
    </>
  )
}
