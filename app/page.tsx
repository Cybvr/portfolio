'use client';

import React from 'react';
import { Github, Linkedin, ArrowRight, Sparkles, Layers, Users, Zap, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

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
  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col px-4 sm:px-8 md:px-12 py-8 md:py-16 gap-16 md:gap-24">

        {/* Hero / Intro */}
        <section className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="flex flex-col gap-6 md:max-w-2xl">
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
          <div className="shrink-0">
            <Image
              src="/images/jidepinheiro.png"
              alt="Jide Pinheiro"
              width={240}
              height={240}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* Ethos */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Ethos</h2>
          <p className="text-muted-foreground mb-8 max-w-xl">The principles that guide every project and decision.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {ethos.map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 flex gap-4 items-start border border-border">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Capabilities</h2>
          <p className="text-muted-foreground mb-8 max-w-xl">What I bring to the table -- from concept to code.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-card rounded-2xl p-6 border border-border flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <cap.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                <ul className="flex flex-col gap-2">
                  {cap.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Selected Work</h2>
          <p className="text-muted-foreground mb-8 max-w-xl">A few projects I am proud of.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="bg-card border border-border p-4 rounded-2xl group block hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-foreground">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>{project.industry}</Badge>
                  {project.tags.slice(0, 2).map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 border border-border">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">Technical Skills</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-base font-bold mb-3 text-foreground">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Development', 'Branding', 'Strategy', 'UX'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary rounded-xl">
                    <p className="text-sm font-medium text-secondary-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold mb-3 text-foreground">Languages & Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'JavaScript', 'PHP', 'HTML/CSS', 'Next.js', 'React', 'Node.js'].map((lang) => (
                  <div key={lang} className="px-4 py-2 bg-muted rounded-xl">
                    <p className="text-sm font-medium text-foreground">{lang}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold mb-3 text-foreground">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Replit', 'Figma', 'Miro', 'Canva', 'Photoshop', 'Illustrator', 'v0', 'Bolt', 'Juju'].map((tool) => (
                  <div key={tool} className="px-4 py-2 bg-muted rounded-xl">
                    <p className="text-sm font-medium text-foreground">{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
