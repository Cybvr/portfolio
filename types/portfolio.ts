
export type PortfolioStatus = 'draft' | 'published';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  content: string;
  featuredImage: string;
  gallery: string[];
  industry: string;
  tags: string[];
  client: string;
  technologies: string[];
  liveUrl?: string;
  features: string[];
  status: PortfolioStatus;
  dateCreated: string;
  dateUpdated: string;
}
