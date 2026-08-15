'use client';

import React from 'react';

const focusAreas = [
  {
    label: '01',
    title: 'Positioning',
    description: 'Who you are for, what you are really selling, where you should compete, and what you should stop saying.',
  },
  {
    label: '02',
    title: 'Messaging',
    description: 'Sharper narratives for websites, decks, launches, and internal alignment so the brand sounds deliberate, clear, and usable.',
  },
  {
    label: '03',
    title: 'Expression',
    description: 'Translating strategy into digital experiences, product touchpoints, and visual systems that feel consistent with the business.',
  },
];

const capabilities = [
  'Brand strategy',
  'Positioning systems',
  'Messaging architecture',
  'Website direction',
  'Narrative development',
  'Design direction',
  'Product thinking',
  'Front-end execution',
];

export default function AboutPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <section className="grid gap-8 border-t border-foreground py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-3xl leading-tight sm:text-4xl md:text-5xl">
              I work across strategy, language, and digital expression.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              My background in design shaped the way I think about clarity, structure, and execution. Over time, the
              work expanded into positioning, messaging, and brand direction.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
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

        <section className="grid gap-8 border-t border-border py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">What I Do</p>
          </div>
          <div className="border-t border-border">
            {focusAreas.map((item) => (
              <div key={item.title} className="grid gap-3 border-b border-border py-5 md:grid-cols-[56px_minmax(0,220px)_minmax(0,1fr)] md:gap-6">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <h2 className="text-2xl text-foreground">{item.title}</h2>
                <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-b border-foreground py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Capabilities</p>
          </div>
          <div className="border-t border-border">
            {capabilities.map((item, index) => (
              <div key={item} className="grid gap-3 border-b border-border py-4 md:grid-cols-[56px_minmax(0,1fr)] md:gap-6">
                <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                <span className="text-base leading-8 text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
