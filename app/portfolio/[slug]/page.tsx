
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch this data from an API or database
  const project = {
    id: params.slug,
    title: 'Project Title',
    description: 'Comprehensive project description goes here...',
    image: `/images/portfolio/${params.slug}.jpg`,
    category: 'Category',
    date: 'March 2024',
    client: 'Client Name',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    features: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description'
    ]
  }

  return (
    <div className="container py-12">
      <Link href="/portfolio">
        <Button variant="ghost" className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Category</div>
                  <div className="font-medium">{project.category}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Date</div>
                  <div className="font-medium">{project.date}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                  <div className="font-medium">{project.technologies.join(', ')}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-8">{project.description}</p>
          
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2 mb-8">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                {feature}
              </li>
            ))}
          </ul>

          <Button className="gap-2">
            View Live Project
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
