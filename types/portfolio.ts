
export type PortfolioStatus = 'draft' | 'published';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  content: string;
  featuredImage: string;
  gallery: string[];
  imageSet1?: string[];
  imageSet2?: string[];
  imageSet3?: string[];
  industry: string;
  tags: string[];
  client: string;
  technologies: string[];
  url?: string;
  liveUrl?: string;
  features: string[];
  challenges?: string;
  solutions?: string;
  insight?: string;
  strategy?: string;
  outcomes?: string;
  press?: { title: string; url: string }[];
  status: PortfolioStatus;
  dateCreated: string;
  dateUpdated: string;
  embed?: string;
}
