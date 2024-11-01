"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
          <div className="container mx-auto px-4 text-left">
            <h1 className="text-6xl md:text-6xl font-bold mb-4">
              Hi, I'm Jide
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              Designer in Lagos, Nigeria. Crafting digital experiences through design storytelling.
            </h2>

            <Button asChild size="lg" variant="secondary">
              <a href="#portfolio">
                Explore My Work
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  With over 10 years of experience, I specialize in designing digital products 
                  for B2B and B2C industries that are accessible, intuitive, and user-friendly.
                </p>
                <p className="text-muted-foreground">
                  My approach centers on understanding user experiences to craft solutions 
                  that align with business goals and user needs.
                </p>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center mb-2">
                    <User className="mr-2 h-5 w-5" />
                    <h3 className="font-semibold">Experience</h3>
                  </div>
                  <p className="text-muted-foreground">10+ years in digital design and development</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center mb-2">
                    <Briefcase className="mr-2 h-5 w-5" />
                    <h3 className="font-semibold">Projects</h3>
                  </div>
                  <p className="text-muted-foreground">100+ successful projects delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code2 className="h-8 w-8" />,
                  title: "Frontend Development",
                  description: "Building responsive and accessible web applications using modern frameworks."
                },
                {
                  icon: <User className="h-8 w-8" />,
                  title: "UX Design",
                  description: "Creating intuitive user experiences through research and testing."
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  title: "Design Strategy",
                  description: "Developing comprehensive design systems and brand guidelines."
                }
              ].map((item, index) => (
                <div key={index} className="p-4 border-l-2 border-primary">
                  <div className="text-primary mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Core Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'UX Design', 'User Research', 'Design Strategy',
                'Next.js', 'TypeScript', 'JavaScript',
                'React', 'WordPress', 'PHP',
                'HTML', 'CSS', 'Accessibility'
              ].map((skill) => (
                <div 
                  key={skill} 
                  className="px-4 py-3 border border-border hover:border-primary transition-colors rounded"
                >
                  <p className="text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="fixed top-4 right-4 md:hidden z-50">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Navigation Menu</SheetTitle>
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="http://visual.ng" className="text-lg hover:text-primary transition-colors">
                VisualHQ
              </Link>
              <Link href="http://jujuagi.com" className="text-lg hover:text-primary transition-colors">
                Juju
              </Link>
              <Link href="/portfolio" className="text-lg hover:text-primary transition-colors">
                Portfolio
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}