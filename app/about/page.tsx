'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="w-full bg-background text-foreground">
            <div className="max-w-6xl mx-auto flex flex-col px-4 sm:px-8 md:px-12 py-8 md:py-16 gap-16 md:gap-24">
                <section>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight mb-8">
                        About Me
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                        I'm a Product Designer and Developer focused on making complex systems feel intuitive and human.
                        My work sits at the intersection of design, technology, and business development.
                    </p>
                </section>

                {/* Technical Skills moved from homepage */}
                <section className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 border border-border">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-foreground">Technical Skills</h2>
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-base font-bold mb-3 text-foreground">Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Development', 'Branding', 'Strategy', 'UX'].map((skill) => (
                                    <div key={skill} className="px-4 py-2 bg-secondary rounded-xl">
                                        <p className="text-sm font-medium text-secondary-foreground">{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-bold mb-3 text-foreground">Languages & Frameworks</h3>
                            <div className="flex flex-wrap gap-3">
                                {['TypeScript', 'JavaScript', 'PHP', 'HTML/CSS', 'Next.js', 'React', 'Node.js'].map((lang) => (
                                    <div key={lang} className="px-4 py-2 bg-muted rounded-xl">
                                        <p className="text-sm font-medium text-foreground">{lang}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-bold mb-3 text-foreground">Tools</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Replit', 'Figma', 'Miro', 'Canva', 'Photoshop', 'Illustrator', 'v0', 'Bolt', 'Juju'].map((tool) => (
                                    <div key={tool} className="px-4 py-2 bg-muted rounded-xl">
                                        <p className="text-sm font-medium text-foreground">{tool}</p>
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
