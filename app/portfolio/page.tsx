
'use client'

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { projects } from '@/data/portfolio'

export default function PortfolioPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/portfolio/${project.id}`} className="group">
            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
              <Image 
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                {project.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
