
'use client';

import { User, Briefcase, Code2, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Page() {
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
    </div>
  );
}
