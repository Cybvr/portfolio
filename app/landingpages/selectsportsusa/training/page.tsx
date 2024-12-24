'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Trophy, Star, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Basketball training"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a2d5a]/80" />
        </div>
        <div className="relative container px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Elite Basketball Training Programs
            </h1>
            <p className="text-xl mb-8">
              Develop your skills with professional coaches and personalized training plans
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              View Training Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Training",
                description: "One-on-one sessions focused on skill development",
                price: "$75/hour",
                features: ["Personalized attention", "Skill assessment", "Video analysis"]
              },
              {
                title: "Group Training",
                description: "Small group training for team development",
                price: "$45/person",
                features: ["Team dynamics", "Competitive drills", "Game scenarios"]
              },
              {
                title: "Elite Program",
                description: "Comprehensive development program",
                price: "$299/month",
                features: ["Weekly sessions", "Performance tracking", "Tournament prep"]
              }
            ].map((program, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <p className="text-2xl font-bold text-red-600 mb-4">{program.price}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-red-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-gray-50 py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Sessions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Shooting Fundamentals",
                time: "Mon & Wed, 4:00 PM - 5:30 PM",
                coach: "Coach Williams",
                level: "Intermediate",
                spots: "8 spots left"
              },
              {
                title: "Advanced Ball Handling",
                time: "Tue & Thu, 5:00 PM - 6:30 PM",
                coach: "Coach Rodriguez",
                level: "Advanced",
                spots: "5 spots left"
              },
              {
                title: "Defense Mastery",
                time: "Fri, 4:00 PM - 6:00 PM",
                coach: "Coach Johnson",
                level: "All Levels",
                spots: "10 spots left"
              },
              {
                title: "Game Speed Training",
                time: "Sat, 9:00 AM - 11:00 AM",
                coach: "Coach Chen",
                level: "Elite",
                spots: "3 spots left"
              }
            ].map((session, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{session.title}</h3>
                    <Badge variant="outline">{session.level}</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {session.time}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {session.coach}
                    </div>
                    <div className="flex items-center text-red-600">
                      <Star className="w-4 h-4 mr-2" />
                      {session.spots}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Reserve Spot</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills Development</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: "Shooting",
                description: "Perfect your shot form and accuracy"
              },
              {
                icon: Trophy,
                title: "Ball Handling",
                description: "Improve control and confidence"
              },
              {
                icon: Trophy,
                title: "Defense",
                description: "Master defensive techniques"
              },
              {
                icon: Trophy,
                title: "Game IQ",
                description: "Develop basketball intelligence"
              }
            ].map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a2d5a] text-white py-20">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-xl mb-8 text-white/80">
            Join our training programs and start your journey to excellence
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Start Training Now
          </Button>
        </div>
      </section>
    </div>
  )
}