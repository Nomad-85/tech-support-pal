"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <div className="bg-primary text-white py-3 px-4 text-center">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-medium">
          <span className="font-bold">Special Offer:</span> 50% off introductory rate for new customers!
        </div>
        <Link href="/contact">
          <Button variant="secondary" size="sm">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
