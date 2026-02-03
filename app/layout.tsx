import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaBanner } from "@/components/cta-banner"

const inter = Inter({ subsets: ["latin"] })

const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"

export const metadata = isMaintenanceMode ? {
  title: "Temporarily Unavailable - Tech Support Pal",
  description: "Tech Support Pal is temporarily unavailable. We are not currently accepting new appointments or service requests.",
  robots: "noindex, nofollow",
  viewport: "width=device-width, initial-scale=1"
} : {
  title: "Tech Support Pal - In-Home Technology Support",
  description: "Professional and friendly in-home technology support services for everyone, regardless of technical experience.",
  generator: 'v0.dev',
  keywords: "tech support, in-home support, computer help, technology assistance, IT services, computer repair",
  authors: [{ name: "Tech Support Pal" }],
  robots: "index, follow",
  openGraph: {
    title: "Tech Support Pal - In-Home Technology Support",
    description: "Professional and friendly in-home technology support services for everyone, regardless of technical experience.",
    url: "https://techsupportpal.com",
    siteName: "Tech Support Pal",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Tech Support Pal Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Support Pal - In-Home Technology Support",
    description: "Professional and friendly in-home technology support services for everyone, regardless of technical experience.",
    images: ["/logo.png"]
  },
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (isMaintenanceMode) {
    return (
      <html lang="en">
        <head>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="google-site-verification" content="egrlTHqbay4Z9FUpd_LMM-IGa7Vo6FzDawrTlnhWlDs" />
          <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    )
  }

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
