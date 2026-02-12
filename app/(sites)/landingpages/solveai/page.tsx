"use client";
import { Fira_Sans } from 'next/font/google'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, Target, Share2, Heart, ChevronRight, Play, Shield } from "lucide-react"

const fira = Fira_Sans({ 
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-fira-sans',
})

export default function SolveAI(): JSX.Element {
  return (
    <div className={`${fira.variable} font-fira min-h-screen flex flex-col bg-black text-zinc-200`}>
      <header className="py-4 sticky top-0 bg-black z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            SolveAI
          </Link>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="#story" className="text-zinc-400 hover:text-white transition-colors">Story</Link></li>
              <li><Link href="#updates" className="text-zinc-400 hover:text-white transition-colors">Updates</Link></li>
              <li><Link href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#comments" className="text-zinc-400 hover:text-white transition-colors">Comments</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <section className="text-center mb-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/solveai/hero-bg.jpg')" }}>
            <div className="inline-block px-4 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm mb-4">
              Featured Campaign • AI & Machine Learning
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              SolveAI: Personal AI Research Assistant
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Your intelligent research companion that helps you analyze papers, generate insights, and connect ideas across disciplines using advanced AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-black hover:bg-zinc-100 px-8 py-4 text-lg font-semibold rounded-md">
                Back this project
              </Button>
              <Button className="bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 px-8 py-4 text-lg font-semibold gap-2 rounded-md flex items-center">
                <Play className="w-5 h-5 mr-2" /> Watch Demo
              </Button>
            </div>
          </section>

          {/* Campaign Stats */}
          <section className="bg-zinc-300 text-black py-8 rounded-lg -mx-4 mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">$847,290</div>
                  <div className="text-zinc-600">Pledged of $100,000</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3,421</div>
                  <div className="text-zinc-600">Backers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">18</div>
                  <div className="text-zinc-600">Days to go</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Progress value={85} className="w-full h-3 mb-2" />
                  <div className="text-zinc-600">847% funded</div>
                </div>
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {/* Product Overview */}
              <section id="story" className="mb-16">
                <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">

                  <Image
                    src="/images/portfolio/solveai/1.png"
                    alt="SolveAI Demo"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />

                </div>
                <h2 className="text-3xl font-semibold mb-6 text-white">Transform Your Research Process</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-zinc-400 mb-6">
                    SolveAI is more than just another AI tool—it's your dedicated research companion that understands the nuances of academic work. Using advanced natural language processing and machine learning, SolveAI helps you:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-zinc-400">
                      <ChevronRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Analyze Research Papers:</strong> Extract key findings, methodologies, and conclusions from academic papers across disciplines.</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <ChevronRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Generate Insights:</strong> Identify patterns and connections between different papers and research areas.</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <ChevronRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Literature Review:</strong> Automatically generate comprehensive literature reviews with proper citations.</span>
                    </li>
                    <li className="flex items-start gap-3 text-zinc-400">
                      <ChevronRight className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Research Assistant:</strong> Get suggestions for related papers, potential research gaps, and future directions.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Features */}
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 text-white">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Smart Paper Analysis",
                      description: "Upload any research paper and get instant insights, summaries, and key takeaways."
                    },
                    {
                      title: "Cross-Reference Engine",
                      description: "Automatically find and suggest related papers and research connections."
                    },
                    {
                      title: "Citation Management",
                      description: "Generate and organize citations in multiple formats with one click."
                    },
                    {
                      title: "Research Dashboard",
                      description: "Track your research progress, manage papers, and organize insights."
                    }
                  ].map((feature) => (
                    <Card key={feature.title} className="p-6 bg-zinc-900 border-zinc-800">
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-zinc-400">{feature.description}</p>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Reward Tiers */}
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-2xl font-semibold mb-6 text-white">Support the Project</h2>
                <div className="space-y-4">
                  {[
                    {
                      tier: "Early Bird",
                      price: "$79",
                      value: "$149",
                      description: "Get lifetime access to SolveAI at our special early bird price.",
                      perks: ["Lifetime Access", "Priority Support", "Early Access to Features"]
                    },
                    {
                      tier: "Pro Access",
                      price: "$149",
                      value: "$299",
                      description: "Perfect for researchers and academics who need advanced features.",
                      perks: ["All Early Bird Features", "API Access", "Team Collaboration", "Custom Integrations"]
                    },
                    {
                      tier: "Institution",
                      price: "$999",
                      value: "$1999",
                      description: "Ideal for universities and research institutions.",
                      perks: ["All Pro Features", "Unlimited Users", "Dedicated Support", "Custom Training"]
                    }
                  ].map((tier) => (
                    <Card key={tier.tier} className="p-6 bg-zinc-900 border-zinc-800">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{tier.tier}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white">{tier.price}</span>
                            <span className="text-zinc-400 line-through">{tier.value}</span>
                          </div>
                        </div>
                        <Shield className="w-5 h-5 text-zinc-400" />
                      </div>
                      <p className="text-zinc-400 mb-4">{tier.description}</p>
                      <ul className="space-y-2 mb-6">
                        {tier.perks.map((perk) => (
                          <li key={perk} className="flex items-center gap-2 text-zinc-400">
                            <ChevronRight className="w-4 h-4 text-white" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-white text-black hover:bg-zinc-100 rounded-md">
                        Select {tier.tier}
                      </Button>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                      <div className="w-8 h-8 rounded-full bg-zinc-600"></div>
                      <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                    </div>
                    <div className="text-sm text-zinc-400">
                      Join 3,421 backers in supporting this project
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      142 people are viewing
                    </div>
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">About SolveAI</h3>
              <p className="text-zinc-400">SolveAI is building the future of research tools, making academic work more efficient and insightful through the power of artificial intelligence.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#story" className="text-zinc-400 hover:text-white transition-colors">Story</Link></li>
                <li><Link href="#updates" className="text-zinc-400 hover:text-white transition-colors">Updates</Link></li>
                <li><Link href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#comments" className="text-zinc-400 hover:text-white transition-colors">Comments</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <p className="text-zinc-400">Questions? Reach out to our team at support@solveai.com</p>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-zinc-400">
            <p>&copy; 2024 SolveAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
