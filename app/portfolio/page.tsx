'use client'

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { projects } from '@/data/portfolio'

export default function PortfolioPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-4 sm:p-8 md:p-12 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-card p-4 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
                <div className="bg-muted p-3 sm:p-4 rounded-lg">
                  <div className="relative aspect-[16/9] mb-3 sm:mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">{project.title}</h2>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge variant="secondary" className="text-xs sm:text-sm">{project.industry}</Badge>
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs sm:text-sm">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

