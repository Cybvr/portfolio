
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const portfolioPath = join(process.cwd(), 'data', 'portfolio.ts');
    const portfolioContent = `import type { PortfolioProject } from '@/types/portfolio'\n\nexport const projects: PortfolioProject[] = ${JSON.stringify(data, null, 2)}`;
    
    await writeFile(portfolioPath, portfolioContent);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
