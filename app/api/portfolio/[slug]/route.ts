
import { NextResponse } from 'next/server'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const q = query(collection(db, 'jpportfolio'), where('id', '==', params.slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    const project = querySnapshot.docs[0].data();
    return NextResponse.json(project)
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
