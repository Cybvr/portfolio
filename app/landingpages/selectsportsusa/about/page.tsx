'use client'

import { Users, Award, Target, Heart } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Asymmetrical Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        <div className="absolute inset-0 lg:w-3/4">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Basketball court"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2d5a]/90 via-[#1a2d5a]/60 to-transparent" />
        </div>
        <div className="relative z-20 lg:w-2/3 h-screen flex items-center px-6 lg:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
              Transform
              <span className="block mt-2">ing Youth</span>
              <span className="block mt-2">Sports</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 ml-24">
              Building bridges between talent and opportunity
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/3 bg-white flex items-center px-6 lg:px-12 py-24 lg:py-0">
          <div className="relative">
            <div className="absolute -left-16 top-0 w-32 h-32 bg-red-500 rounded-full opacity-10" />
            <div className="relative z-10">
              <h2 className="text-[#1a2d5a] text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're dedicated to revolutionizing how young athletes connect with opportunities. 
                Through innovative technology and personal guidance, we're creating pathways for 
                the next generation of sports stars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Diagonal Layout */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a2d5a] transform -skew-y-6" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "Pushing boundaries to deliver exceptional results for young athletes"
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Deeply committed to nurturing young talent in sports"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building strong networks between athletes, coaches, and families"
              },
              {
                icon: Award,
                title: "Integrity",
                description: "Maintaining the highest standards of trust and transparency"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="group transform hover:translate-y-2 transition-all duration-300"
              >
                <div className="h-full p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10">
                  <value.icon className="h-12 w-12 mb-6 text-white" />
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Overlapping Cards */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-24 text-center text-[#1a2d5a]">Meet Our Team</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-48 bg-[#1a2d5a]/5 transform -translate-y-1/2 skew-y-6" />
            <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & CEO",
                  bio: "Former NCAA Division I athlete with 15+ years in sports management"
                },
                {
                  name: "Michael Chen",
                  role: "Head of Athlete Relations",
                  bio: "Professional basketball coach turned tech innovator"
                },
                {
                  name: "David Rodriguez",
                  role: "Technical Director",
                  bio: "Sports analytics expert with a passion for youth development"
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                  <div className="aspect-square relative">
                    <Image
                      src={`/api/placeholder/400/400`}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-[#1a2d5a] mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Split Design */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1a2d5a]/5 transform skew-x-12" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a2d5a]">Our Impact</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl">
                Since our inception, we've helped thousands of young athletes find their perfect
                team match, leading to improved performance and opportunities for growth.
              </p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { number: "10,000+", label: "Athletes Connected" },
                  { number: "500+", label: "Partner Teams" },
                  { number: "95%", label: "Success Rate" },
                  { number: "48", label: "States Reached" }
                ].map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 -top-4 w-8 h-8 bg-red-500 rounded-full opacity-10" />
                    <div className="relative">
                      <div className="text-4xl font-bold text-[#1a2d5a] mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/api/placeholder/800/1000"
                  alt="Impact visualization"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2d5a]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-red-500 rounded-full opacity-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}