'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Users, Clock, Filter, Search, Star, Trophy, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CampsAndClinicsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedCampType, setSelectedCampType] = useState('')

  const upcomingCamps = [
    {
      id: 1,
      title: "Elite Basketball Summer Camp",
      organization: "Dallas Elite Basketball",
      location: "Dallas, TX",
      dates: "June 15-20, 2024",
      ageGroups: ["12U", "14U", "16U"],
      price: "$299",
      spotsLeft: 8,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 2,
      title: "Point Guard Skills Clinic",
      organization: "Houston Hoops Academy",
      location: "Houston, TX",
      dates: "July 8-10, 2024",
      ageGroups: ["13U", "15U"],
      price: "$199",
      spotsLeft: 12,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 3,
      title: "Shooting Fundamentals Workshop",
      organization: "Austin Sharpshooters",
      location: "Austin, TX",
      dates: "August 1-3, 2024",
      ageGroups: ["12U", "14U", "16U", "18U"],
      price: "$149",
      spotsLeft: 20,
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      id: 4,
      title: "Girls Basketball Leadership Camp",
      organization: "San Antonio Lady Ballers",
      location: "San Antonio, TX",
      dates: "July 22-26, 2024",
      ageGroups: ["14U", "16U", "18U"],
      price: "$279",
      spotsLeft: 15,
      image: "/placeholder.svg?height=300&width=400"
    },
  ]

  const filteredCamps = upcomingCamps.filter(camp => 
    camp.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedAgeGroup === '' || camp.ageGroups.includes(selectedAgeGroup)) &&
    (selectedLocation === '' || camp.location.includes(selectedLocation)) &&
    (selectedCampType === '' || camp.title.toLowerCase().includes(selectedCampType.toLowerCase()))
  )

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none max-w-[800px]">
              Basketball Camps & Clinics
            </h1>
            <p className="max-w-[500px] text-gray-500 md:text-lg dark:text-gray-400">
              Find and register for top-rated basketball camps and clinics near you. Elevate your game with expert coaching and intensive training.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" variant="default">Find a Camp</Button>
              <Button size="lg" variant="secondary">Host a Camp</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Search camps & clinics" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_ages">All Ages</SelectItem>
                  <SelectItem value="10U">10U</SelectItem>
                  <SelectItem value="12U">12U</SelectItem>
                  <SelectItem value="14U">14U</SelectItem>
                  <SelectItem value="16U">16U</SelectItem>
                  <SelectItem value="18U">18U</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_locations">All Locations</SelectItem>
                  <SelectItem value="Dallas">Dallas, TX</SelectItem>
                  <SelectItem value="Houston">Houston, TX</SelectItem>
                  <SelectItem value="Austin">Austin, TX</SelectItem>
                  <SelectItem value="San Antonio">San Antonio, TX</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCampType} onValueChange={setSelectedCampType}>
                <SelectTrigger>
                  <SelectValue placeholder="Camp Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_types">All Types</SelectItem>
                  <SelectItem value="Summer">Summer Camps</SelectItem>
                  <SelectItem value="Skills">Skills Clinics</SelectItem>
                  <SelectItem value="Elite">Elite Training</SelectItem>
                  <SelectItem value="Team">Team Camps</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Featured Camps Section */}
      <section className="container mx-auto px-4 md:px-6 w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8">Upcoming Camps & Clinics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCamps.map((camp) => (
            <Card key={camp.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={camp.image}
                  alt={camp.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-bold mb-2">{camp.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{camp.organization}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{camp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{camp.dates}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{camp.ageGroups.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{camp.spotsLeft} spots remaining</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xl font-bold">{camp.price}</span>
                  <Button className="text-primary">Register Now</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Camps?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 mb-2 text-yellow-500" />,
                title: "Expert Coaching",
                description: "Learn from experienced coaches and former professional players"
              },
              {
                icon: <Trophy className="h-8 w-8 mb-2 text-blue-500" />,
                title: "Skill Development",
                description: "Focus on fundamental skills and advanced techniques"
              },
              {
                icon: <Shield className="h-8 w-8 mb-2 text-green-500" />,
                title: "Safe Environment",
                description: "All coaches are certified and background checked"
              }
            ].map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  {benefit.icon}
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-500">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-7xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Game?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join one of our camps today and take your basketball skills to the next level!
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">Find a Camp</Button>
            <Button size="lg" variant="outline">
              <Link href="/host">Become a Host</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}