
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  readTime: string;
  date: string;
  thumbnail?: string;
  coverImage?: string;
  status?: 'published' | 'draft';
  dateCreated?: string;
  dateUpdated?: string;
}
