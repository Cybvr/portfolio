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
import { Search, ChevronUp, ChevronDown, Trophy, Medal, Star } from "lucide-react"
import Image from "next/image"

export default function RankingsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDivision, setSelectedDivision] = useState('all_divisions')
  const [selectedRegion, setSelectedRegion] = useState('all_regions')
  const [selectedYear, setSelectedYear] = useState('2024')

  const rankings = [
    {
      id: 1,
      rank: 1,
      previousRank: 2,
      name: "Marcus Johnson",
      team: "Dallas Elite",
      division: "16U",
      region: "Texas",
      stats: {
        ppg: "28.5",
        rpg: "8.2",
        apg: "5.4"
      },
      image: "/placeholder.svg"
    },
    {
      id: 2,
      rank: 2,
      previousRank: 1,
      name: "James Wilson",
      team: "Houston Hoops",
      division: "16U",
      region: "Texas",
      stats: {
        ppg: "25.3",
        rpg: "6.8",
        apg: "7.2"
      },
      image: "/placeholder.svg"
    },
    // Add more player rankings as needed
  ]

  const filteredRankings = rankings.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedDivision === 'all_divisions' || player.division === selectedDivision) &&
    (selectedRegion === 'all_regions' || player.region === selectedRegion)
  )

  return (
    <div className="flex flex-col min-h-screen p-0">
      {/* Hero Section */}
      <section className="w-full py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Player Rankings</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover top-ranked youth basketball players across different divisions and regions
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search players..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedDivision} onValueChange={setSelectedDivision}>
                <SelectTrigger>
                  <SelectValue placeholder="Division" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_divisions">All Divisions</SelectItem>
                  <SelectItem value="12U">12U</SelectItem>
                  <SelectItem value="14U">14U</SelectItem>
                  <SelectItem value="16U">16U</SelectItem>
                  <SelectItem value="18U">18U</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_regions">All Regions</SelectItem>
                  <SelectItem value="Texas">Texas</SelectItem>
                  <SelectItem value="Oklahoma">Oklahoma</SelectItem>
                  <SelectItem value="Louisiana">Louisiana</SelectItem>
                  <SelectItem value="Arkansas">Arkansas</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Rankings Table */}
      <section className="container mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RPG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">APG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRankings.map((player) => (
                  <tr key={player.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {player.rank === 1 && <Trophy className="h-4 w-4 text-yellow-500 mr-2" />}
                        {player.rank === 2 && <Medal className="h-4 w-4 text-gray-400 mr-2" />}
                        {player.rank === 3 && <Medal className="h-4 w-4 text-amber-600 mr-2" />}
                        <span className="font-semibold">{player.rank}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={player.image}
                            alt={player.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{player.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{player.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{player.division}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{player.stats.ppg}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{player.stats.rpg}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{player.stats.apg}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {player.rank < player.previousRank ? (
                        <ChevronUp className="h-5 w-5 text-green-500" />
                      ) : player.rank > player.previousRank ? (
                        <ChevronDown className="h-5 w-5 text-red-500" />
                      ) : (
                        <div className="h-px w-4 bg-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center">
            <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
            <span>1st Place</span>
          </div>
          <div className="flex items-center">
            <Medal className="h-4 w-4 text-gray-400 mr-2" />
            <span>2nd Place</span>
          </div>
          <div className="flex items-center">
            <Medal className="h-4 w-4 text-amber-600 mr-2" />
            <span>3rd Place</span>
          </div>
          <div className="flex items-center">
            <ChevronUp className="h-4 w-4 text-green-500 mr-2" />
            <span>Rank Improved</span>
          </div>
          <div className="flex items-center">
            <ChevronDown className="h-4 w-4 text-red-500 mr-2" />
            <span>Rank Decreased</span>
          </div>
        </div>
      </section>
    </div>
  )
}