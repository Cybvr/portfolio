'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Clock, Star, Shield, Trophy, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function EliteBasketballAcademyPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Camp Image */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/placeholder.svg"
          alt="Elite Basketball Academy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container mx-auto px-4 py-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elite Basketball Academy</h1>
            <div className="flex flex-wrap gap-4 items-center text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dallas, TX</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>June 15-20, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Ages 12-18</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>4.9 (128 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="coaches">Coaches</TabsTrigger>
                <TabsTrigger value="facilities">Facilities</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold">About the Camp</h2>
                  <p>
                    Elite Basketball Academy offers an intensive training experience designed to develop 
                    players' fundamental skills, basketball IQ, and competitive edge. Our comprehensive 
                    program combines technical training, tactical understanding, and game-like scenarios.
                  </p>

                  <h3 className="text-xl font-bold mt-6">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li>Advanced shooting mechanics and footwork</li>
                    <li>Position-specific skill development</li>
                    <li>Game strategy and basketball IQ</li>
                    <li>Strength and conditioning</li>
                    <li>Leadership and team building</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {[
                    {
                      icon: <Trophy className="h-8 w-8 text-blue-500" />,
                      title: "Elite Training",
                      description: "Learn from former pro players and top coaches"
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-green-500" />,
                      title: "Safe Environment",
                      description: "Certified staff and modern facilities"
                    },
                    {
                      icon: <Star className="h-8 w-8 text-yellow-500" />,
                      title: "Proven Results",
                      description: "90% of players see significant improvement"
                    }
                  ].map((feature, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">{feature.icon}</div>
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="schedule">
                <div className="space-y-4">
                  {[
                    { time: "8:00 AM", activity: "Check-in & Warm-up" },
                    { time: "9:00 AM", activity: "Skills Training" },
                    { time: "10:30 AM", activity: "Position-specific Drills" },
                    { time: "12:00 PM", activity: "Lunch Break" },
                    { time: "1:00 PM", activity: "Competitive Games" },
                    { time: "3:00 PM", activity: "Film Study & Strategy" },
                    { time: "4:00 PM", activity: "Cool Down & Recovery" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-5 w-5 text-blue-500" />
                      <div>
                        <span className="font-bold">{item.time}</span>
                        <span className="mx-2">-</span>
                        <span>{item.activity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Registration Card */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="text-3xl font-bold">$599</div>
                <p className="text-sm text-gray-500">
                  All-inclusive 6-day camp experience
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>8 spots remaining</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Registration closes June 1, 2024</span>
                  </div>
                </div>

                <Button className="w-full">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Secure payment - Full refund available up to 30 days before camp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}