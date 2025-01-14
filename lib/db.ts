
import { Pool } from 'pg';
import { PortfolioProject } from '@/types/portfolio';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function getAllProjects(): Promise<PortfolioProject[]> {
  const result = await pool.query('SELECT * FROM portfolio_projects');
  return result.rows.map(row => ({
    ...row,
    gallery: row.gallery || [],
    tags: row.tags || [],
    technologies: row.technologies || [],
    features: row.features || []
  }));
}

export async function getProjectById(id: string): Promise<PortfolioProject | null> {
  const result = await pool.query('SELECT * FROM portfolio_projects WHERE id = $1', [id]);
  if (result.rows.length === 0) return null;
  return {
    ...result.rows[0],
    gallery: result.rows[0].gallery || [],
    tags: result.rows[0].tags || [],
    technologies: result.rows[0].technologies || [],
    features: result.rows[0].features || []
  };
}

export async function updateProject(project: PortfolioProject): Promise<void> {
  await pool.query(
    `UPDATE portfolio_projects SET 
    title = $1, description = $2, content = $3, featured_image = $4,
    gallery = $5, industry = $6, tags = $7, client = $8, technologies = $9,
    url = $10, live_url = $11, features = $12, status = $13, date_updated = $14,
    embed = $15
    WHERE id = $16`,
    [
      project.title, project.description, project.content, project.featuredImage,
      project.gallery, project.industry, project.tags, project.client,
      project.technologies, project.url, project.liveUrl, project.features,
      project.status, project.dateUpdated, project.embed, project.id
    ]
  );
}
