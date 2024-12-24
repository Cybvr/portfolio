
'use client'

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { projects } from '@/data/portfolio'

export default function PortfolioPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-12 gap-8">
        <div className="bg-card p-12 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h2 className="text-lg font-medium mb-3">{project.title}</h2>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.category}</Badge>
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag}>{tag}</Badge>
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
