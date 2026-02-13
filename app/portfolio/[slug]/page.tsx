'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react'
import { projects } from "@/data/portfolio"
import Image from "next/image"
import Link from "next/link"
import { notFound } from 'next/navigation'
import type { PortfolioProject } from '@/types/portfolio'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { toast } = useToast()
  const [project, setProject] = useState<PortfolioProject | null>(null)
  const [loading, setLoading] = useState(true)

  // Navigation logic
  const currentIndex = projects.findIndex(p => p.id === params.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]

  useEffect(() => {
    const foundProject = projects.find(p => p.id === params.slug)
    if (!foundProject) {
      notFound()
    }
    setProject(foundProject)
    setLoading(false)
  }, [params.slug])

  if (loading || !project) return null

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-4 sm:p-8 md:p-12 gap-12 md:gap-24">
        <div className="max-w-6xl mx-auto w-full">
          <Link href="/portfolio">
            <Button variant="ghost" size="sm" className="mb-4 sm:mb-6 md:mb-12 font-mono text-[10px] uppercase tracking-widest px-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-8">
              <div className="relative w-full aspect-[16/10] rounded-[40px] overflow-hidden border border-border">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {project.gallery && project.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
                      <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {project.embed && (
                <div className="w-full aspect-video rounded-3xl overflow-hidden border border-border">
                  <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: project.embed }} />
                </div>
              )}
            </div>

            <div className="space-y-12">
              <div>
                <div className="flex flex-wrap gap-2 font-mono uppercase text-[10px] tracking-widest mb-6">
                  <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none px-4 py-1">{project.industry}</Badge>
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-muted-foreground border-border px-4 py-1">{tag}</Badge>
                  ))}
                </div>
                <h1 className="text-5xl md:text-6xl font-bold font-syne mb-8 tracking-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
                <div className="prose prose-zinc dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed">
                  {project.content}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border">
                <div>
                  <h2 className="text-[10px] items-center font-mono uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">Technologies</h2>
                  <ul className="space-y-2">
                    {project.technologies.slice(0, 5).map(tech => (
                      <li key={tech} className="text-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground/20" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-[10px] font-mono uppercase tracking-[0.3em] font-medium text-muted-foreground mb-4">Engagement</h2>
                  <div className="space-y-4">
                    <p className="text-foreground">{project.client}</p>
                    {(project.url || project.liveUrl) && (
                      <a
                        href={project.url || project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:opacity-60 transition-opacity underline underline-offset-4"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Navigation Section */}
        <div className="max-w-6xl mx-auto w-full pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Previous Project */}
            {prevProject && (
              <Link href={`/portfolio/${prevProject.id}`} className="group block">
                <div className="bg-[#FAF9F6] rounded-[40px] p-6 flex items-center gap-6 transition-all duration-300 hover:bg-[#F3F2EE] h-full">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#E5E4DE] flex items-center justify-center text-[#4A4A35] transition-transform group-hover:-translate-x-1">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden hidden sm:block">
                    <Image
                      src={prevProject.featuredImage}
                      alt={prevProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#8B8B6B] block mb-2">Previous</span>
                    <h3 className="text-xl font-bold font-syne text-[#4A4A35] line-clamp-1">{prevProject.title}</h3>
                  </div>
                </div>
              </Link>
            )}

            {/* Next Project */}
            {nextProject && (
              <Link href={`/portfolio/${nextProject.id}`} className="group block">
                <div className="bg-[#FAF9F6] rounded-[40px] p-6 flex items-center gap-6 transition-all duration-300 hover:bg-[#F3F2EE] h-full text-right justify-end">
                  <div className="flex-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#8B8B6B] block mb-2">Next</span>
                    <h3 className="text-xl font-bold font-syne text-[#4A4A35] line-clamp-1">{nextProject.title}</h3>
                  </div>
                  <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden hidden sm:block">
                    <Image
                      src={nextProject.featuredImage}
                      alt={nextProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#4A4A35] flex items-center justify-center text-white transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
