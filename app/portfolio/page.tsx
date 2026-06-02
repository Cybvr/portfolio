'use client'

import Link from "next/link"
import { useEffect, useMemo, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
        const projectsData = querySnapshot.docs.map((doc) => ({
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

  const industries = useMemo(() => ['All Industries', ...new Set(projects.map((p) => p.industry).filter(Boolean))], [projects])
  const tags = useMemo(() => ['All Types', ...new Set(projects.flatMap((p) => p.tags || []))], [projects])
  const technologies = useMemo(() => ['All Technologies', ...new Set(projects.flatMap((p) => p.technologies || []))], [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const industryMatch = selectedIndustry === 'All Industries' || project.industry === selectedIndustry
      const tagMatch = selectedTag === 'All Types' || project.tags.includes(selectedTag)
      const techMatch = selectedTechnology === 'All Technologies' || project.technologies.includes(selectedTechnology)
      return industryMatch && tagMatch && techMatch
    })
  }, [projects, selectedIndustry, selectedTag, selectedTechnology])

  if (loading) {
    return (
      <div className="w-full bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-8 md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Loading portfolio</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <section className="grid gap-10 border-t border-foreground pt-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:pt-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Portfolio</p>
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-4xl leading-tight sm:text-5xl md:text-7xl">
              Selected work across strategy, product, and digital expression.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              A working index of projects across industries, platforms, and business contexts.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Filters</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
              <SelectTrigger className="rounded-none">
                <SelectValue placeholder="All Industries" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="rounded-none">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                {tags.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedTechnology} onValueChange={setSelectedTechnology}>
              <SelectTrigger className="rounded-none">
                <SelectValue placeholder="All Technologies" />
              </SelectTrigger>
              <SelectContent>
                {technologies.map((tech) => (
                  <SelectItem key={tech} value={tech}>
                    {tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        <section className="grid gap-10 border-t border-b border-foreground py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
          </div>
          <div className="border-t border-border">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="grid gap-3 border-b border-border py-5 transition-colors hover:text-primary md:grid-cols-[56px_minmax(0,180px)_minmax(0,1fr)_auto] md:gap-6"
              >
                <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">{project.industry}</span>
                <div className="space-y-2">
                  <h2 className="text-2xl text-foreground">{project.title}</h2>
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground">{project.description}</p>
                  <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                    {[...project.tags.slice(0, 2), ...project.technologies.slice(0, 2)].join(' / ')}
                  </p>
                </div>
                <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground md:text-right">View</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
