"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const formData = new FormData(e.target)
      const formObject = Object.fromEntries(formData)
      
      // Send data to Formspree
      const response = await fetch('https://formspree.io/f/meokkbll', {
        method: 'POST',
        body: JSON.stringify(formObject),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Show success message
      setFormSubmitted(true)
      toast({
        title: "Request Submitted",
        description: "We'll contact you shortly to schedule your appointment.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      {formSubmitted ? (
        <div 
          className="space-y-4 text-center py-8" 
          role="alert" 
          aria-live="polite" 
          aria-labelledby="success-heading"
        >
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
            </div>
          </div>
          <h3 id="success-heading" className="text-xl font-medium">Request Submitted Successfully</h3>
          <p className="text-gray-500">
            Thank you for contacting Tech Support Pal. We'll reach out to you shortly to schedule your
            appointment.
          </p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6" 
          aria-labelledby="contact-form-heading request-service-title service-form-description" 
          role="form"
          noValidate
        >
          <h2 id="contact-form-heading" className="sr-only">Contact Request Form</h2>
          <p id="form-instructions" className="sr-only">All fields marked with an asterisk are required.</p>
          <div 
            className="space-y-4"
            aria-describedby="form-instructions"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span aria-hidden="true" className="text-red-500">*</span>
                </Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  required 
                  aria-required="true"
                  aria-describedby="firstName-required"
                  aria-invalid="false"
                />
                <span id="firstName-required" className="sr-only">First name is required</span>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span aria-hidden="true" className="text-red-500">*</span>
                </Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  required 
                  aria-required="true"
                  aria-describedby="lastName-required"
                  aria-invalid="false"
                />
                <span id="lastName-required" className="sr-only">Last name is required</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span aria-hidden="true" className="text-red-500">*</span>
              </Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                aria-required="true"
                aria-describedby="email-required email-format"
                inputMode="email"
                autoComplete="email"
                aria-invalid="false"
                placeholder="your.email@example.com"
              />
              <span id="email-required" className="sr-only">Email is required</span>
              <span id="email-format" className="sr-only">Please enter a valid email address</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span aria-hidden="true" className="text-red-500">*</span>
              </Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                aria-required="true"
                aria-describedby="phone-required phone-format"
                inputMode="tel"
                autoComplete="tel"
                aria-invalid="false"
                placeholder="(123) 456-7890"
              />
              <span id="phone-required" className="sr-only">Phone number is required</span>
              <span id="phone-format" className="sr-only">Please enter a valid phone number</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">
                Address <span className="text-sm text-gray-500">(Optional)</span>
              </Label>
              <Input 
                id="address" 
                name="address" 
                aria-required="false"
                aria-describedby="address-help"
                autoComplete="street-address"
              />
              <span id="address-help" className="sr-only">Your physical address is optional but helpful for on-site services</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">
                  City <span className="text-sm text-gray-500">(Optional)</span>
                </Label>
                <Input 
                  id="city" 
                  name="city" 
                  aria-required="false"
                  aria-describedby="city-help"
                  autoComplete="address-level2"
                />
                <span id="city-help" className="sr-only">City is optional but helpful for on-site services</span>
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">
                  ZIP Code <span className="text-sm text-gray-500">(Optional)</span>
                </Label>
                <Input 
                  id="zipCode" 
                  name="zipCode" 
                  aria-required="false"
                  aria-describedby="zipCode-help zipCode-format"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="12345"
                  pattern="[0-9]{5}(-[0-9]{4})?"
                  maxLength={10}
                />
                <span id="zipCode-help" className="sr-only">ZIP code is optional but helpful for on-site services</span>
                <span id="zipCode-format" className="sr-only">Please enter a 5-digit ZIP code or ZIP+4 format (e.g., 12345 or 12345-6789)</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceCategory">
                Service Category <span aria-hidden="true" className="text-red-500">*</span>
              </Label>
              <Select 
                name="serviceCategory" 
                id="serviceCategory" 
                aria-required="true" 
                required
                aria-describedby="serviceCategory-required serviceCategory-help"
                aria-invalid="false"
              >
                <option value="">Select a service category</option>
                <option value="repair">Computer Repair</option>
                <option value="network">Network Setup</option>
                <option value="security">Security Services</option>
                <option value="consultation">IT Consultation</option>
                <option value="other">Other</option>
              </Select>
              <span id="serviceCategory-required" className="sr-only">Service category is required</span>
              <span id="serviceCategory-help" className="sr-only">Please select the type of service you need assistance with</span>
            </div>
            <div className="space-y-2">
              <Label id="service-location-label">Service Location <span aria-hidden="true" className="text-red-500">*</span></Label>
              <RadioGroup 
                defaultValue="onSite" 
                name="serviceLocation"
                aria-labelledby="service-location-label" 
                role="radiogroup"
                className="focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="onSite" 
                    id="onSite" 
                    aria-describedby="onSite-description"
                    className="focus:ring-2 focus:ring-blue-500" 
                  />
                  <Label htmlFor="onSite">On-site Service</Label>
                  <span id="onSite-description" className="sr-only">We come to your location to provide service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="remote" 
                    id="remote" 
                    aria-describedby="remote-description" 
                  />
                  <Label htmlFor="remote">Remote Assistance</Label>
                  <span id="remote-description" className="sr-only">We help you online through screen sharing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value="dropOff" 
                    id="dropOff" 
                    aria-describedby="dropOff-description"
                    className="focus:ring-2 focus:ring-blue-500" 
                  />
                  <Label htmlFor="dropOff">Drop-off Service</Label>
                  <span id="dropOff-description" className="sr-only">You bring your device to our location for service</span>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceNeeded" id="service-needed-label">Service Needed <span aria-hidden="true" className="text-red-500">*</span></Label>
              <Select 
                name="serviceNeeded" 
                aria-labelledby="service-needed-label service-needed-description" 
                role="combobox"
                aria-describedby="service-needed-help"
              >
                <SelectTrigger 
                  id="serviceNeeded" 
                  aria-label="Select a service"
                  aria-required="true"
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <SelectValue placeholder="Select a service" />                  
                </SelectTrigger>
                <SelectContent>
                  <SelectItem 
                    value="phoneSetup" 
                    id="phoneSetup"
                    aria-describedby="phoneSetup-desc"
                  >
                    Phone Setup & Transfers
                  </SelectItem>
                  <span id="phoneSetup-desc" className="sr-only">Help with smartphone configuration and data transfers</span>
                  
                  <SelectItem 
                    value="internetCable" 
                    id="internetCable"
                    aria-describedby="internetCable-desc"
                  >
                    Internet & Cable Setup
                  </SelectItem>
                  <span id="internetCable-desc" className="sr-only">Assistance with internet connections and cable TV installation</span>
                  
                  <SelectItem 
                    value="tvEntertainment" 
                    id="tvEntertainment"
                    aria-describedby="tvEntertainment-desc"
                  >
                    TV & Entertainment Systems
                  </SelectItem>
                  <span id="tvEntertainment-desc" className="sr-only">Setup and troubleshooting for televisions and home entertainment</span>
                  
                  <SelectItem 
                    value="computerSupport" 
                    id="computerSupport"
                    aria-describedby="computerSupport-desc"
                  >
                    Computer Support
                  </SelectItem>
                  <span id="computerSupport-desc" className="sr-only">Help with computer issues, software installation, and troubleshooting</span>
                  
                  <SelectItem 
                    value="streamingSetup" 
                    id="streamingSetup"
                    aria-describedby="streamingSetup-desc"
                  >
                    Streaming Device Setup
                  </SelectItem>
                  <span id="streamingSetup-desc" className="sr-only">Configuration of streaming devices like Roku, Apple TV, or Fire Stick</span>
                  
                  <SelectItem 
                    value="printerAssistance" 
                    id="printerAssistance"
                    aria-describedby="printerAssistance-desc"
                  >
                    Printer Assistance
                  </SelectItem>
                  <span id="printerAssistance-desc" className="sr-only">Help with printer installation, configuration, and troubleshooting</span>
                  
                  <SelectItem 
                    value="other" 
                    id="other"
                    aria-describedby="other-desc"
                  >
                    Other (Please specify)
                  </SelectItem>
                  <span id="other-desc" className="sr-only">Select this if your needed service is not listed, and provide details in the message field</span>
                </SelectContent>
              </Select>
              <span id="service-needed-description" className="sr-only">Required field</span>
              <span id="service-needed-help" className="sr-only">Choose the type of service you need assistance with from the dropdown menu</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" id="message-label">Additional Details <span className="text-sm text-gray-500">(Optional)</span></Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please provide any additional details about your technology needs..."
                className="min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-labelledby="message-label"
                aria-describedby="message-description message-hint"
                aria-required="false"
                spellCheck="true"
                autoCorrect="on"
              />
              <span id="message-description" className="sr-only">Optional field. Include any specific issues you're experiencing or questions you have about our services.</span>
              <span id="message-hint" className="sr-only">You can use this field to describe your technical needs in detail. The more information you provide, the better we can assist you.</span>
            </div>
          </div>
          <Button 
            type="submit" 
            aria-label="Submit service request" 
            aria-describedby="contact-form-heading submit-description"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none"
          >
            Submit Request
          </Button>
          <span id="submit-description" className="sr-only">Click to submit your contact request. You will receive a confirmation email.</span>
          <div aria-live="assertive" className="sr-only" role="status" id="form-submit-status">
            {formSubmitted ? "Your request has been submitted successfully. We will contact you shortly." : ""}
          </div>
          <div aria-live="polite" className="mt-2 text-sm text-center" id="form-status">
            {/* Form status messages will appear here dynamically */}
          </div>
        </form>
      )}
    </>
  )
}
