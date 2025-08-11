import Link from "next/link"
import { ArrowRight, PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"

interface LocalCTAProps {
  problem: string
  cities: string[]
}

export function LocalCTA({ problem, cities = ["Naperville", "Wheaton"] }: LocalCTAProps) {
  return (
    <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
      <h3 className="text-xl font-bold mb-3">Need Help with {problem}?</h3>
      <p className="mb-4">
        Our friendly technicians provide in-home tech support for seniors in {cities.join(" & ")}. 
        We can solve your {problem.toLowerCase()} quickly with clear, patient guidance.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/contact">
          <Button className="flex items-center">
            <PhoneCall className="mr-2 h-4 w-4" />
            Schedule a Visit
          </Button>
        </Link>
        <Link href="/emergency">
          <Button variant="outline" className="flex items-center bg-red-50 text-red-600 hover:bg-red-100 border-red-200">
            Same-Day Help
          </Button>
        </Link>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>
          Serving: {cities.map((city, index) => (
            <span key={city}>
              <Link href={`/${city.toLowerCase()}`} className="text-primary hover:underline">
                {city}
              </Link>
              {index < cities.length - 1 ? " & " : ""}
            </span>
          ))} residents
        </p>
      </div>
    </div>
  )
}
