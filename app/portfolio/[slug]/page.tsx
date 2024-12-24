
'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from '@/data/portfolio'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.id === params.slug) || projects[0]

  return (
    <div className="w-full min-h-screen bg-[#0A0A0B] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/portfolio">
          <Button variant="ghost" className="mb-8 group flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20" />
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            
            {project.gallery.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
            
            <Card className="bg-[#0A0A0B] border border-white/10">
              <div className="p-6 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Category</div>
                  <div className="font-medium">{project.category}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Client</div>
                  <div className="font-medium">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Created</div>
                  <div className="font-medium">
                    {new Date(project.dateCreated).toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Updated</div>
                  <div className="font-medium">
                    {new Date(project.dateUpdated).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <div className="flex gap-2 mb-6">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {project.title}
            </h1>
            
            <div className="prose prose-invert max-w-none mb-12">
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
                <li key={index} className="flex items-start gap-2 text-gray-400">
                  <span className="text-purple-500">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {project.liveUrl && (
              <Button className="group flex items-center gap-2">
                View Live Project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
