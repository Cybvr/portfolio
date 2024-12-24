
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { PortfolioProject } from "@/types/portfolio"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project: PortfolioProject = {
    id: params.slug,
    title: 'Project Title',
    description: 'Project overview description...',
    content: 'Detailed project content and case study...',
    featuredImage: `/images/portfolio/${params.slug}.jpg`,
    gallery: [`/images/portfolio/${params.slug}/1.jpg`],
    category: 'Category',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    client: 'Client Name',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    features: [
      'Feature 1 description',
      'Feature 2 description',
      'Feature 3 description'
    ],
    status: 'published',
    dateCreated: '2024-01-01',
    dateUpdated: '2024-03-15'
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
              src={project.featuredImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          
          {project.gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
          
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
                  <div className="text-sm text-muted-foreground">Created</div>
                  <div className="font-medium">
                    {new Date(project.dateCreated).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Updated</div>
                  <div className="font-medium">
                    {new Date(project.dateUpdated).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-8">{project.description}</p>
          
          <div className="prose max-w-none mb-8">
            {project.content}
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Technologies</h2>
          <div className="flex gap-2 mb-8">
            {project.technologies.map(tech => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-2 mb-8">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                {feature}
              </li>
            ))}
          </ul>

          {project.liveUrl && (
            <Button className="gap-2">
              View Live Project
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
