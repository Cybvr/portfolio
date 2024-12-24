'use client'

import { MapPin, Star, Users, Calendar, Phone, Mail, Clock, Trophy, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function TeamPage() {
  const teamData = {
    name: "Dallas Elite Basketball",
    location: "Dallas, TX",
    rating: 4.8,
    reviews: 24,
    description: "Elite youth basketball program focused on player development and competitive success. Our proven training methods and experienced coaching staff help players reach their full potential.",
    programs: ["12U", "14U", "Elite"],
    achievements: [
      "2023 NYBL National Champions",
      "2022 AAU Division 1 Winners",
      "15+ D1 College Placements"
    ],
    upcomingEvents: [
      {
        title: "Summer Tryouts 2024",
        date: "June 15-16, 2024",
        location: "Main Facility"
      },
      {
        title: "Elite Skills Camp",
        date: "July 8-12, 2024",
        location: "Performance Center"
      }
    ],
    schedule: {
      monday: "4:00 PM - 8:00 PM",
      wednesday: "4:00 PM - 8:00 PM",
      saturday: "9:00 AM - 2:00 PM"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="bg-[#1a2d5a] relative h-48">
        <div className="absolute -bottom-16 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end gap-6">
              <div className="w-32 h-32 bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/api/placeholder/128/128"
                  alt="Team logo"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 mb-4 text-white">
                <h1 className="text-4xl font-bold">{teamData.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{teamData.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{teamData.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{teamData.reviews} reviews</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Contact Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="col-span-2 space-y-8">
            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">About Program</h2>
              <p className="text-gray-600 mb-6">{teamData.description}</p>
              <div className="flex gap-2">
                {teamData.programs.map((program) => (
                  <span 
                    key={program}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">Program Schedule</h2>
              <div className="space-y-4">
                {Object.entries(teamData.schedule).map(([day, time]) => (
                  <div key={day} className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <span className="font-medium capitalize">{day}:</span>
                      <span className="ml-2 text-gray-600">{time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Achievements</h2>
              <div className="space-y-4">
                {teamData.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>(214) 555-0123</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>contact@dallaselite.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>1234 Sports Ave, Dallas, TX 75001</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {teamData.upcomingEvents.map((event, index) => (
                  <div key={index} className="group">
                    <Link href="#" className="flex items-center justify-between hover:text-[#1a2d5a]">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <div className="text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-[#1a2d5a]" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}