
'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from '@/data/portfolio'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.id === params.slug)
  
  if (!project) return notFound()

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-12 gap-8">
        <div className="bg-card p-12 rounded-3xl">
          <Link href="/portfolio">
            <Button variant="ghost" size="sm" className="mb-8">
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
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
                  <Badge className="bg-zinc-700 text-zinc-300 mb-4">{project.industry}</Badge>
                  <div className="flex gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-muted-foreground">{project.content}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">Key Features</h2>
                  <ul className="space-y-2 text-sm">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.liveUrl && (
                  <Button className="gap-2">
                    View Live Project
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
