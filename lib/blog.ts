import { collection, getDocs, doc, getDoc, query, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import type { BlogPost } from '@/types/blog'

export type { BlogPost }

/** Fetch all posts from Firestore, newest first. */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, 'jpblog'), orderBy('date', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map((snapshotDoc) => ({
      ...snapshotDoc.data(),
      id: snapshotDoc.id,
    })) as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

/** Fetch a single post by id (slug). */
export async function fetchBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const snapshot = await getDoc(doc(db, 'jpblog', id))
    if (snapshot.exists()) {
      return { ...snapshot.data(), id: snapshot.id } as BlogPost
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
  }
  return null
}

/** Given an ordered list of posts, return the neighbours of the given id. */
export function getAdjacentPosts(posts: BlogPost[], id: string): {
  prev: BlogPost | null
  next: BlogPost | null
} {
  const index = posts.findIndex((post) => post.id === id)
  if (index === -1) return { prev: null, next: null }
  const prev = index > 0 ? posts[index - 1] : null
  const next = index < posts.length - 1 ? posts[index + 1] : null
  return { prev, next }
}
