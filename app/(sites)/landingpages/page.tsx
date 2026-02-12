import Link from 'next/link';

// Project card component (moved outside)
  const ProjectCard = ({ title, description, href, technologies, industry = '', platforms = [], platformIcons, image }) => (
  <Link href={href} className="group block">
    <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={`${title} Preview`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-muted-foreground">{title} Preview</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground">{industry}</span>
        </div>
        <p className="text-card text-sm mb-4">{description}</p>

        {/* Platform Icons */}
        {platforms.length > 0 && (
          <div className="flex gap-2 mb-3">
            {platforms.map((platform) => (
              <span 
                key={platform}
                title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                className="text-xl"
                role="img"
                aria-label={platform}
              >
                {platformIcons[platform]}
              </span>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-muted text-muted-foreground text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </Link>
);

export default function Portfolio() {
  // Projects data array
  const projects = [
    {
      title: 'SolveAI',
      description: 'A cresearch AI application dedicated research companion that understands the nuances of academic work.',
      href: '/portfolio/solveai',
      technologies: ['NextJS', 'TypeScript', 'React'],
      industry: 'Automotive',
      platforms: ['web', 'desktop'],
      image: '/images/portfolio/solveai.jpg'
    },
    {
      title: 'Aegis',
      description: 'Advanced cybersecurity platform offering enterprise-grade protection with AI-powered threat detection and zero-trust architecture.',
      href: '/portfolio/aegis',
      technologies: ['React', 'TailwindCSS', 'NextJS', 'TypeScript'],
      image: '/images/portfolio/aegis.jpg'
    },
    {
      title: 'SaveOurChildren',
      description: 'A car maintenance tracking application helping vehicle owners manage service schedules and expenses.',
      href: '/portfolio/saveourchildren',
      technologies: ['Elementor', 'Wordpress'],
      industry: 'Non-Profit',
      platforms: ['web'],
      image: '/images/portfolio/saveourchildren.jpg'
    },
    {
      title: 'Baseball Cards & Stats',
      description: 'A car maintenance tracking application helping vehicle owners manage service schedules and expenses.',
      href: '/portfolio/bbcards',
      technologies: ['Elementor', 'Wordpress'],
      industry: 'Sports',
      platforms: ['web'],
      image: '/images/portfolio/bbcards.jpg'
    },
    {
      title: 'Select Sports USA',
      description: 'A car maintenance tracking application helping vehicle owners manage service schedules and expenses.',
      href: '/portfolio/selectsportsusa',
      technologies: ['React', 'NodeJS', 'ShadCN', 'TailwindCSS', 'NextJS', 'TypeScript'],
      industry: 'Sports',
      platforms: ['web'],
      image: '/images/portfolio/bbcards.jpg'
    },
    {
      title: 'Al Qasr Al Malaki',
      description: 'A luxury dining website showcasing the essence of royal Arabian cuisine with a modern twist.',
      href: '/portfolio/alqasr',
      technologies: ['NextJS', 'React', 'TailwindCSS'],
      industry: 'Restaurant & Hospitality',
      platforms: ['web'],
      image: '/images/portfolio/alqasr.jpg'
    },
    {
      title: 'Serenity',
      description: 'A modern healthcare app featuring appointment management, health metrics tracking, and real-time analytics with an intuitive mobile-first design.',
      href: '/portfolio/serenity',
      technologies: ['React', 'TailwindCSS', 'Recharts', 'TypeScript'],
      industry: 'Healthcare',
      platforms: ['mobile'],
      image: '/images/portfolio/serenity.jpg'
    },
    {
      title: 'PawPerfect',
      description: 'An elegant e-commerce site for premium pet care products, combining a sleek UI with modern design.',
      href: '/portfolio/pawperfect',
      technologies: ['React', 'TailwindCSS', 'Lucide Icons'],
      industry: 'E-commerce',
      platforms: ['web', 'mobile'],
      image: '/images/portfolio/pawperfect.jpg'
    },
    {
      title: 'VitalSync',
      description: 'A comprehensive healthcare management platform offering real-time analytics and patient management.',
      href: '/portfolio/vitalsync',
      technologies: ['React', 'TailwindCSS', 'Lucide Icons'],
      industry: 'Healthcare',
      platforms: ['web', 'desktop', 'extension'],
      image: '/images/portfolio/vitalsync.jpg'
    }
  ];

  // Platform icon mapping
  const platformIcons = {
    web: '🌐',
    mobile: '📱',
    desktop: '💻',
    extension: '🧩'
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-8xl font-bold mb-12 text-foreground">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} platformIcons={platformIcons} />
        ))}
      </div>
    </div>
  );
}