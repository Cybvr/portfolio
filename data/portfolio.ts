
import type { PortfolioProject } from '@/types/portfolio'

export const projects: PortfolioProject[] = [
  {
    id: 'solveai',
    title: 'SolveAI',
    description: 'AI Research Assistant Platform',
    content: 'Detailed content about SolveAI project...',
    featuredImage: '/images/portfolio/solveai.jpg',
    gallery: ['/images/portfolio/solveai/1.png'],
    category: 'AI & Machine Learning',
    tags: ['AI', 'Machine Learning', 'Research'],
    client: 'SolveAI Inc',
    technologies: ['React', 'Python', 'TensorFlow'],
    liveUrl: 'https://solveai.com',
    features: ['AI-powered research', 'Document analysis'],
    status: 'published',
    dateCreated: '2024-01-01',
    dateUpdated: '2024-03-15'
  },
  {
    id: 'selectsportsusa',
    title: 'Select Sports USA',
    description: 'Sports Management Platform',
    content: 'Comprehensive sports management solution...',
    featuredImage: '/images/portfolio/selectsportsusa.jpg',
    gallery: [],
    category: 'Sports Tech',
    tags: ['Sports', 'Management', 'Athletes'],
    client: 'Select Sports USA',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    features: ['Team management', 'Event scheduling'],
    status: 'published',
    dateCreated: '2024-02-01',
    dateUpdated: '2024-03-20'
  }
]
