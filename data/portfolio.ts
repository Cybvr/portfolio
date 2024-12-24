
import type { PortfolioProject } from '@/types/portfolio'

export const projects: PortfolioProject[] = [
  {
    id: 'hubbleiq',
    title: 'HubbleIQ',
    description: 'Effortlessly identify and conquer any hiccups that come your way, ensuring a smoother and more reliable experience for your valued users.',
    content: 'Effortlessly identify and conquer any hiccups that come your way, ensuring a smoother and more reliable experience for your valued users.',
    featuredImage: '/images/portfolio/hubbleiq.jpg',
    gallery: [],
    category: 'DevOps',
    tags: ['Monitoring', 'Performance', 'User Experience'],
    client: 'HubbleIQ Inc',
    technologies: ['React', 'Node.js', 'AWS'],
    features: ['System monitoring', 'Performance tracking', 'User experience analytics'],
    status: 'published',
    dateCreated: '2024-04-01',
    dateUpdated: '2024-04-01'
  },
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
  },
  {
    id: 'juju',
    title: 'Juju',
    description: 'All-in-one platform with smart tools for branding, content, and productivity.',
    content: 'Detailed content about Juju project...',
    featuredImage: '/images/portfolio/juju.jpg',
    gallery: [],
    category: 'Productivity',
    tags: ['Smart Tools', 'Branding', 'Productivity'],
    client: 'Juju Inc',
    technologies: ['React', 'TypeScript', 'Node.js'],
    features: ['Brand management', 'Content creation'],
    status: 'published',
    dateCreated: '2024-04-01',
    dateUpdated: '2024-04-01'
  }
]
