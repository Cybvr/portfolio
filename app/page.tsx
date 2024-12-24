
'use client';

import React from 'react';
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

export default function Page() {
  return (
    <div className="w-full bg-background text-foreground">
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-accent/10 to-transparent" />
        </div>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="block text-foreground">Digital</span>
                <span className="block text-foreground">Craftsman</span>
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">Crafting intuitive digital experiences with a focus on accessibility and innovation.</p>
              <button className="mt-3 inline-flex items-center text-sm text-foreground hover:text-primary transition-colors">
                View Projects <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="w-full md:w-auto md:min-w-[200px] border-l border-border pl-4 space-y-3">
              <div>
                <h3 className="text-xs text-muted-foreground uppercase">Location</h3>
                <p className="text-sm">Lagos, Nigeria</p>
              </div>
              <div>
                <h3 className="text-xs text-muted-foreground uppercase">Expertise</h3>
                <p className="text-sm">Design & Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-t border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/4">
              <h2 className="text-lg font-semibold">Selected Work</h2>
              <p className="text-sm text-muted-foreground mt-1">Showcasing innovation through design and technology.</p>
            </div>
            <div className="flex-1 grid gap-6">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="group">
                  <div className="relative aspect-video overflow-hidden rounded-md">
                    <Image src={project.featuredImage} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{project.description}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                      {project.tags[0] && <Badge variant="outline" className="text-xs">{project.tags[0]}</Badge>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-accent/5">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-semibold mb-4">Technical Skills</h2>
              <div className="grid gap-3">
                {[
                  { icon: <Code2 className="h-4 w-4" />, title: "Development", desc: "Building accessible applications" },
                  { icon: <User className="h-4 w-4" />, title: "UX Design", desc: "Creating intuitive experiences" },
                  { icon: <Briefcase className="h-4 w-4" />, title: "Strategy", desc: "Developing design systems" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="p-1.5 border border-border rounded bg-background">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-2">
                {[
                  'UX Design', 'Research', 'Strategy',
                  'Next.js', 'React', 'TypeScript',
                  'Node.js', 'PHP', 'Python',
                  'HTML/CSS', 'UI/UX', 'API'
                ].map((skill) => (
                  <div key={skill} className="px-3 py-1.5 border border-border rounded bg-background">
                    <p className="text-xs">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 border-t border-border">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2024 Jide. All rights reserved.</p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <button key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
