'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Users, MapPin, Trophy, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function SingleLeaguePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Youth Development League"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a2d5a]/80" />
        </div>
        <div className="relative container px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Youth Development League
            </h1>
            <p className="text-xl mb-6">Spring 2024 Season</p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Register Team
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Download Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* League Info */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">League Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-red-600" />
                      <span>Ages 8-12</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-red-600" />
                      <span>March 15 - June 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-red-600" />
                      <span>Games on Saturdays & Sundays</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-600" />
                      <span>Multiple Locations in Greater Boston Area</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">League Format</h3>
                    <ul className="space-y-2">
                      {[
                        "10 Regular Season Games",
                        "Single Elimination Playoffs",
                        "Championship Tournament",
                        "All-Star Game"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-red-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Upcoming Games</h2>
                <div className="space-y-4">
                  {[
                    {
                      date: "Mar 15, 2024",
                      time: "9:00 AM",
                      teams: "Tigers vs Lions",
                      location: "Main Court"
                    },
                    {
                      date: "Mar 15, 2024",
                      time: "10:30 AM",
                      teams: "Eagles vs Hawks",
                      location: "Court 2"
                    },
                    {
                      date: "Mar 16, 2024",
                      time: "9:00 AM",
                      teams: "Bears vs Wolves",
                      location: "Main Court"
                    }
                  ].map((game, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-bold">{game.teams}</div>
                            <div className="text-sm text-muted-foreground">{game.location}</div>
                          </div>
                          <div className="text-right">
                            <div>{game.date}</div>
                            <div className="text-sm text-muted-foreground">{game.time}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Registration Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Registration</h3>
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-red-600">$850/team</div>
                    <p className="text-sm text-muted-foreground">
                      Early bird registration ends February 15, 2024
                    </p>
                    <Button className="w-full">Register Now</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Standings */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Current Standings</h3>
                  <div className="space-y-2">
                    {[
                      { team: "Tigers", wins: 8, losses: 2 },
                      { team: "Lions", wins: 7, losses: 3 },
                      { team: "Eagles", wins: 6, losses: 4 },
                      { team: "Hawks", wins: 5, losses: 5 }
                    ].map((team, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{team.team}</span>
                        <span className="text-muted-foreground">{team.wins}-{team.losses}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}