'use client';

import { Shield, Lock, Cpu, Globe, Server, AlertCircle, Users, ArrowRight, 
  Zap, Database, Cloud, ShieldCheck, Building2, BarChart, Terminal, 
  Network, Fingerprint, CheckCircle } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function AegisPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'services', 'features', 'solutions', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Threat Detection",
      description: "AI-powered threat detection and instant response for proactive security measures."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Zero Trust Security",
      description: "Continuous verification at every access point, ensuring maximum protection."
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Endpoint Protection",
      description: "Real-time device monitoring and management to secure all endpoints."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Enterprise-grade cloud infrastructure protection for seamless operations."
    }
  ];

  const stats = [
    { value: "99.99%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Active Monitoring" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "<1hr", label: "Response Time" }
  ];

  const features = [
    {
      icon: <Network className="w-12 h-12" />,
      title: "Network Security",
      description: "Military-grade encryption and advanced network protection protocols to safeguard your data transmission."
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Protection",
      description: "Real-time monitoring and predictive threat analytics to keep your sensitive information secure."
    },
    {
      icon: <Fingerprint className="w-12 h-12" />,
      title: "Access Control",
      description: "Biometric security and multi-factor authentication for foolproof identity verification."
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      title: "Compliance Management",
      description: "Automated compliance checks and reporting to meet industry standards and regulations."
    },
    {
      icon: <AlertCircle className="w-12 h-12" />,
      title: "Incident Response",
      description: "Rapid response protocols and expert team ready to tackle any security incidents."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Security Awareness Training",
      description: "Comprehensive training programs to educate your team on best security practices."
    }
  ];

  const solutions = [
    {
      title: "Financial Services",
      description: "Protect sensitive financial data and transactions with our robust security solutions.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Healthcare",
      description: "Ensure HIPAA compliance and safeguard patient information with our specialized healthcare security measures.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "E-commerce",
      description: "Secure online transactions and customer data with our advanced e-commerce protection suite.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Government",
      description: "Defend critical infrastructure and classified information with our government-grade security protocols.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ];

  const testimonials = [
    {
      quote: "Aegis has transformed our security infrastructure. We feel confident knowing our data is protected 24/7.",
      author: "Jane Doe",
      position: "CTO, TechCorp Inc."
    },
    {
      quote: "The level of service and expertise provided by Aegis is unmatched. They're not just a vendor, but a true security partner.",
      author: "John Smith",
      position: "CISO, Global Bank"
    }
  ];

  return (
    <div className={`${spaceGrotesk.variable} font-space-grotesk min-h-screen bg-black text-white overflow-x-hidden`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 py-4 md:py-8 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-2xl tracking-wide font-medium text-white">
            AEGIS
          </div>
          <nav className="hidden md:flex gap-8 lg:gap-12">
            {['Services', 'Features', 'Solutions', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-zinc-400 hover:text-white transition-colors tracking-wide text-lg ${activeSection === item.toLowerCase() ? 'text-white' : ''}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm absolute top-full left-0 right-0 p-4">
            {['Services', 'Features', 'Solutions', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-zinc-400 hover:text-white transition-colors tracking-wide text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center px-4 md:px-8">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10 pt-32">
          <div>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-medium tracking-wide leading-none">
              AEGIS
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mt-8 tracking-wide max-w-2xl">
              Enterprise Cybersecurity for the Digital Age. Protecting your assets with cutting-edge technology and expert vigilance.
            </p>
            <button className="mt-12 bg-[#4154F1] text-lg tracking-wide px-8 py-4 rounded hover:bg-[#4154F1]/90 transition-colors">
              Secure Your Enterprise →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 relative bg-zinc-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black p-6 text-left border border-zinc-800 rounded"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - White Background */}
      <section id="services" className="py-20 px-4 md:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-16">
            Security Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border-zinc-200 hover:border-zinc-300 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 bg-black relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-fixed opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 text-white">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg hover:bg-zinc-900/80 transition-all duration-300"
              >
                <div className="text-blue-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 text-white">
            Industry-Specific Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-zinc-400">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-16 text-white">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-lg">
                <p className="text-xl text-zinc-300 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-zinc-400">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 relative bg-zinc-900">
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Join industry leaders who trust Aegis for comprehensive cybersecurity solutions. Our experts are ready to tailor a security strategy for your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-[#4154F1] hover:bg-[#4154F1]/90  text-white px-8 py-3 rounded text-lg tracking-wide transition-colors">
              Schedule Assessment →
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded text-lg tracking-wide border border-zinc-700 hover:border-zinc-600 transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-black border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-left">
          <div className="text-2xl tracking-wide font-medium mb-4">
            AEGIS
          </div>
          <div className="text-zinc-400 mb-6">
            Guardians of Digital Security
          </div>
          <div className="text-sm text-zinc-600">
            © 2024 Aegis. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}