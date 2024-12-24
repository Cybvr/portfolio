
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { PortfolioProject } from "@/types/portfolio"

export default function PortfolioPage() {
  const projects: PortfolioProject[] = [
    {
      id: 'solveai',
      title: 'SolveAI',
      description: 'AI Research Assistant Platform',
      content: 'Detailed content about SolveAI project...',
      featuredImage: '/images/portfolio/solveai.jpg',
      gallery: ['/images/portfolio/solveai/1.png'],
      category: 'AI & Machine Learning',
      tags: ['AI', 'Machine Learning', 'Research'],
      client: 'SolveAI Inc',
      technologies: ['React', 'Python', 'TensorFlow'],
      liveUrl: 'https://solveai.com',
      features: ['AI-powered research', 'Document analysis'],
      status: 'published',
      dateCreated: '2024-01-01',
      dateUpdated: '2024-03-15'
    },
    {
      id: 'selectsportsusa',
      title: 'Select Sports USA',
      description: 'Sports Management Platform',
      content: 'Comprehensive sports management solution...',
      featuredImage: '/images/portfolio/selectsportsusa.jpg',
      gallery: [],
      category: 'Sports Tech',
      tags: ['Sports', 'Management', 'Athletes'],
      client: 'Select Sports USA',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      features: ['Team management', 'Event scheduling'],
      status: 'published',
      dateCreated: '2024-02-01',
      dateUpdated: '2024-03-20'
    }
  ]

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.filter(p => p.status === 'published').map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image 
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex gap-2 mb-2">
                <Badge variant="secondary">{project.category}</Badge>
                {project.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="text-sm text-muted-foreground mb-4">
                Updated: {new Date(project.dateUpdated).toLocaleDateString()}
              </div>
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
