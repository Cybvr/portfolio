'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PortfolioProject } from '@/types/portfolio';

const positioning = [
  'Positioning brands so they are easier to understand, choose, and remember.',
  'Turning scattered messaging into a point of view teams can actually use.',
  'Bringing strategy, language, and digital execution into one line of thought.',
];

const focusAreas = [
  {
    title: 'Positioning',
    label: '01',
    description:
      'Who you are for, what you are really selling, where you should compete, and what you should stop saying.',
  },
  {
    title: 'Messaging',
    label: '02',
    description:
      'Sharper narratives for websites, decks, launches, and internal alignment so the brand sounds deliberate, clear, and usable.',
  },
  {
    title: 'Expression',
    label: '03',
    description:
      'Translating strategy into digital experiences, product touchpoints, and visual systems that feel consistent with the business.',
  },
];

const workingStyle = [
  'Brand thinking and execution move together in the work.',
  'Commercial clarity stays at the center of every decision.',
  'I look for the sentence, structure, and signal that make a company legible.',
  'I still design and build, with the work starting at the level of positioning, messaging, and direction.',
];

export default function Page() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const querySnapshot = await getDocs(collection(db, 'jpportfolio'));
        const projectsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        })) as PortfolioProject[];
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const featuredProjects = useMemo(() => projects.slice(0, 4), [projects]);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <section className="grid gap-10 border-t border-foreground pt-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:pt-14">
          <div className="space-y-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            <p>Jide Pinheiro</p>
            <p>Brand Consultant</p>
          </div>
          <div className="space-y-8">
            <div className="max-w-4xl space-y-5">
              <h1 className="text-4xl leading-tight sm:text-5xl md:text-7xl">
                I help businesses articulate their value with more precision, more confidence, and less noise.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I started in design. The work grew into positioning, messaging, and brand direction because that is
                usually where the real problem sits. My practice centers on clarity, language, and market presence.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <ul className="grid gap-3 text-sm leading-7 text-muted-foreground md:grid-cols-3">
                {positioning.map((statement, index) => (
                  <li key={statement} className="flex gap-3 border-t border-border py-3 md:block md:border-t-0 md:py-0">
                    <span className="shrink-0 text-foreground">{`0${index + 1}`}</span>
                    <span>{statement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-5 border-t border-border pt-6 text-sm">
              <Link href="/portfolio" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                Selected work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.linkedin.com/in/jidepinheiro/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/Cybvr"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">What Changed</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-2xl leading-10">
              I work as a brand consultant focused on positioning, messaging, and digital expression for businesses
              that need sharper language and a clearer market presence.
            </p>
            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                The work starts with category, audience, offer, narrative, and internal alignment, then carries those
                decisions into the website, the product, and the wider brand system.
              </p>
              <p>
                Strategy becomes useful when people can hear it in the language, see it in the expression, and feel it
                in the decisions across the business.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">What I Do</p>
          </div>
          <div className="border-t border-border">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="grid gap-3 border-b border-border py-5 md:grid-cols-[56px_minmax(0,220px)_minmax(0,1fr)] md:gap-6"
              >
                <p className="text-sm text-muted-foreground">{area.label}</p>
                <h2 className="text-2xl text-foreground">{area.title}</h2>
                <p className="text-base leading-8 text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">How I Work</p>
          </div>
          <ol className="border-t border-border">
            {workingStyle.map((item, index) => (
              <li
                key={item}
                className="grid gap-3 border-b border-border py-4 text-base leading-8 text-muted-foreground md:grid-cols-[56px_minmax(0,1fr)] md:gap-6"
              >
                <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Selected Work</p>
          </div>
          <div className="border-t border-border">
            {loading ? (
              <p className="py-5 text-muted-foreground">Loading work...</p>
            ) : (
              featuredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="grid gap-3 border-b border-border py-5 transition-colors hover:text-primary md:grid-cols-[56px_minmax(0,160px)_minmax(0,1fr)_auto] md:gap-6"
                >
                  <div className="text-sm text-foreground">{`0${index + 1}`}</div>
                  <div className="text-sm uppercase tracking-[0.15em] text-muted-foreground">{project.industry}</div>
                  <div className="space-y-2">
                    <h2 className="text-2xl text-foreground">{project.title}</h2>
                    <p className="max-w-2xl text-base leading-8 text-muted-foreground">{project.description}</p>
                  </div>
                  <div className="flex items-start md:justify-end">
                    <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                      View
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        <section className="grid gap-10 border-t border-b border-foreground py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          </div>
          <div className="space-y-5">
            <p className="max-w-3xl text-2xl leading-10">
              I work with teams that need sharper positioning, stronger messaging, and a clearer market presence.
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              Positioning reviews, messaging work, digital brand direction, and advisory support for teams that need
              sharper language and a clearer market presence.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] hover:text-primary transition-colors">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
