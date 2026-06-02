'use client';

import React from 'react';

const practiceAreas = [
  {
    label: '01',
    title: 'Positioning',
    description: 'Defining the role a brand should play in the market, the audience it should speak to, and the territory it can credibly own.',
  },
  {
    label: '02',
    title: 'Messaging',
    description: 'Building language systems for websites, decks, launches, and internal alignment so the brand stays clear across every context.',
  },
  {
    label: '03',
    title: 'Digital Expression',
    description: 'Carrying strategy into product surfaces, websites, and brand systems with the same level of precision as the positioning work.',
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
        <section className="grid gap-10 border-t border-foreground pt-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:pt-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl leading-tight sm:text-5xl md:text-7xl">
              I work across strategy, language, and digital expression.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              My background in design shaped the way I think about clarity, structure, and execution. Over time, the
              work expanded into positioning, messaging, and brand direction.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-t border-border py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Practice</p>
          </div>
          <div className="border-t border-border">
            {practiceAreas.map((item) => (
              <div key={item.title} className="grid gap-3 border-b border-border py-5 md:grid-cols-[56px_minmax(0,220px)_minmax(0,1fr)] md:gap-6">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <h2 className="text-2xl text-foreground">{item.title}</h2>
                <p className="text-base leading-8 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-b border-foreground py-10 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-16 md:py-14">
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
