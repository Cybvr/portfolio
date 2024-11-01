"use client";
import { Oswald } from 'next/font/google'
import React, { FC } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const oswaldFont = Oswald({  
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-oswald',
})

const NAV_ITEMS = ['Home', 'About', 'Forum', 'Blog', 'Contact']

const PODCASTS = [
  { 
    title: "MINDFUL KIDS: LEARNING STRATEGIES TO HELP FRIENDS AND FAMILY", 
    link: "#",
    image: "/images/portfolio/soc/podcast1.jpg"
  },
  { 
    title: "LITTLE EXPLORERS: UNDERSTANDING EACH OTHER", 
    link: "#",
    image: "/images/portfolio/soc/podcast2.jpg"
  },
  { 
    title: "GET FEATURED ON PARENT'S VOICE", 
    link: "#", 
    cta: "LEARN MORE",
    image: "/images/portfolio/soc/podcast3.jpg"
  }
]

const STORIES = [
  { 
    name: "Waltons", 
    age: 29, 
    location: "San Diego, CA",
    image: "/images/portfolio/soc/waltons.jpg"
  },
  { 
    name: "Genesha", 
    age: 27, 
    location: "Raleigh, NC",
    image: "/images/portfolio/soc/genesha.jpg"
  },
  { 
    name: "James", 
    age: 45, 
    location: "Atlanta, GA",
    image: "/images/portfolio/soc/james.jpg"
  },
  { 
    name: "Kristina", 
    age: 34, 
    location: "New York, NY",
    image: "/images/portfolio/soc/kristina.jpg"
  }
]

const STATS = [
  { number: "8K+", description: "People benefited directly from our programs" },
  { number: "4.5K+", description: "Families supported nationwide" },
  { number: "20K+", description: "Children reached through our initiatives" }
]

const FOOTER_LINKS = [
  { 
    title: "Learn", 
    links: [{ name: "Home", href: "/" }, { name: "About Us", href: "/about" }] 
  },
  { 
    title: "Explore", 
    links: [{ name: "Forum", href: "/forum" }, { name: "Blog", href: "/blog" }, { name: "Shop", href: "/shop" }] 
  },
  { 
    title: "Take Action", 
    links: [
      { name: "Be a Volunteer", href: "/volunteer" }, 
      { name: "helpdesk@saveourchildren.org", href: "mailto:helpdesk@saveourchildren.org" }, 
      { name: "(919)-322-8041", href: "tel:9193228041" }
    ] 
  },
  { title: "Follow Us", links: [] }
]

const SaveOurChildren: FC = () => {
  return (
    <div className={`${oswaldFont.variable} font-oswald min-h-screen flex flex-col bg-white text-gray-800`}>
      <header className="w-full border-t-4 border-pink-400 sticky top-0 z-50 bg-white">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <img src="/images/portfolio/soc/logo.png" alt="Save Our Children" className="h-12" />

            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map(item => (
                <a key={item} href={`/${item.toLowerCase()}`} className="text-gray-800 hover:text-pink-500 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Donate</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-left mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome To SOC</h1>
              <p className="text-xl text-gray-600 italic">Proud to Support Families Nationwide.</p>
            </div>

            <div className="mt-16 relative">
              <img src="/images/portfolio/soc/hero.jpg" alt="End Family Separations" className="w-full rounded-lg" />
              <Button size="lg" className="absolute bottom-8 left-8 text-lg bg-pink-500 hover:bg-pink-600 text-white">
                Join the Movement
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">The Best Interest of the Child</h2>
                <Card className="mb-6 border-pink-200">
                  <CardContent className="p-6">
                    <p className="text-xl text-pink-600">
                      "We make it our mission to advocate for the God-given right of families to raise their children."
                    </p>
                  </CardContent>
                </Card>
                <p className="text-lg text-gray-600">
                  "Save Our Children" believe it is within the best interest of children to be with their biological families. 
                  We've made it our mission to deliver on our mission to reform policies that remove children from homes.
                </p>
              </div>
              <div>
                <img src="/images/portfolio/soc/mission.png" alt="Children and Families" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Most Recent Parent's Voice Podcast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PODCASTS.map((item, i) => (
                <Card key={i} className="border-blue-200">
                  <CardContent className="p-4">
                    <img src={item.image} alt={item.title} className="w-full rounded mb-4" />
                    <h3 className="font-bold mb-2 text-gray-800">{item.title}</h3>
                    <a href={item.link} className="text-blue-500 hover:text-blue-600">{item.cta || "CASE HERE"}</a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-pink-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Save Our Children Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {STORIES.map((person, i) => (
                <Card key={i} className="border-pink-200">
                  <img src={person.image} alt={person.name} className="w-full" />
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1 text-gray-800">{person.name}, {person.age}</h3>
                    <p className="text-sm text-gray-600">{person.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">How You're Helping</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="p-6">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <p>{stat.description}</p>
                </div>
              ))}
            </div>
            <Button variant="secondary" size="lg" className="mt-8 bg-white text-blue-500 hover:bg-gray-100">
              Discover how we measure impact
            </Button>
          </div>
        </section>
        
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Family, Save Our Children.</h2>
              <p className="text-lg text-gray-600">Sign up for our newsletter to receive updates and learn how you can help.</p>
            </div>
            <div className="max-w-md mx-auto">
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow border-blue-200" />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Submit</Button>
              </form>
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {FOOTER_LINKS.map((section, i) => (
              <div key={i}>
                <h3 className="font-bold text-gray-800 mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="text-gray-600 hover:text-pink-500 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                {section.title === "Follow Us" && (
                  <div className="flex space-x-4 mt-4">
                    {/* Social media icons */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SaveOurChildren