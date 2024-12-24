'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { MapPin, Users, Search, Star, Award, Medal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all_regions')
  const [selectedProgramType, setSelectedProgramType] = useState('all_types')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all_ages')

  const programs = [
    {
      id: 1,
      name: "Elite Basketball Academy",
      location: "Dallas, TX",
      rating: 4.9,
      reviewCount: 128,
      programType: "Academy",
      ageGroups: ["12U", "14U", "16U", "18U"],
      achievements: ["State Champions 2023", "15+ D1 Commits"],
      image: "/placeholder.svg?height=200&width=300",
      verified: true
    },
    {
      id: 2,
      name: "Houston Hoops Development",
      location: "Houston, TX",
      rating: 4.8,
      reviewCount: 95,
      programType: "Development Program",
      ageGroups: ["10U", "12U", "14U"],
      achievements: ["Youth Program of the Year"],
      image: "/placeholder.svg?height=200&width=300",
      verified: true
    },
    {
      id: 3,
      name: "Austin Basketball Club",
      location: "Austin, TX",
      rating: 4.7,
      reviewCount: 73,
      programType: "Club",
      ageGroups: ["14U", "16U", "18U"],
      achievements: ["Regional Champions 2023"],
      image: "/placeholder.svg?height=200&width=300",
      verified: false
    },
    {
      id: 4,
      name: "SA Youth Basketball",
      location: "San Antonio, TX",
      rating: 4.6,
      reviewCount: 82,
      programType: "Youth Program",
      ageGroups: ["8U", "10U", "12U"],
      achievements: ["Community Excellence Award"],
      image: "/placeholder.svg?height=200&width=300",
      verified: true
    },
  ]

  const filteredPrograms = programs.filter(program => 
    program.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRegion === 'all_regions' || program.location.includes(selectedRegion)) &&
    (selectedProgramType === 'all_types' || program.programType.includes(selectedProgramType)) &&
    (selectedAgeGroup === 'all_ages' || program.ageGroups.includes(selectedAgeGroup))
  )

  return (
    <div className="flex flex-col items-center w-full p-0">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Basketball Programs
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-lg">
              Discover top-rated basketball programs and organizations near you. Find the perfect fit for your athletic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 md:px-6">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Search programs" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_regions">All Regions</SelectItem>
                  <SelectItem value="Dallas">Dallas</SelectItem>
                  <SelectItem value="Houston">Houston</SelectItem>
                  <SelectItem value="Austin">Austin</SelectItem>
                  <SelectItem value="San Antonio">San Antonio</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedProgramType} onValueChange={setSelectedProgramType}>
                <SelectTrigger>
                  <SelectValue placeholder="Program Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_types">All Types</SelectItem>
                  <SelectItem value="Academy">Academy</SelectItem>
                  <SelectItem value="Club">Club</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                  <SelectItem value="Youth">Youth Program</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedAgeGroup} onValueChange={setSelectedAgeGroup}>
                <SelectTrigger>
                  <SelectValue placeholder="Age Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_ages">All Ages</SelectItem>
                  <SelectItem value="8U">8U</SelectItem>
                  <SelectItem value="10U">10U</SelectItem>
                  <SelectItem value="12U">12U</SelectItem>
                  <SelectItem value="14U">14U</SelectItem>
                  <SelectItem value="16U">16U</SelectItem>
                  <SelectItem value="18U">18U</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Programs List Section */}
      <section className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{program.name}</h3>
                      {program.verified && (
                        <Award className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{program.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="font-semibold">{program.rating}</span>
                      <span className="text-gray-500">({program.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{program.ageGroups.join(", ")}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.achievements.map((achievement, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                        >
                          <Medal className="h-3 w-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 bg-blue-500 text-white mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join a Program?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step in your basketball journey. Connect with top programs today!
          </p>
          <div className="space-x-4">
            <Button size="lg" variant="secondary">Find a Program</Button>
            <Button size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}