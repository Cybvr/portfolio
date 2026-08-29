'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PortfolioProject } from '@/types/portfolio';
import { PostList, type PostListItem } from '@/components/PostList';

interface SidebarProps {
  /** Show the "Work" list below the intro. Defaults to true. */
  showWork?: boolean;
  /** Extra classes for the outer <aside> (e.g. border, sticky positioning). */
  className?: string;
}

export function Sidebar({ showWork = true, className = '' }: SidebarProps) {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!showWork) {
      setLoading(false);
      return;
    }

    let active = true;
    async function fetchProjects() {
      try {
        const snapshot = await getDocs(collection(db, 'jpportfolio'));
        const data = snapshot.docs.map((doc) => ({ ...doc.data() })) as PortfolioProject[];
        if (active) setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchProjects();
    return () => {
      active = false;
    };
  }, [showWork]);

  const workItems: PostListItem[] = projects.slice(0, 4).map((project) => ({
    id: project.id,
    href: `/portfolio/${project.id}`,
    title: project.title,
    meta: project.industry,
    thumbnail: project.featuredImage,
  }));

  return (
    <aside className={`space-y-10 ${className}`}>
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-foreground">About</p>
        <div className="space-y-2">
          <p className="text-sm text-foreground">
            I’m Jide Pinheiro, a brand consultant. I help businesses articulate their value with more precision, more
            confidence, and less noise. I started in design. The work grew into positioning, messaging, and brand
            direction because that is usually where the real problem sits. My practice centers on clarity, language, and
            market presence.
          </p>
        </div>
      </div>

      {showWork && (
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground">Work</p>
          <PostList items={workItems} loading={loading} loadingLabel="Loading work…" />
        </div>
      )}
    </aside>
  );
}
