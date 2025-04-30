"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    // For now, we'll just show a success message
    setFormSubmitted(true)
    toast({
      title: "Request Submitted",
      description: "We'll contact you shortly to schedule your appointment.",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Request a service appointment or ask us a question. We're here to help!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Request Service</CardTitle>
                    <CardDescription>
                      Fill out the form below to request an in-home technology support appointment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {formSubmitted ? (
                      <div className="space-y-4 text-center py-8">
                        <div className="flex justify-center">
                          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                            <CheckCircle className="h-10 w-10 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold">Thank You!</h3>
                        <p className="text-gray-500">
                          Your service request has been submitted. We'll contact you shortly to confirm your
                          appointment.
                        </p>
                        <Button onClick={() => setFormSubmitted(false)} className="mt-4">
                          Submit Another Request
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Smith" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john.smith@example.com" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" placeholder="123 Main St" required />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="Anytown" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" placeholder="12345" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred Contact Method</Label>
                          <RadioGroup defaultValue="phone" className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem id="contact-phone" value="phone" />
                              <Label htmlFor="contact-phone">Phone</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem id="contact-email" value="email" />
                              <Label htmlFor="contact-email">Email</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service-type">Service Type</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="phone">Phone Setup & Transfers</SelectItem>
                              <SelectItem value="internet">Internet & Cable Setup</SelectItem>
                              <SelectItem value="tv">TV & Entertainment Systems</SelectItem>
                              <SelectItem value="computer">Computer Support</SelectItem>
                              <SelectItem value="streaming">Streaming Device Setup</SelectItem>
                              <SelectItem value="printer">Printer Assistance</SelectItem>
                              <SelectItem value="other">Other (Please specify)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Describe Your Issue</Label>
                          <Textarea
                            id="description"
                            placeholder="Please provide details about your technology issue..."
                            className="min-h-[120px]"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferred-date">Preferred Date</Label>
                          <Input id="preferred-date" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferred-time">Preferred Time</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                              <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                              <SelectItem value="evening">Evening (4pm - 7pm)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit" className="w-full">
                          Submit Request
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to us directly using the information below.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <p className="text-sm text-gray-500">(555) 123-4567</p>
                          <p className="text-sm text-gray-500">Monday - Friday, 9am - 7pm</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-gray-500">support@techsupportpal.com</p>
                          <p className="text-sm text-gray-500">We respond within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h3 className="font-medium">Service Area</h3>
                          <p className="text-sm text-gray-500">
                            We serve the greater metropolitan area and surrounding suburbs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">How much do your services cost?</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Our standard rate is $75/hour with a one-hour minimum. Most common issues can be resolved in
                          1-2 hours.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">How soon can you come to my home?</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          We typically schedule appointments within 24-48 hours of your request, depending on
                          availability.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">Do I need to prepare anything before your visit?</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Please have your devices powered on and any relevant passwords or account information
                          available.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium">How do I pay for services?</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          We accept credit cards, checks, and cash. Payment is due at the completion of service.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
