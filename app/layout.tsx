import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from 'next'
import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaBanner } from "@/components/cta-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://techsupportpal.com'),
  title: "Tech Support Pal - In-Home Technology Support",
  description: "Professional and friendly in-home technology support services for everyone, regardless of technical experience.",
  generator: 'Next.js',
  applicationName: 'Tech Support Pal',
  authors: [{ name: 'Tech Support Pal Team' }],
  keywords: ['tech support', 'in-home support', 'technology help', 'computer help', 'senior tech support'],
  creator: 'Tech Support Pal',
  publisher: 'Tech Support Pal',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Tech Support Pal - In-Home Technology Support',
    description: 'Professional and friendly in-home technology support services for everyone, regardless of technical experience.',
    url: 'https://techsupportpal.com',
    siteName: 'Tech Support Pal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Support Pal - In-Home Technology Support',
    description: 'Professional and friendly in-home technology support services for everyone.',
    creator: '@techsupportpal',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="egrlTHqbay4Z9FUpd_LMM-IGa7Vo6FzDawrTlnhWlDs" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <CtaBanner />
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
