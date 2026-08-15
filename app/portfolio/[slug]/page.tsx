'use client'

import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Image from "next/image"
import Link from "next/link"
import { notFound } from 'next/navigation'
import type { PortfolioProject } from '@/types/portfolio'
import { Sidebar } from '@/components/Sidebar'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<PortfolioProject | null>(null)
  const [nextProject, setNextProject] = useState<PortfolioProject | null>(null)
  const [prevProject, setPrevProject] = useState<PortfolioProject | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjectData() {
      try {
        const querySnapshot = await getDocs(collection(db, 'jpportfolio'));
        const allProjects = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as PortfolioProject[];

        const foundProject = allProjects.find((p) => p.id === params.slug);

        if (!foundProject) {
          notFound();
          return;
        }

        const currentIndex = allProjects.findIndex((p) => p.id === params.slug);
        setProject(foundProject);
        setNextProject(allProjects[(currentIndex + 1) % allProjects.length]);
        setPrevProject(allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjectData();
  }, [params.slug])

  if (loading || !project) return null

  const detailRows = [
    { label: 'Industry', value: project.industry },
    { label: 'Client', value: project.client },
    { label: 'Tags', value: project.tags.join(', ') },
    { label: 'Technology', value: project.technologies.join(', ') },
  ]

  const narrativeRows = [
    { label: 'Challenges', value: project.challenges },
    { label: 'Solutions', value: project.solutions },
    { label: 'Insight', value: project.insight },
    { label: 'Strategy', value: project.strategy },
    { label: 'Outcomes', value: project.outcomes },
  ].filter((item) => item.value)

  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-10 md:gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col">
        <section className="grid gap-8 border-t border-foreground py-8 md:gap-10 md:py-10">
          <div className="space-y-6">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Case Study</p>
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-3xl leading-tight sm:text-4xl md:text-5xl">{project.title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">{project.description}</p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Overview</p>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="relative w-full aspect-[16/10] overflow-hidden border border-border">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              {project.content && (
                <p className="content-body max-w-3xl text-base leading-8 text-muted-foreground">{project.content}</p>
              )}
            </div>

            <div className="border-t border-border">
              {detailRows.map((item, index) => (
                <div key={item.label} className="grid gap-3 border-b border-border py-4 md:grid-cols-[56px_minmax(0,1fr)] md:gap-6">
                  <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">{item.label}</p>
                    <p className="text-base leading-8 text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              {(project.url || project.liveUrl) && (
                <a
                  href={project.url || project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 pt-5 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Visit Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </section>

        {narrativeRows.length > 0 && (
          <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Narrative</p>
            </div>
            <div className="border-t border-border">
              {narrativeRows.map((item, index) => (
                <div key={item.label} className="grid gap-3 border-b border-border py-5 md:grid-cols-[56px_minmax(0,180px)_minmax(0,1fr)] md:gap-6">
                  <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                  <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">{item.label}</p>
                  <p className="text-base leading-8 text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Gallery</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image src={img} alt={`Gallery ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.imageSet1 && project.imageSet1.length > 0 && (
          <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Visuals 01</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.imageSet1.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden border border-border">
                  <Image src={img} alt={`Visual set 1 - ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.imageSet2 && project.imageSet2.length > 0 && (
          <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Visuals 02</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {project.imageSet2.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden border border-border">
                  <Image src={img} alt={`Visual set 2 - ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.imageSet3 && project.imageSet3.length > 0 && (
          <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Visuals 03</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {project.imageSet3.map((img, i) => (
                <div key={i} className="relative aspect-[21/9] overflow-hidden border border-border">
                  <Image src={img} alt={`Visual set 3 - ${i + 1}`} fill sizes="100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.embed && (
          <section className="grid gap-8 border-t border-border py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Embed</p>
            </div>
            <div className="border border-border aspect-video">
              <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: project.embed }} />
            </div>
          </section>
        )}

        <section className="grid gap-8 border-t border-b border-foreground py-8 md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Navigation</p>
          </div>
          <div className="border-t border-border">
            {prevProject && (
              <Link href={`/portfolio/${prevProject.id}`} className="grid gap-3 border-b border-border py-5 transition-colors hover:text-primary md:grid-cols-[56px_minmax(0,1fr)_auto] md:gap-6">
                <span className="text-sm text-foreground">01</span>
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Previous</p>
                  <p className="text-2xl text-foreground">{prevProject.title}</p>
                </div>
                <ArrowLeft className="w-5 h-5 text-muted-foreground" />
              </Link>
            )}
            {nextProject && (
              <Link href={`/portfolio/${nextProject.id}`} className="grid gap-3 py-5 transition-colors hover:text-primary md:grid-cols-[56px_minmax(0,1fr)_auto] md:gap-6">
                <span className="text-sm text-foreground">02</span>
                <div>
                  <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">Next</p>
                  <p className="text-2xl text-foreground">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            )}
          </div>
        </section>
          </div>
          <Sidebar className="lg:sticky lg:top-8 lg:self-start lg:border-l lg:border-border lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
