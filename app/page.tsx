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
            <div className="w-full">
              <p className="text-base sm:text-lg text-muted-foreground">
                I bridge human needs and technological possibilities, crafting intuitive experiences across AI, fintech, and gaming. Excellence in design isn't just about aesthetics – it's about creating meaningful impact through collaboration and understanding. In this rapidly evolving digital landscape, I maintain humanity while pushing the boundaries of what's possible through technology. True innovation happens at these intersections, where technical expertise meets cultural understanding.
              </p>
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
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['Development', 'Branding', 'Strategy', 'UX'].map((skill) => (
                    <div key={skill} className="p-3 bg-muted rounded-lg">
                      <p className="text-xs sm:text-sm font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {['TypeScript', 'JavaScript', 'PHP', 'HTML/CSS', 'Next.js', 'React', 'Node.js'].map((lang) => (
                    <div key={lang} className="p-3 bg-muted rounded-lg">
                      <p className="text-xs sm:text-sm font-medium">{lang}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {['Replit', 'Figma', 'Miro', 'Canva', 'Photoshop', 'Illustrator', 'vO', 'Bolt', 'Juju'].map((tool) => (
                    <div key={tool} className="p-3 bg-muted rounded-lg">
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