import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export interface PostListItem {
  id: string
  href: string
  title: string
  meta?: string
  date?: string
  thumbnail?: string
}

interface PostListProps {
  items: PostListItem[]
  loading?: boolean
  loadingLabel?: string
  emptyLabel?: string
  variant?: 'list' | 'grid'
}

export function PostList({
  items,
  loading,
  loadingLabel = 'Loading…',
  emptyLabel = 'Nothing here yet.',
  variant = 'list',
}: PostListProps) {
  if (loading) {
    return <p className="border-t border-border py-5 text-sm text-foreground">{loadingLabel}</p>
  }

  if (items.length === 0) {
    return <p className="border-t border-border py-5 text-sm text-foreground">{emptyLabel}</p>
  }

  if (variant === 'grid') {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex min-w-0 flex-col overflow-hidden border border-border bg-card transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
              {item.thumbnail && (
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
              <div className="min-w-0 space-y-1">
                {item.meta && (
                  <p className="truncate text-[11px] uppercase tracking-[0.15em] text-foreground">{item.meta}</p>
                )}
                <h3 className="line-clamp-2 text-lg leading-tight text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                {item.date && <p className="text-sm text-foreground">{item.date}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="border-t border-border">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-4 transition-colors hover:text-primary md:gap-6"
        >
          {item.thumbnail && (
            <div className="relative h-14 w-20 shrink-0 overflow-hidden border border-border bg-muted">
              <Image src={item.thumbnail} alt={item.title} fill sizes="80px" className="object-cover" />
            </div>
          )}
          <div className="min-w-0 space-y-1">
            <h3 className="truncate text-lg text-foreground md:text-xl">{item.title}</h3>
            {item.meta && (
              <p className="truncate text-[11px] uppercase tracking-[0.15em] text-foreground">{item.meta}</p>
            )}
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  )
}
