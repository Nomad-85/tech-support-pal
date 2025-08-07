"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <div className="bg-primary text-white py-3 px-4 text-center" role="region" aria-labelledby="cta-heading">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-medium" id="cta-heading">
          <span className="font-bold">Special Offer:</span> 50% off introductory rate for new customers!
        </div>
        <Link href="/contact" aria-label="Book now at 50% off introductory rate">
          <Button variant="secondary" size="sm" aria-describedby="cta-heading">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
