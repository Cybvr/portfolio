
'use client'

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const projects = [
    {
      id: 'solveai',
      title: 'SolveAI',
      description: 'AI Research Assistant Platform',
      image: '/images/portfolio/solveai.jpg',
      category: 'AI & Machine Learning'
    },
    {
      id: 'selectsportsusa',
      title: 'Select Sports USA',
      description: 'Sports Management Platform',
      image: '/images/portfolio/selectsportsusa.jpg',
      category: 'Sports Tech'
    },
    // Add more projects as needed
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Link href={`/portfolio/${project.id}`}>
                <Button variant="outline" className="w-full">View Project</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
