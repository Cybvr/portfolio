'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Sparkles, Layers, Users, Zap, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PortfolioProject } from '@/types/portfolio';

const ethos = [
  {
    icon: Eye,
    title: 'Clarity over complexity',
    description: 'Every design decision should reduce friction, not add it. I strip away the unnecessary until only what matters remains.',
  },
  {
    icon: Users,
    title: 'People first, pixels second',
    description: 'Technology should serve human needs. I start with empathy, then build outward with intention and care.',
  },
  {
    icon: Heart,
    title: 'Craft with conviction',
    description: 'Details matter. From spacing to micro-interactions, I believe the small things compound into experiences people love.',
  },
  {
    icon: Sparkles,
    title: 'Culture shapes design',
    description: 'True innovation happens when technical expertise meets cultural understanding. Context is everything.',
  },
];

const capabilities = [
  {
    icon: Layers,
    title: 'Product Design',
    items: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design'],
  },
  {
    icon: Zap,
    title: 'Development',
    items: ['React / Next.js', 'TypeScript', 'Node.js', 'Responsive Interfaces'],
  },
  {
    icon: Users,
    title: 'Strategy',
    items: ['Brand Identity', 'UX Audits', 'Product Roadmaps', 'Design Thinking Workshops'],
  },
];

export default function Page() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col px-4 sm:px-8 md:px-12 py-8 md:py-16 gap-16 md:gap-24">

        {/* Hero / Intro */}
        <section className="flex flex-col items-center gap-12 text-center">
          <div className="shrink-0">
            <Image
              src="/images/jidepinheiro.png"
              alt="Jide Pinheiro"
              width={240}
              height={240}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center gap-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Designing at the intersection of people and technology
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I bridge human needs and technological possibilities. Having worked across AI, fintech, and consumer technology, I make complex systems feel intuitive and human.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/Cybvr" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jidepinheiro/" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Ethos */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Ethos</h2>
          <p className="text-muted-foreground mb-12 mx-auto max-w-xl">The principles that guide every project and decision.</p>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {ethos.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-8 flex gap-6 items-start border border-border">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Capabilities</h2>
          <p className="text-muted-foreground mb-12 mx-auto max-w-xl">What I bring to the table -- from concept to code.</p>
          <div className="grid sm:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-card rounded-2xl p-8 border border-border flex flex-col items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <cap.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{cap.title}</h3>
                <ul className="flex flex-col items-center gap-3">
                  {cap.items.map((item) => (
                    <li key={item} className="text-base text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Selected Work</h2>
          <p className="text-muted-foreground mb-12 mx-auto max-w-xl">A few projects I am proud of.</p>
          <div className="grid sm:grid-cols-2 gap-12">
            {projects.slice(0, 4).map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="block text-left">
                <div className="bg-card border border-border p-8 rounded-[40px]">
                  <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-[30px]">
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">{project.title}</h3>
                  <div className="flex flex-wrap gap-3 font-mono uppercase text-[10px] tracking-widest">
                    <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none px-4 py-1">{project.industry}</Badge>
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="outline" className="text-muted-foreground border-border px-4 py-1">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
