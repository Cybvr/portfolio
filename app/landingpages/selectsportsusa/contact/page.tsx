'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#1a2d5a]">
        <div className="container px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-xl text-white/80">
              We're here to help connect young athletes with their perfect team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-1">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1">Message</label>
                    <textarea 
                      className="min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Sports Avenue<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">contact@selectsportsusa.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-muted-foreground mb-4">
                    Our support team is available Monday through Friday, 9AM-6PM PST.
                  </p>
                  <Button className="w-full" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Start Live Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Interactive Map
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}