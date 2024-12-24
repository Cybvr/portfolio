
'use client';

import React from 'react';
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-accent/20 via-primary/10 to-transparent transform rotate-12 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent transform -rotate-12 -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 pt-12">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  <span className="block bg-clip-text text-foreground bg-gradient-to-r from-foreground via-foreground to-muted-foreground">Digital</span>
                  <span className="block bg-clip-text text-foreground bg-gradient-to-r from-muted-foreground via-foreground to-foreground">Craftsman</span>
                </h1>
                <div className="relative ml-8 mb-8">
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-6">
                    Crafting intuitive digital experiences with a focus on accessibility and innovation.
                  </p>
                </div>
                <button className="group flex items-center gap-2 text-sm hover:gap-3 transition-all ml-8 text-foreground">
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded blur opacity-30 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">View Projects</span>
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="w-full md:w-1/3 pl-0 md:pl-8 border-l border-border">
                <div className="space-y-8">
                  <div className="transform hover:-translate-y-1 transition-transform">
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</h3>
                    <p className="text-sm text-foreground">Lagos, Nigeria</p>
                  </div>
                  <div className="transform hover:-translate-y-1 transition-transform">
                    <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Expertise</h3>
                    <p className="text-sm text-foreground">Design & Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="w-full md:w-1/3 sticky top-20">
              <h2 className="text-xl font-bold mb-2">
                Selected Work
              </h2>
              <p className="text-sm text-muted-foreground">Showcasing innovation through design and technology.</p>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              {projects.slice(0, 3).map((project, index) => (
                <div key={project.id} className="group">
                  <div className="relative aspect-video mb-4 overflow-hidden rounded">
                    <Image 
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium mb-1">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{project.description}</p>
                    <div className="flex gap-2">
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

      {/* Skills Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Technical Skills
              </h2>
              <div className="space-y-8">
                {[
                  { icon: <Code2 className="h-4 w-4" />, title: "Development", desc: "Building accessible applications" },
                  { icon: <User className="h-4 w-4" />, title: "UX Design", desc: "Creating intuitive experiences" },
                  { icon: <Briefcase className="h-4 w-4" />, title: "Strategy", desc: "Developing design systems" }
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex gap-4 items-start p-4">
                      <div className="p-2 border border-border rounded group-hover:border-foreground/30 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-8 border-l border-border">
              <div className="grid grid-cols-2 gap-3">
                {[
                  'UX Design', 'Research', 'Strategy',
                  'Next.js', 'React', 'TypeScript',
                  'Node.js', 'PHP', 'Python',
                  'HTML/CSS', 'UI/UX', 'API'
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className={`group relative px-4 py-2 border border-border rounded hover:border-foreground/30 transition-colors ${
                      index % 3 === 0 ? 'transform translate-y-2' : ''
                    }`}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="relative text-xs">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">© 2024 Jide. All rights reserved.</p>
            <div className="flex gap-4">
              {[
                { icon: <Github className="h-4 w-4" />, label: "GitHub" },
                { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                { icon: <Twitter className="h-4 w-4" />, label: "Twitter" }
              ].map((item, i) => (
                <button 
                  key={i} 
                  className="group relative text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    {item.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
