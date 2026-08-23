'use client'

import { useEffect, useMemo, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { PortfolioProject } from '@/types/portfolio'
import { Sidebar } from '@/components/Sidebar'
import { PostList, type PostListItem } from '@/components/PostList'

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

  const projectItems = useMemo<PostListItem[]>(
    () =>
      filteredProjects.map((project) => ({
        id: project.id,
        href: `/portfolio/${project.id}`,
        title: project.title,
        meta: [project.industry, ...project.tags.slice(0, 2)].filter(Boolean).join(' · '),
        thumbnail: project.featuredImage,
      })),
    [filteredProjects]
  )

  if (loading) {
    return (
      <div className="w-full bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-8 md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground">Loading portfolio</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-10 md:gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col">
        <section className="grid gap-8 border-t border-foreground py-8 md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-foreground">Filters</p>
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

        <section className="grid gap-8 border-t border-b border-foreground py-8 md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-foreground">Projects</p>
          </div>
          <PostList items={projectItems} emptyLabel="No projects match these filters." />
        </section>
          </div>
          <Sidebar showWork={false} className="lg:sticky lg:top-8 lg:self-start lg:border-l lg:border-border lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
