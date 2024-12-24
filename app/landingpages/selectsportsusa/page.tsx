// app/portfolio/selectsportsusa/page.tsx
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Activity, Star, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Connect <span className="text-red-600">Young Athletes</span> with Their
              <br className="hidden sm:inline" /> Dream Team
            </h1>
            <p className="max-w-[42rem] text-gray-500 md:text-xl">
              Find the perfect fit for your young athlete using algorithms and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Parents Start Here</Button>
              <Button size="lg" variant="outline">Athletes Start Here</Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-red-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Events</h2>
            <div className="space-y-4">
              {["Connect Young Athletes with Their Dream Team"].map((title, index) => (
                <div key={index} className="p-4 bg-red-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="text-sm text-gray-600 mt-2">Find the perfect fit for your young athlete using algorithms and personalized recommendations.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 md:px-6" id="features">
        <h2 className="text-3xl font-bold mb-8 text-center">Everything You Need to Succeed</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Player Search Engine", description: "View and filter full stats and attributes of over 140,000 players.", icon: Users },
            { title: "Ranking Tool", description: "Quickly find the top performers using our unique player ranking engine!", icon: Star },
            { title: "Compare Players", description: "Pick up to 5 players and put them side to side.", icon: Activity },
            { title: "Take Notes", description: "Create and save personal notes on any player or prospect.", icon: MessageSquare }
          ].map((feature, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-gray-50 py-12 md:py-24" id="benefits">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "01", title: "Create your profile", description: "Let the world know who you are as a coach, athlete, or team" },
              { number: "02", title: "Build your network", description: "Connect with coaches and athletes you already know and build new relationships" },
              { number: "03", title: "Find opportunities", description: "Discover and share opportunities to play, coach, and market your team" },
              { number: "04", title: "Get in contact", description: "Show your interest, make introductions, and find the right opportunities" }
            ].map((step) => (
              <div key={step.number} className="bg-navy-900 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold text-red-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Transforming Youth Basketball</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { stat: "85%", label: "Success Rate" },
            { stat: "50%", label: "Time Saved" },
            { stat: "10k+", label: "Active Users" },
            { stat: "4.9/5", label: "User Rating" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{item.stat}</div>
              <div className="text-lg text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 md:py-24" id="testimonials">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Coach Michelle Rodriguez", role: "AAU Basketball Director", text: "This network has transformed how we connect with young athletes." },
              { name: "Lisa Chen", role: "Parent of AAU player", text: "The platform made it easy to find the right program for my daughter." },
              { name: "Jason Thompson", role: "Youth Program Director", text: "An essential tool for growing our program." }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <p className="text-gray-500 mb-4">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6 py-12 md:py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-gray-500 mb-8">Join thousands of athletes finding their perfect match.</p>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <select className="w-full p-3 border rounded-md">
              <option>I'm a...</option>
              <option>Athlete</option>
              <option>Coach</option>
              <option>Parent</option>
            </select>
            <input type="text" placeholder="First & Last Name" className="w-full p-3 border rounded-md" />
            <Button size="lg" type="submit" className="w-full">Join the Network</Button>
          </form>
        </div>
      </section>
    </div>
  )
}