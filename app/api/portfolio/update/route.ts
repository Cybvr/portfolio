
import { NextResponse } from 'next/server';
import { updateProject } from '@/lib/db';
import type { PortfolioProject } from '@/types/portfolio';

export async function POST(request: Request) {
  try {
    const project: PortfolioProject = await request.json();
    await updateProject(project);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
