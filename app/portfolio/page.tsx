'use client'
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { PortfolioProject } from '@/types/portfolio'

export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries')
  const [selectedTag, setSelectedTag] = useState<string>('All Types')
  const [selectedTechnology, setSelectedTechnology] = useState<string>('All Technologies')

  useEffect(() => {
    async function fetchProjects() {
      try {
        const querySnapshot = await getDocs(collection(db, 'jpportfolio'));
        const projectsData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
        })) as PortfolioProject[];
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, [])

  const industries = useMemo(() => ['All Industries', ...new Set(projects.map(p => p.industry))], [projects])
  const tags = useMemo(() => ['All Types', ...new Set(projects.flatMap(p => p.tags))], [projects])
  const technologies = useMemo(() => ['All Technologies', ...new Set(projects.flatMap(p => p.technologies))], [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const industryMatch = selectedIndustry === 'All Industries' || project.industry === selectedIndustry
      const tagMatch = selectedTag === 'All Types' || project.tags.includes(selectedTag)
      const techMatch = selectedTechnology === 'All Technologies' || project.technologies.includes(selectedTechnology)
      return industryMatch && tagMatch && techMatch
    })
  }, [projects, selectedIndustry, selectedTag, selectedTechnology])

  if (loading) return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <div className="animate-pulse font-mono text-sm tracking-widest text-muted-foreground uppercase">Loading Portfolio...</div>
    </div>
  )

  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col p-4 sm:p-8 md:p-12 gap-4 sm:gap-6 md:gap-8">
        <div className=" rounded-xl sm:rounded-2xl md:rounded-3xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="All Industries" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedTag} onValueChange={setSelectedTag}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map(tag => (
                    <SelectItem key={tag} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
                <SelectTrigger>
                  <SelectValue placeholder="All Technologies" />
                </SelectTrigger>
                <SelectContent>
                  {technologies.map(tech => (
                    <SelectItem key={tech} value={tech}>
                      {tech}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-12">
            {/* First 6: 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredProjects.slice(0, 6).map((project) => (
                <Link key={project.id} href={`/portfolio/${project.id}`} className="block">
                  <div className="bg-card border border-border p-6 rounded-2xl">
                    <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-xl">
                      <Image
                        src={project.featuredImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 font-mono uppercase text-[10px] tracking-widest">
                      <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none">{project.industry}</Badge>
                      {project.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-muted-foreground">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Remaining: List view */}
            {filteredProjects.length > 6 && (
              <div className="flex flex-col gap-6">
                {filteredProjects.slice(6).map((project) => (
                  <Link key={project.id} href={`/portfolio/${project.id}`} className="block">
                    <div className=" border-border border-b p-4  flex flex-col sm:flex-row gap-6">
                      <div className="relative w-full sm:w-48 h-32 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={project.featuredImage}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center flex-1">
                        <h2 className="text-lg font-bold mb-3">{project.title}</h2>
                        <div className="flex flex-wrap gap-2 font-mono uppercase text-[10px] tracking-widest">
                          <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none">{project.industry}</Badge>
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-muted-foreground">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
