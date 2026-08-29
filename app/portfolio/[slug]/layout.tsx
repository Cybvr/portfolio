import type { Metadata } from 'next'
import { fetchRouteMetadata } from '@/lib/route-metadata'

type PortfolioLayoutProps = {
  children: React.ReactNode
  params: { slug: string }
}

export async function generateMetadata({ params }: PortfolioLayoutProps): Promise<Metadata> {
  const content = await fetchRouteMetadata('jpportfolio', params.slug)
  const title = content?.title || 'Case study'
  const description = content?.description || 'A selected brand and digital case study by Jide Pinheiro.'
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

export default function PortfolioProjectLayout({ children }: PortfolioLayoutProps) {
  return children
}
