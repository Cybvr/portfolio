
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  // New posts store Tiptap HTML; string[] keeps older Firestore posts readable.
  content: string | string[];
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
