import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2025 Tech Support Pal. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
