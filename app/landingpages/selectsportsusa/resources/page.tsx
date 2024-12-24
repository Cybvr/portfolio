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
import { Search, BookOpen, Video, FileText, Download, Clock, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const resources = [
    {
      id: 1,
      title: "Basketball Fundamentals Guide",
      type: "PDF Guide",
      category: "Training",
      description: "Comprehensive guide covering basic to advanced basketball fundamentals",
      downloadCount: 1200,
      duration: "45 mins read",
      thumbnail: "/placeholder.svg",
      fileSize: "2.5 MB"
    },
    {
      id: 2,
      title: "Pro Shooting Technique Breakdown",
      type: "Video",
      category: "Skills",
      description: "Detailed analysis of professional shooting techniques with drills",
      views: 15000,
      duration: "32 mins",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Basketball Nutrition Plan",
      type: "PDF Guide",
      category: "Health",
      description: "Complete nutrition guide for basketball players of all levels",
      downloadCount: 850,
      duration: "20 mins read",
      thumbnail: "/placeholder.svg",
      fileSize: "1.8 MB"
    },
    {
      id: 4,
      title: "Game Strategy Masterclass",
      type: "Video Series",
      category: "Strategy",
      description: "Advanced basketball strategies and game planning",
      views: 8500,
      duration: "4 hours total",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Mental Toughness Workbook",
      type: "Worksheet",
      category: "Mental",
      description: "Exercises and techniques for building mental resilience",
      downloadCount: 650,
      duration: "15 mins read",
      thumbnail: "/placeholder.svg",
      fileSize: "1.2 MB"
    }
  ]

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'all' || resource.category === selectedCategory) &&
    (selectedType === 'all' || resource.type.includes(selectedType))
  )

  return (
    <div className="flex flex-col items-center w-full p-0 m-0">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Basketball Resources
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-lg">
              Access our library of training materials, guides, and videos to improve your basketball knowledge and skills.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 md:px-6">
        <Card className="w-full">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Search resources" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Training">Training</SelectItem>
                  <SelectItem value="Skills">Skills</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                  <SelectItem value="Strategy">Strategy</SelectItem>
                  <SelectItem value="Mental">Mental Training</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Resource Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="PDF">PDF Guides</SelectItem>
                  <SelectItem value="Video">Videos</SelectItem>
                  <SelectItem value="Worksheet">Worksheets</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Resources Grid */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="flex flex-col">
              <div className="relative h-48">
                <Image
                  src={resource.thumbnail}
                  alt={resource.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <div className="flex items-center gap-2 mb-2">
                  {resource.type === 'Video' || resource.type === 'Video Series' ? (
                    <Video className="h-4 w-4 text-blue-500" />
                  ) : (
                    <FileText className="h-4 w-4 text-blue-500" />
                  )}
                  <span className="text-sm text-gray-500">{resource.type}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{resource.duration}</span>
                  </div>
                  {resource.views ? (
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{resource.views.toLocaleString()} views</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{resource.downloadCount.toLocaleString()} downloads</span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <div className="flex items-center justify-between w-full">
                  {resource.fileSize && (
                    <span className="text-sm text-gray-500">{resource.fileSize}</span>
                  )}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button size="sm">
                      {resource.type.includes('Video') ? 'Watch Now' : 'Download'}
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive new resources, training tips, and exclusive content.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-gray-900"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}