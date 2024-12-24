
import { NextRequest, NextResponse } from 'next/server'
import { projects } from '@/data/portfolio'
import { headers } from 'next/headers'

const ADMIN_USERNAMES = ['jidepinheiro'] // Add Replit usernames that should have admin access

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(req: NextRequest) {
  const headersList = headers()
  const username = headersList.get('X-Replit-User-Name')
  
  if (!username || !ADMIN_USERNAMES.includes(username)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const data = await req.json()
  // In a real app, save to database. For now, we'll just return the data
  return NextResponse.json(data)
}

export async function PUT(req: NextRequest) {
  const headersList = headers()
  const username = headersList.get('X-Replit-User-Name')
  
  if (!username || !ADMIN_USERNAMES.includes(username)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const data = await req.json()
  return NextResponse.json(data)
}
