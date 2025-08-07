import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-8 md:py-12" role="contentinfo">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 id="contact-heading" className="text-lg font-medium">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-500" aria-hidden="true" />
              <span className="text-sm text-gray-500">(510)-316-7632</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-500" aria-hidden="true" />
              <a href="mailto:support@techsupportpal.com" className="text-sm text-gray-500 hover:text-gray-900">
                support@techsupportpal.com
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 id="social-heading" className="text-lg font-medium">Connect With Us</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577858364691" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/company/tech-support-pal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 id="legal-heading" className="text-lg font-medium">Legal</h3>
            <div className="flex flex-col space-y-2" role="navigation" aria-label="Legal links">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2025 Tech Support Pal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
