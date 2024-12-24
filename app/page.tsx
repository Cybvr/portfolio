'use client';

import React from 'react';
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

export default function Page() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="p-12">
        <section className="mb-16  rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-card">
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Digital Craftsman
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Crafting intuitive digital experiences with a focus on accessibility and innovation.
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full md:w-1/3 space-y-4 bg-muted p-6 rounded-lg">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase">Location</h3>
                <p className="text-sm">Lagos, Nigeria</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase">Expertise</h3>
                <p className="text-sm">Design & Development</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="bg-card text-2xl font-bold mb-8">Selected Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {projects.slice(0, 4).map((project) => (
              <div key={project.id} className="group">
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                  <Image 
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex gap-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  {project.tags.slice(0, 2).map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="space-y-6">
                {[
                  { icon: <Code2 className="h-5 w-5" />, title: "Development", desc: "Building accessible applications" },
                  { icon: <User className="h-5 w-5" />, title: "UX Design", desc: "Creating intuitive experiences" },
                  { icon: <Briefcase className="h-5 w-5" />, title: "Strategy", desc: "Developing design systems" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="p-2 bg-muted rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-3 gap-2">
                {[
                  'UX Design', 'Research', 'Strategy',
                  'Next.js', 'React', 'TypeScript',
                  'Node.js', 'PHP', 'Python',
                  'HTML/CSS', 'UI/UX', 'API'
                ].map((skill) => (
                  <div key={skill} className="p-2 bg-muted rounded-md text-center">
                    <p className="text-sm">{skill}</p>
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

