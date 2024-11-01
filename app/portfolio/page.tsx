export default function Portfolio() {
  // Projects data array
  const projects = [
    {
      title: 'SolveAI',
      description: 'A car maintenance tracking application helping vehicle owners manage service schedules and expenses.',
      href: '/portfolio/solveai',
      technologies: ['NextJS', 'TypeScript', 'React']
    },
    {
      title: 'SaveOurChildren',
      description: 'A car maintenance tracking application helping vehicle owners manage service schedules and expenses.',
      href: '/portfolio/saveourchildren',
      technologies: ['Elementor', 'Wordpress']
    },
    {
      title: 'Al Qasr Al Malaki',
      description: 'A luxury dining website showcasing the essence of royal Arabian cuisine with a modern twist.',
      href: '/portfolio/alqasr',
      technologies: ['NextJS', 'React', 'TailwindCSS']
    },
    {
      title: 'PawPerfect',
      description: 'An elegant e-commerce site for premium pet care products, combining a sleek UI with modern design.',
      href: '/portfolio/pawperfect',
      technologies: ['React', 'TailwindCSS', 'Lucide Icons']
    },
    {
      title: 'VitalSync',
      description: 'A comprehensive healthcare management platform offering real-time analytics and patient management.',
      href: '/portfolio/vitalsync',
      technologies: ['React', 'TailwindCSS', 'Lucide Icons']
    }
  ];

  // Project card component
  const ProjectCard = ({ title, description, href, technologies }) => (
    <a href={href} className="group block">
      <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">{title} Preview</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-foreground">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}