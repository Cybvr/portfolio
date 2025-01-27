
import { NextResponse } from 'next/server';
import { updateProject } from '@/lib/db';
import type { PortfolioProject } from '@/types/portfolio';

export async function POST(request: Request) {
  try {
    const project: PortfolioProject = await request.json();
    
    if (!project || !project.id) {
      return NextResponse.json({ error: 'Invalid project data' }, { status: 400 });
    }
    
    await updateProject(project);
    return NextResponse.json(project);
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
