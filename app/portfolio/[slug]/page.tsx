
'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, ExternalLink, Edit2 } from 'lucide-react'
import { EditProjectDialog } from "@/components/ui/edit-project-dialog"
import Image from "next/image"
import Link from "next/link"
import { getProjectById } from '@/lib/db'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { toast } = useToast()
  const project = await getProjectById(params.slug)

  if (!project) return notFound()

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-4 sm:p-8 md:p-12 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-card p-4 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl">
          <Link href="/portfolio">
            <Button variant="ghost" size="sm" className="mb-4 sm:mb-6 md:mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div>
              <div className="relative aspect-video mb-4 sm:mb-6 rounded-lg overflow-hidden">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              {project.embed && (
                <div className="mt-6">
                  <h2 className="text-base sm:text-lg font-semibold mb-3">Interactive Content</h2>
                  <div className="w-full rounded-lg overflow-hidden" dangerouslySetInnerHTML={{ __html: project.embed }} />
                </div>
              )}
              
              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-muted p-4 sm:p-6 md:p-8 rounded-lg">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h1>
                  <Badge className="bg-zinc-700 text-zinc-300 mb-2 sm:mb-4">{project.industry}</Badge>
                  <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                    {project.tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-4">{project.description}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{project.content}</p>
                </div>

                <div>
                  <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="text-xs sm:text-sm">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Features</h2>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-muted-foreground">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-base sm:text-lg font-semibold mb-1">Client</h2>
                  <p className="text-sm sm:text-base text-muted-foreground mb-1">{project.client}</p>
                  {(project.url || project.liveUrl) && (
                    <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                      <ExternalLink className="w-3 h-3" />
                      <a href={project.url || project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.url || project.liveUrl}
                      </a>
                    </div>
                  )}
                </div>

                

                {process.env.NEXT_PUBLIC_REPLIT_ENVIRONMENT && (
                  <EditProjectDialog 
                    project={project} 
                    onSave={(updatedProject) => {
                      const projectIndex = projects.findIndex(p => p.id === updatedProject.id);
                      if (projectIndex !== -1) {
                        projects[projectIndex] = updatedProject;
                      }
                      toast({
                        title: "Success",
                        description: "Project updated successfully"
                      });
                    }} 
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
