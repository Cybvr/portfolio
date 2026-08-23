'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { fetchBlogPost, fetchBlogPosts, getAdjacentPosts } from '@/lib/blog'
import { Sidebar } from '@/components/Sidebar'
import type { BlogPost } from '@/types/blog'
import { blogContentToHtml } from '@/lib/blog-content'
import DOMPurify from 'isomorphic-dompurify'

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([fetchBlogPost(params.id), fetchBlogPosts()])
      .then(([found, all]) => {
        setPost(found)
        setPosts(all.filter((p) => p.status !== 'draft'))
      })
      .finally(() => setLoading(false))
  }, [params.id])

  if (loading) return null

  if (!post) {
    return (
      <div className="w-full bg-background text-foreground">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-8 md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-foreground">Post not found</p>
          <Link href="/blog" className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const { prev, next } = getAdjacentPosts(posts, params.id)

  const detailRows = [
    { label: 'Category', value: post.category },
    { label: 'Author', value: post.author },
    { label: 'Published', value: formatDate(post.date) },
    { label: 'Length', value: post.readTime },
  ]

  return (
    <div className="w-full bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-8 md:px-12 md:py-16">
        <div className="grid gap-10 md:gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col">
        <section className="grid gap-6 border-t border-foreground py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          {post.coverImage && (
            <div className="relative w-full aspect-[16/8] overflow-hidden border border-border sm:aspect-[16/6]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-3">
            <h1 className="max-w-4xl text-2xl leading-tight sm:text-3xl md:text-4xl">{post.title}</h1>
            <p className="max-w-2xl text-lg text-foreground sm:text-xl">{post.excerpt}</p>
          </div>
        </section>

        <section className="border-t border-border py-6">
          <div className="space-y-8">
            <div className="space-y-6">
              <div
                className="content-body max-w-3xl text-base text-foreground sm:text-lg"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogContentToHtml(post.content)) }}
              />
            </div>

            <div className="border-t border-border">
              {detailRows.map((item, index) => (
                <div key={item.label} className="grid gap-3 border-b border-border py-4 md:grid-cols-[56px_minmax(0,1fr)] md:gap-6">
                  <span className="text-sm text-foreground">{`0${index + 1}`}</span>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.15em] text-foreground">{item.label}</p>
                    <p className="text-base leading-8 text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {(prev || next) && (
          <section className="grid gap-8 border-t border-b border-foreground py-8 md:gap-10 md:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-foreground">Navigation</p>
            </div>
            <div className="border-t border-border">
              {prev && (
                <Link href={`/blog/${prev.id}`} className="grid gap-3 border-b border-border py-5 transition-colors hover:text-primary md:grid-cols-[56px_minmax(0,1fr)_auto] md:gap-6">
                  <span className="text-sm text-foreground">01</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-foreground">Previous</p>
                    <p className="text-2xl text-foreground">{prev.title}</p>
                  </div>
                  <ArrowLeft className="w-5 h-5 text-foreground" />
                </Link>
              )}
              {next && (
                <Link href={`/blog/${next.id}`} className="grid gap-3 py-5 transition-colors hover:text-primary md:grid-cols-[56px_minmax(0,1fr)_auto] md:gap-6">
                  <span className="text-sm text-foreground">02</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-foreground">Next</p>
                    <p className="text-2xl text-foreground">{next.title}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground" />
                </Link>
              )}
            </div>
          </section>
        )}
          </div>
          <Sidebar className="lg:sticky lg:top-8 lg:self-start lg:border-l lg:border-border lg:pl-10" />
        </div>
      </div>
    </div>
  )
}
