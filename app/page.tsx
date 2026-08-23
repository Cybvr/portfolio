'use client';

import { useEffect, useState } from 'react';
import { PostList, type PostListItem } from '@/components/PostList';
import { Sidebar } from '@/components/Sidebar';
import { fetchBlogPosts } from '@/lib/blog';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function Page() {
  const [blogItems, setBlogItems] = useState<PostListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts()
      .then((posts) => {
        setBlogItems(
          posts
            .filter((post) => post.status !== 'draft')
            .map((post) => ({
              id: post.id,
              href: `/blog/${post.id}`,
              title: post.title,
              meta: `${post.category} · ${formatDate(post.date)}`,
              thumbnail: post.coverImage || post.thumbnail,
            }))
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-8 border-t border-b border-foreground py-8 md:gap-10 md:py-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-foreground">Blog</p>
            <PostList items={blogItems} loading={loading} loadingLabel="Loading posts…" />
          </div>
          <Sidebar className="lg:sticky lg:top-8 lg:self-start lg:border-l lg:border-border lg:pl-10" />
        </div>
      </div>
    </div>
  );
}
