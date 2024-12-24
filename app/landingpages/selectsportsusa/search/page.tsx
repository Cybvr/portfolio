'use client';

import React, { useState } from 'react';
import { Search, Filter, MapPin, ChevronDown, Star, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SearchPage() {
  const [searchResults] = useState([
    {
      id: 1,
      name: "Dallas Elite Basketball",
      location: "Dallas, TX",
      distance: "2.3 miles",
      ageGroups: ["12U", "14U"],
      skillLevel: "Elite",
      rating: 4.8,
      reviews: 24,
      availability: "Tryouts Open",
      image: "/api/placeholder/100/100",
    },
    // More results...
  ]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Basketball Teams</h1>
          <p className="text-slate-600">Search from over 500 youth basketball teams in your area</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Filters Section */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <Input
                      placeholder="Enter ZIP code"
                      className="pl-9"
                    />
                  </div>
                </div>

                {/* Distance Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Distance</label>
                  <Slider
                    defaultValue={[20]}
                    max={50}
                    step={1}
                  />
                  <div className="text-sm text-slate-500 mt-2">Within 20 miles</div>
                </div>

                {/* Age Group */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Age Group</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      {["8U", "10U", "12U", "14U", "16U", "18U"].map((age) => (
                        <SelectItem key={age} value={age}>{age}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Skill Level */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Skill Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select skill level" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Recreational", "Competitive", "Elite"].map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Gender */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Gender</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Boys", "Girls", "Co-ed"].map((gender) => (
                        <SelectItem key={gender} value={gender}>{gender}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Level Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {["AAU", "Select/Club", "School", "Recreation"].map((level) => (
                        <SelectItem key={level} value={level}>{level}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* State Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">State</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Texas", "Oklahoma", "Louisiana", "Arkansas"].map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Conference Filter */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Conference</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select conference" />
                    </SelectTrigger>
                    <SelectContent>
                      {["NYBL", "GASO", "UAA", "Adidas 3SSB", "Nike EYBL"].map((conference) => (
                        <SelectItem key={conference} value={conference}>{conference}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Filters */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Open Roster", "Tryouts Open", "Waitlist"].map((status) => (
                        <SelectItem key={status} value={status}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-9">
            {/* Results Header */}
            <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Showing <span className="font-medium">24</span> teams
              </div>
              <Select defaultValue="recommended">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {searchResults.map((team) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg">{team.name}</h3>
                          <Badge variant="secondary">{team.availability}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-slate-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            {team.location} • {team.distance}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="ml-1 text-sm font-medium">{team.rating}</span>
                            </div>
                            <div className="flex items-center text-sm text-slate-600">
                              <Users className="w-4 h-4 mr-1" />
                              {team.reviews} reviews
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {team.ageGroups.map((age) => (
                              <Badge key={age} variant="outline">{age}</Badge>
                            ))}
                            <Badge variant="outline">{team.skillLevel}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-1 rounded border hover:bg-slate-50">Previous</button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-1 rounded ${
                      page === 1 ? 'bg-blue-600 text-white' : 'hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-1 rounded border hover:bg-slate-50">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}