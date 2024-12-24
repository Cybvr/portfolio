import React from 'react';
import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0B] text-white">
      {/* Hero Section - Asymmetric with diagonal elements */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-3/4 h-screen bg-gradient-to-bl from-purple-900/20 via-blue-900/10 to-transparent transform rotate-12 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-gradient-to-tr from-blue-900/20 via-purple-900/10 to-transparent transform -rotate-12 -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="container mx-auto px-4 pt-32 relative">
          <div className="max-w-[90%]">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="w-full md:w-2/3">
                <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">Digital</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-white to-white">Craftsman</span>
                </h1>
                <div className="relative ml-12 mb-12">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
                  <p className="text-xl text-gray-400 leading-relaxed pl-8">
                    With over 10 years of experience, I specialize in designing digital products 
                    that are accessible, intuitive, and push creative boundaries.
                  </p>
                </div>
                <button className="group flex items-center gap-2 text-lg hover:gap-4 transition-all ml-12">
                  <span className="relative">
                    <span className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded blur opacity-30 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">Explore Work</span>
                  </span>
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
              <div className="w-full md:w-1/3 pl-0 md:pl-12 border-l border-white/10">
                <div className="space-y-12">
                  <div className="transform hover:-translate-y-1 transition-transform">
                    <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Location</h3>
                    <p className="text-xl">Lagos, Nigeria</p>
                  </div>
                  <div className="transform hover:-translate-y-1 transition-transform">
                    <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Expertise</h3>
                    <p className="text-xl">Digital Design, Development, Strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Asymmetric grid layout */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Selected Projects
              </h2>
              <p className="text-gray-400">Crafting digital experiences through design storytelling and technical excellence.</p>
            </div>
            <div className="w-full md:w-2/3 space-y-32">
              {[
                {
                  align: 'right',
                  image: '/images/portfolio/fennel.jpg',
                  title: 'Fennel',
                  description: 'Mobile investing app with ESG data and shareholder voting info'
                },
                {
                  align: 'left',
                  image: '/images/portfolio/umba.jpg',
                  title: 'Umba',
                  description: 'Digital banking platform for Africa'
                }
              ].map((project, index) => (
                <div key={index} className={`group ${project.align === 'right' ? 'ml-0 md:ml-12' : 'mr-0 md:mr-12'}`}>
                  <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:scale-105 transition-transform duration-700" />
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className={`flex items-end gap-4 ${project.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">Digital design • Development • 2024</p>
                      <button className="group/btn flex items-center gap-2 text-sm hover:gap-4 transition-all">
                        View Case Study <ChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Asymmetric with overlapping elements */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-24">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Technical Expertise
              </h2>
              <div className="space-y-12">
                {[
                  { icon: <Code2 className="h-6 w-6" />, title: "Development", desc: "Building responsive and accessible applications" },
                  { icon: <User className="h-6 w-6" />, title: "UX Design", desc: "Creating intuitive user experiences" },
                  { icon: <Briefcase className="h-6 w-6" />, title: "Strategy", desc: "Developing comprehensive design systems" }
                ].map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex gap-6 items-start p-4">
                      <div className="p-4 border border-white/10 rounded-lg group-hover:border-white/30 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 pl-0 md:pl-12 border-l border-white/10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { category: 'Design', skills: ['UX Design', 'User Research', 'Design Strategy'] },
                  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript'] },
                  { category: 'Backend', skills: ['Node.js', 'PHP', 'Python'] },
                  { category: 'Other', skills: ['Accessibility', 'SEO', 'Performance'] }
                ].map((group, index) => (
                  <div key={index} className="col-span-1 space-y-4">
                    <h3 className="text-sm text-gray-400 uppercase tracking-wider">{group.category}</h3>
                    {group.skills.map((skill) => (
                  <div 
                    key={skill}
                    className={`group relative px-6 py-4 border border-white/10 rounded-lg hover:border-white/30 transition-colors ${
                      index % 3 === 0 ? 'transform translate-y-4' : ''
                    }`}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="relative">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">© 2024 Jide. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { icon: <Github className="h-5 w-5" />, label: "GitHub" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" }
              ].map((item, i) => (
                <button 
                  key={i} 
                  className="group relative text-gray-400 hover:text-white transition-colors"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    {item.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;