
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import type { PortfolioProject } from '@/types/portfolio';

export async function POST(request: Request) {
  try {
    const { projects, projectToUpdate } = await request.json();
    
    if (!projects || !projectToUpdate || !projectToUpdate.id) {
      return NextResponse.json({ error: 'Invalid project data' }, { status: 400 });
    }

    // Update portfolio.ts file
    const portfolioPath = path.join(process.cwd(), 'data', 'portfolio.ts');
    const fileContent = `import type { PortfolioProject } from '@/types/portfolio'\n\nexport const projects: PortfolioProject[] = ${JSON.stringify(projects, null, 2)}`;
    
    await writeFile(portfolioPath, fileContent, 'utf-8');
    return NextResponse.json(projectToUpdate);
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
