
'use client'

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from '@/data/portfolio'

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0B] text-white">
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 sticky top-32">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Portfolio
            </h1>
            <p className="text-gray-400">A collection of projects showcasing design and development expertise.</p>
          </div>
          
          <div className="w-full md:w-2/3 grid gap-12">
            {projects.filter(p => p.status === 'published').map((project, index) => (
              <div key={project.id} className={`group ${index % 2 === 0 ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12'}`}>
                <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:scale-105 transition-transform duration-700" />
                  <Image 
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="text-gray-400">{project.description}</p>
                  <Link href={`/portfolio/${project.id}`}>
                    <Button variant="ghost" className="group/btn flex items-center gap-2 hover:gap-4 transition-all">
                      View Case Study
                      <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
