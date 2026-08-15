'use client';

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

const contactItems = [
  { label: 'Email', value: 'jide.pinheiro@gmail.com', href: 'mailto:jide.pinheiro@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jidepinheiro', href: 'https://www.linkedin.com/in/jidepinheiro/' },
  { label: 'GitHub', value: 'github.com/Cybvr', href: 'https://github.com/Cybvr' },
  { label: 'Toptal', value: 'toptal.com/designers/resume/jide-pinheiro', href: 'https://www.toptal.com/designers/resume/jide-pinheiro' },
];

export default function ContactPage() {
  const [calHeight, setCalHeight] = useState('600px');

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();

    const updateCalHeight = () => {
      const viewportHeight = window.innerHeight;
      const newHeight = Math.max(400, viewportHeight - 320);
      setCalHeight(`${newHeight}px`);
    };

    updateCalHeight();
    window.addEventListener('resize', updateCalHeight);

    return () => window.removeEventListener('resize', updateCalHeight);
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto flex flex-col px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <section className="grid gap-8 border-t border-foreground py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-3xl leading-tight sm:text-4xl md:text-5xl">
              For consulting, direction, and brand work.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Positioning, messaging, digital expression, and advisory work for teams that need sharper language and a
              stronger presence.
            </p>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Details</p>
          </div>
          <div className="border-t border-border">
            {contactItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="grid gap-3 border-b border-border py-4 transition-colors hover:text-foreground md:grid-cols-[56px_minmax(0,180px)_minmax(0,1fr)] md:gap-6"
              >
                <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">{item.label}</span>
                <span className="text-base leading-8 text-muted-foreground">{item.value}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-t border-b border-foreground py-8 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] md:gap-10 md:py-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Calendar</p>
          </div>
          <div className="border-t border-border pt-6">
            <div className="w-full border border-border" style={{ height: calHeight }}>
              <Cal
                namespace="15min"
                calLink="jide-pinheiro-kx3rcr/15min"
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
