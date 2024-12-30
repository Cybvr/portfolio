'use client';

import React from 'react';
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter, Palette } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge";
import { projects } from '@/data/portfolio';

export default function Page() {
  return (
    <div className="w-full bg-background text-foreground font-medium">
      <div className="flex flex-col p-4 sm:p-8 md:p-12 gap-8">

        <div className="flex flex-col md:flex-row items-center gap-8 bg-card p-6 sm:p-8 md:p-12 rounded-3xl">
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-muted-foreground mb-4 leading-tight">
                Digital Craftsman
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6">
                Crafting intuitive digital experiences with a focus on accessibility and innovation.
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full md:w-1/3 space-y-4 bg-muted p-4 sm:p-6 rounded-lg mt-6 md:mt-0">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase">Location</h3>
                <p className="text-sm">Lagos, Nigeria</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase">Expertise</h3>
                <p className="text-sm">Design & Development</p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Cybvr" className="text-muted-foreground hover:text-muted-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/jidepinheiro/" className="text-muted-foreground hover:text-muted-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 sm:p-8 md:p-12 rounded-3xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Selected Work</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {projects.slice(0, 4).map((project) => (
                <Link key={project.id} href={`/portfolio/${project.id}`} className="bg-muted p-4 rounded-lg group block">
                  <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-lg">
                    <Image 
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.industry}</Badge>
                    {project.tags.slice(0, 2).map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 sm:p-8 md:p-12 rounded-3xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: <Code2 className="h-5 w-5" />, title: "Development" },
                  { icon: <Palette className="h-5 w-5" />, title: "Branding" },
                  { icon: <Briefcase className="h-5 w-5" />, title: "Strategy" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-muted p-4 rounded-lg">
                    <div className="p-2 bg-background rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-medium">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {[
                    'Next.js', 'React', 'TypeScript',
                    'Node.js', 'PHP', 
                    'HTML/CSS', 'API'
                  ].map((skill) => (
                    <div key={skill} className="p-3 bg-muted rounded-lg text-center">
                      <p className="text-xs sm:text-sm font-medium">{skill}</p>
                    </div>
                  ))}
                  {[
                    'Replit', 'Bolt', 'vO', 'Canva', 'Figma', 'Photoshop', 'Illustrator', 'Miro', 'Juju'
                  ].map((tool) => (
                    <div key={tool} className="p-3 bg-muted rounded-lg text-center">
                      <p className="text-xs sm:text-sm font-medium">{tool}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}