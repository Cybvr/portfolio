'use client'

import React, { useState } from 'react'
import { Search, MapPin, Star, Users, Filter } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TeamsPage() {
  const teams = [
    {
      id: 1,
      name: "Dallas Elite Basketball",
      location: "Dallas, TX",
      distance: "2.3 miles",
      rating: 4.8,
      reviews: 24,
      programs: ["12U", "14U", "Elite"],
      tryouts: true
    },
    {
      id: 2,
      name: "Houston Hoops",
      location: "Houston, TX",
      distance: "3.1 miles",
      rating: 4.7,
      reviews: 31,
      programs: ["12U", "15U", "Elite"],
      tryouts: true
    },
    // Add more teams as needed
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Find Basketball Teams</h1>
          <p className="text-xl opacity-90">Search from over 500 youth basketball teams in your area</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-72 flex-shrink-0">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5" />
                Filters
              </h2>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input placeholder="Enter ZIP code" className="pl-9" />
                </div>
              </div>

              {/* Distance Slider */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Distance</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="20"
                    className="w-full"
                  />
                  <span className="text-sm text-gray-500">100 miles</span>
                </div>
              </div>

              {/* Programs Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Programs</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Teams" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    <SelectItem value="elite">Elite</SelectItem>
                    <SelectItem value="select">Select</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gender Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Gender</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Female" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="coed">Co-ed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Age Group Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Age Group</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="11U" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="11u">11U</SelectItem>
                    <SelectItem value="12u">12U</SelectItem>
                    <SelectItem value="13u">13U</SelectItem>
                    <SelectItem value="14u">14U</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Skill Level Filter */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Skill Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Affiliation Filter */}
              <div>
                <label className="text-sm font-medium mb-2 block">Affiliation</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Reebok" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reebok">Reebok</SelectItem>
                    <SelectItem value="nike">Nike</SelectItem>
                    <SelectItem value="adidas">Adidas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Teams List */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing 24 teams</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Recommended" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Nearest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {teams.map((team) => (
                <div 
                  key={team.id}
                  className="bg-white rounded-lg border p-6 hover:border-[#1a2d5a] transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{team.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{team.location}</span>
                        <span>•</span>
                        <span>{team.distance}</span>
                      </div>
                    </div>
                    {team.tryouts && (
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">
                        Tryouts Open
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{team.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{team.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {team.programs.map((program) => (
                      <span 
                        key={program}
                        className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <Button variant="outline">Previous</Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  className={page === 1 ? "bg-[#1a2d5a]" : ""}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}