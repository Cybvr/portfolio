'use client';

import React from 'react';
import { Github, Linkedin, ArrowRight, Sparkles, Users, Lightbulb, Layers, PenTool, Code2, BarChart3, Megaphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

const ethosPrinciples = [
  {
    icon: Sparkles,
    title: "Human-Centered",
    description: "Every design decision starts with empathy. I prioritize understanding the people who will use a product before shaping how it looks or works.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Great work is never made in isolation. I believe in open dialogue with stakeholders, engineers, and end users to build something truly meaningful.",
  },
  {
    icon: Lightbulb,
    title: "Intentional",
    description: "No detail is accidental. From typography to interaction patterns, every choice serves a purpose and contributes to a cohesive experience.",
  },
  {
    icon: Layers,
    title: "Systems-Driven",
    description: "I think in systems, not screens. Building scalable design frameworks ensures consistency as products grow and evolve over time.",
  },
];

const capabilities = [
  {
    icon: PenTool,
    title: "Product Design",
    description: "End-to-end design from discovery and wireframing through high-fidelity prototypes and handoff.",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Full-stack implementation with React, Next.js, TypeScript, and Node.js -- bridging the gap between design and engineering.",
  },
  {
    icon: Layers,
    title: "Brand & Identity",
    description: "Visual identity systems, design language, and brand guidelines that tell a compelling and cohesive story.",
  },
  {
    icon: BarChart3,
    title: "Strategy & Research",
    description: "User research, competitive analysis, and data-informed strategy to ensure products solve real problems.",
  },
  {
    icon: Megaphone,
    title: "Content & Marketing",
    description: "Presentation design, pitch decks, and marketing materials that communicate value clearly and persuasively.",
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Tech",
    description: "Designing for AI-powered products and integrating emerging technology into intuitive user experiences.",
  },
];

export default function Page() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-8 md:px-12 py-8 gap-16">

        {/* Hero / Intro */}
        <section className="flex flex-col md:flex-row items-start gap-8 pt-8">
          <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-lg sm:text-xl leading-relaxed text-foreground">
                I think that design is not just about aesthetics -- it is about bridging human needs and technological possibilities. Every interaction is an opportunity to make life more intuitive. Having worked across AI, fintech, and consumer technology, I am fascinated by how different industries share a common challenge: making complex systems feel human.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-foreground">
                Excellence in design is about more than the end product -- it is about process, collaboration, and impact. True innovation emerges where technical expertise meets cultural understanding, creating solutions that enhance how we live and work.
              </p>
            </div>
            <div className="w-full max-w-xs">
              <Image
                src="/images/jidepinheiro.png"
                alt="Jide Pinheiro"
                width={240}
                height={240}
                className="rounded-2xl"
              />
            </div>
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
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Ethos</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            The principles that guide my work and shape every project I take on.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {ethosPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="bg-card p-6 rounded-2xl flex flex-col gap-3 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                  <principle.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Capabilities</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            A blend of design, technology, and strategy -- here is what I bring to the table.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-card p-6 rounded-2xl flex flex-col gap-3 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <capability.icon className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work */}
        <section className="bg-card p-6 sm:p-8 md:p-12 rounded-2xl border border-border">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Selected Work</h2>
            <Link href="/portfolio" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {projects.slice(0, 4).map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`} className="bg-muted p-4 rounded-xl group block">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-medium mb-3 text-foreground">{project.title}</h3>
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
        <section className="bg-card p-6 sm:p-8 md:p-12 rounded-2xl border border-border">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Technical Skills</h2>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-base font-semibold mb-3 text-foreground">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Development', 'Branding', 'Strategy', 'UX'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-muted rounded-lg">
                    <p className="text-xs sm:text-sm font-medium text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3 text-foreground">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['TypeScript', 'JavaScript', 'PHP', 'HTML/CSS', 'Next.js', 'React', 'Node.js'].map((lang) => (
                  <div key={lang} className="px-4 py-2 bg-muted rounded-lg">
                    <p className="text-xs sm:text-sm font-medium text-foreground">{lang}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-3 text-foreground">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Replit', 'Figma', 'Miro', 'Canva', 'Photoshop', 'Illustrator', 'vO', 'Bolt', 'Juju'].map((tool) => (
                  <div key={tool} className="px-4 py-2 bg-muted rounded-lg">
                    <p className="text-xs sm:text-sm font-medium text-foreground">{tool}</p>
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
