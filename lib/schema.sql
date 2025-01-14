
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  featured_image TEXT,
  gallery TEXT[],
  industry TEXT,
  tags TEXT[],
  client TEXT,
  technologies TEXT[],
  url TEXT,
  live_url TEXT,
  features TEXT[],
  status TEXT,
  date_created TEXT,
  date_updated TEXT,
  embed TEXT
);
