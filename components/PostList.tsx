import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export interface PostListItem {
  id: string
  href: string
  title: string
  meta?: string
  thumbnail?: string
}

interface PostListProps {
  items: PostListItem[]
  loading?: boolean
  loadingLabel?: string
  emptyLabel?: string
}

export function PostList({ items, loading, loadingLabel = 'Loading…', emptyLabel = 'Nothing here yet.' }: PostListProps) {
  if (loading) {
    return <p className="border-t border-border py-5 text-sm text-muted-foreground">{loadingLabel}</p>
  }

  if (items.length === 0) {
    return <p className="border-t border-border py-5 text-sm text-muted-foreground">{emptyLabel}</p>
  }

  return (
    <div className="border-t border-border">
      {items.map((item, index) => (
        <Link
          key={item.id}
          href={item.href}
          className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-border py-4 transition-colors hover:text-primary md:gap-6"
        >
          <div className="relative h-14 w-20 shrink-0 overflow-hidden border border-border bg-muted">
            {item.thumbnail ? (
              <Image src={item.thumbnail} alt={item.title} fill sizes="80px" className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                {`0${index + 1}`}
              </div>
            )}
          </div>
          <div className="min-w-0 space-y-1">
            <h3 className="truncate text-lg text-foreground md:text-xl">{item.title}</h3>
            {item.meta && (
              <p className="truncate text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{item.meta}</p>
            )}
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  )
}
