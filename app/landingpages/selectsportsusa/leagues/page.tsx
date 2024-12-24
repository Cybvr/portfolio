'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Trophy, Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function LeaguesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Basketball league"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a2d5a]/80" />
        </div>
        <div className="relative container px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Basketball Leagues
            </h1>
            <p className="text-xl mb-8">
              Join competitive basketball leagues for all age groups and skill levels
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Active Leagues Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Active Leagues</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Youth Development League",
                ageGroup: "Ages 8-12",
                season: "Spring 2024",
                format: "3v3 & 5v5",
                startDate: "March 15, 2024"
              },
              {
                title: "Junior Elite League",
                ageGroup: "Ages 13-15",
                season: "Spring 2024",
                format: "5v5",
                startDate: "March 22, 2024"
              },
              {
                title: "High School Prep League",
                ageGroup: "Ages 16-18",
                season: "Spring 2024",
                format: "5v5",
                startDate: "March 29, 2024"
              }
            ].map((league, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">{league.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {league.ageGroup}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Trophy className="w-4 h-4 mr-2" />
                      {league.format}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {league.startDate}
                    </div>
                  </div>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* League Features */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">League Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Officiating",
                description: "Certified referees for all games"
              },
              {
                title: "Stats & Analytics",
                description: "Detailed player and team statistics"
              },
              {
                title: "Championship Events",
                description: "End-of-season tournaments"
              }
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How to Join</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Choose Your League",
                  description: "Select the appropriate age group and competition level"
                },
                {
                  step: "2",
                  title: "Register Your Team",
                  description: "Complete team registration and roster submission"
                },
                {
                  step: "3",
                  title: "Payment",
                  description: "Process league fees and secure your spot"
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2d5a] text-white py-20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the League?</h2>
          <p className="text-xl mb-8 text-white/80">
            Register your team today and be part of the competition
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Register Now
          </Button>
        </div>
      </section>
    </div>
  )
}