
'use client';

import React from 'react';
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

export default function Page() {
  return (
    <div className="w-full bg-background text-foreground">
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-accent/20 via-primary/10 to-transparent transform rotate-12 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent transform -rotate-12 -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 pt-8">
          <div className="max-w-3xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="block bg-clip-text text-foreground">Digital</span>
                  <span className="block bg-clip-text text-foreground">Craftsman</span>
                </h1>
                <div className="ml-2 mb-2">
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
                  <p className="text-sm text-muted-foreground pl-2">Crafting intuitive digital experiences with a focus on accessibility and innovation.</p>
                </div>
                <button className="group flex items-center gap-1 text-sm ml-2 text-foreground">
                  <span className="relative">View Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="w-full md:w-1/3 md:pl-4 border-l border-border">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider">Location</h3>
                    <p className="text-sm text-foreground">Lagos, Nigeria</p>
                  </div>
                  <div>
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider">Expertise</h3>
                    <p className="text-sm text-foreground">Design & Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-1/3 sticky top-20">
              <h2 className="text-lg font-bold mb-1">Selected Work</h2>
              <p className="text-sm text-muted-foreground">Showcasing innovation through design and technology.</p>
            </div>
            <div className="w-full md:w-2/3 space-y-2">
              {projects.slice(0, 3).map((project, index) => (
                <div key={project.id} className="group">
                  <div className="relative aspect-[16/9] mb-2 overflow-hidden rounded-md">
                    <Image 
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-1 line-clamp-1">{project.description}</p>
                    <div className="flex gap-1">
                      <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                      {project.tags.slice(0, 1).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h2 className="text-xl font-bold mb-2">Technical Skills</h2>
              <div className="space-y-2">
                {[
                  { icon: <Code2 className="h-4 w-4" />, title: "Development", desc: "Building accessible applications" },
                  { icon: <User className="h-4 w-4" />, title: "UX Design", desc: "Creating intuitive experiences" },
                  { icon: <Briefcase className="h-4 w-4" />, title: "Strategy", desc: "Developing design systems" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start p-1">
                    <div className="p-1 border border-border rounded">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-4 border-l border-border">
              <div className="grid grid-cols-2 gap-1">
                {[
                  'UX Design', 'Research', 'Strategy',
                  'Next.js', 'React', 'TypeScript',
                  'Node.js', 'PHP', 'Python',
                  'HTML/CSS', 'UI/UX', 'API'
                ].map((skill) => (
                  <div key={skill} className="px-2 py-1 border border-border rounded">
                    <p className="text-xs">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-2 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2024 Jide. All rights reserved.</p>
            <div className="flex gap-2">
              {[
                { icon: <Github className="h-4 w-4" />, label: "GitHub" },
                { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                { icon: <Twitter className="h-4 w-4" />, label: "Twitter" }
              ].map((item, i) => (
                <button key={i} className="text-muted-foreground hover:text-foreground">
                  <div className="relative">{item.icon}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
