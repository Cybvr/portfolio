import type { Metadata } from 'next'
import { fetchRouteMetadata } from '@/lib/route-metadata'

type BlogLayoutProps = {
  children: React.ReactNode
  params: { id: string }
}

export async function generateMetadata({ params }: BlogLayoutProps): Promise<Metadata> {
  const content = await fetchRouteMetadata('jpblog', params.id)
  const title = content?.title || 'Blog post'
  const description = content?.description || 'Insights on brand strategy, positioning, messaging, and design.'
  const socialTitle = `${title} | Jide Pinheiro`

  return {
    title,
    description,
    openGraph: {
      title: socialTitle,
      description,
      type: 'article',
      ...(content?.image ? { images: [content.image] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      ...(content?.image ? { images: [content.image] } : {}),
    },
  }
}

export default function BlogPostLayout({ children }: BlogLayoutProps) {
  return children
}
