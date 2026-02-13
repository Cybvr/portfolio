
import { Pool } from 'pg';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function seedDatabase() {
  try {
    // Fetch projects from Firebase
    const querySnapshot = await getDocs(collection(db, 'jpportfolio'));
    const projects = querySnapshot.docs.map(doc => ({
      ...doc.data(),
    }));

    const schemaSQL = await require('fs').readFileSync('./lib/schema.sql', 'utf-8');
    await pool.query(schemaSQL);

    for (const project of projects) {
      await pool.query(
        `INSERT INTO portfolio_projects (
          id, title, description, content, featured_image, gallery, 
          industry, tags, client, technologies, url, features, 
          status, date_created, date_updated, embed
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
        ON CONFLICT (id) DO UPDATE SET
          title = $2, description = $3, content = $4, featured_image = $5,
          gallery = $6, industry = $7, tags = $8, client = $9,
          technologies = $10, url = $11, features = $12, status = $13,
          date_created = $14, date_updated = $15, embed = $16`,
        [
          project.id, project.title, project.description, project.content,
          project.featuredImage, project.gallery || [], project.industry,
          project.tags, project.client, project.technologies,
          project.url, project.features, project.status,
          project.dateCreated, project.dateUpdated, project.embed
        ]
      );
    }
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await pool.end();
  }
}

seedDatabase();
