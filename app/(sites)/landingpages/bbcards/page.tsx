'use client';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Play, Users, Clock, Mail, Phone, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function BBCardsPage() {
  // Blog posts array
  const blogPosts = [
    {
      title: "Top Rookie Cards to Watch in 2024",
      excerpt: "Discover the most promising rookie cards that could define the 2024 season.",
      image: "/api/placeholder/800/600",
      slug: "rookie-cards-2024",
      date: "2024-03-15"
    },
    {
      title: "Vintage Card Authentication Guide",
      excerpt: "Learn how to authenticate vintage baseball cards and spot common fakes.",
      image: "/api/placeholder/800/600",
      slug: "vintage-authentication",
      date: "2024-03-10"
    },
    {
      title: "Digital Trading Cards: The Future?",
      excerpt: "Exploring the rise of digital baseball cards and NFTs in collecting.",
      image: "/api/placeholder/800/600",
      slug: "digital-trading-cards",
      date: "2024-03-05"
    }
  ];

  // Live streams array
  const liveStreams = [
    {
      title: "Weekly Card Trading Show",
      viewers: 1243,
      startTime: "2:00 PM EST",
      thumbnail: "/api/placeholder/800/600",
      host: "CardMaster Mike"
    },
    {
      title: "Live Pack Opening",
      viewers: 856,
      startTime: "3:30 PM EST",
      thumbnail: "/api/placeholder/800/600",
      host: "CollectorPro"
    },
    {
      title: "Stats Analysis Live",
      viewers: 678,
      startTime: "4:00 PM EST",
      thumbnail: "/api/placeholder/800/600",
      host: "StatsGuru"
    }
  ];

  return (
    <div className={`${montserrat.variable} font-sans`}>
      {/* Header Section */}
      <header className="w-full bg-blue-900 text-white py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6">
            <img src="/logo.png" alt="BBStats&Cards" className="h-10 w-auto" />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/home" className="hover:text-blue-300 font-semibold">Home</Link>
            <Link href="/shop" className="hover:text-blue-300 font-semibold">Shop</Link>
            <Link href="/stats" className="hover:text-blue-300 font-semibold">Stats & Data</Link>
            <Link href="/cards" className="hover:text-blue-300 font-semibold">Cards</Link>
            <Link href="/live" className="hover:text-blue-300 font-semibold">Live Streams</Link>
          </nav>

          {/* Utility Links */}
          <div className="flex items-center space-x-4">
            <Link href="/search" className="hover:text-blue-300">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/account" className="hover:text-blue-300">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="hover:text-blue-300 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium">(0)</span>
            </Link>
            {/* Mobile Menu Button */}
            <button className="md:hidden bg-white text-blue-900 px-3 py-1 rounded-lg">Menu</button>
          </div>
        </div>

        {/* Dropdown Navigation for Mobile */}
        <div className="md:hidden bg-blue-800 text-white py-2 px-4">
          <ul className="space-y-2">
            <li><Link href="/home" className="block hover:text-blue-300">Home</Link></li>
            <li><Link href="/shop" className="block hover:text-blue-300">Shop</Link></li>
            <li><Link href="/stats" className="block hover:text-blue-300">Stats & Data</Link></li>
            <li><Link href="/cards" className="block hover:text-blue-300">Cards</Link></li>
            <li><Link href="/live" className="block hover:text-blue-300">Live Streams</Link></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl font-bold mb-8"
          >
            Baseball Cards & Stats
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-blue-200 max-w-2xl"
          >
            We use cool baseball cards to illuminate the history—and to frame the statistical analysis—of Major League Baseball!
          </motion.p>
        </div>
      </section>
      {/* Live Streaming Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Live Now</h2>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              <Play className="w-4 h-4 mr-2" />
              Go Live
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {liveStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="aspect-video bg-gray-700">
                        {stream.thumbnail && (
                          <img 
                            src={stream.thumbnail} 
                            alt={stream.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        LIVE
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {stream.viewers}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{stream.title}</h3>
                      <div className="flex items-center text-gray-400 text-sm mb-3">
                        <span className="font-medium text-blue-400">{stream.host}</span>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        Started at {stream.startTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Schedule Preview */}
          <div className="mt-12 bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Upcoming Streams</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Card Grading Workshop</span>
                </div>
                <span className="text-gray-400">Tomorrow, 1:00 PM EST</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Vintage Collection Showcase</span>
                </div>
                <span className="text-gray-400">Friday, 3:00 PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* "Latest Posts" Heading on the Right */}
            <div className="flex justify-end mb-12">
              <h2 className="text-4xl font-bold">Latest Posts</h2>
            </div>

            {/* Blog Posts in a 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(0, 6).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gray-200">
                        {post.image && (
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-600">{post.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Introductory Text */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-6">Data & Analysis</h2>
            <p className="text-lg text-gray-700">
              Dive into the in-depth analysis and historical data that shape the game of baseball. Our resources offer insights 
              into player performance, team strategies, and league-wide trends, making them essential for analysts and fans alike.
            </p>
          </div>

          {/* Data Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">sOPS+ Data</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive statistical analysis of player performance using sOPS+, which compares a player's performance 
                  to league averages.
                </p>
                <a href="/sops-data" className="text-blue-500 hover:underline">
                  Learn More &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Lahman Database</h3>
                <p className="text-gray-600 mb-4">
                  Access to the extensive Lahman Database, featuring historical baseball statistics, player records, and more.
                </p>
                <a href="/lahman-database" className="text-blue-500 hover:underline">
                  Explore Database &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Win Probability Charts</h3>
                <p className="text-gray-600 mb-4">
                  Analyze game outcomes and strategies with detailed win probability charts for past and ongoing matches.
                </p>
                <a href="/win-charts" className="text-blue-500 hover:underline">
                  View Charts &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Pitch Tracking Data</h3>
                <p className="text-gray-600 mb-4">
                  In-depth pitch tracking data, including velocity, spin rate, and pitch location, to evaluate player performance.
                </p>
                <a href="/pitch-tracking" className="text-blue-500 hover:underline">
                  See Data &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Team Performance Index</h3>
                <p className="text-gray-600 mb-4">
                  An advanced metric that evaluates overall team performance, taking into account both offensive and defensive statistics.
                </p>
                <a href="/team-index" className="text-blue-500 hover:underline">
                  Discover More &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Historical Match Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Detailed analysis of historic matches, highlighting key moments and player contributions.
                </p>
                <a href="/historic-matches" className="text-blue-500 hover:underline">
                  Analyze Matches &rarr;
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Community Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Community Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Top Collector of the Month</h3>
                <p className="text-gray-600 mb-4">
                  Congratulations to <span className="text-blue-500 font-semibold">John Doe</span> for amassing an incredible collection of rare cards!
                </p>
                <a href="/community/top-collector" className="text-blue-500 hover:underline">
                  See Collection &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Community Trading Events</h3>
                <p className="text-gray-600 mb-4">
                  Join our upcoming live trading events to exchange cards and connect with fellow collectors.
                </p>
                <a href="/community/events" className="text-blue-500 hover:underline">
                  View Schedule &rarr;
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Featured Card Stories</h3>
                <p className="text-gray-600 mb-4">
                  Discover the fascinating stories behind some of the most iconic baseball cards in our community.
                </p>
                <a href="/community/stories" className="text-blue-500 hover:underline">
                  Read Stories &rarr;
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Newsletter Sign-Up Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for the latest news, exclusive content, and upcoming events.
          </p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full max-w-md p-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <Button className="bg-red-500 text-white rounded-r-lg hover:bg-red-600 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>




      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/home" className="hover:text-blue-300">Home</Link></li>
                <li><Link href="/blog" className="hover:text-blue-300">Blog</Link></li>
                <li><Link href="/stats" className="hover:text-blue-300">Stats & Data</Link></li>
                <li><Link href="/cards" className="hover:text-blue-300">Cards</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contact@baseballcards.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>123 Baseball Ave, Cardtown, USA</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><Link href="https://twitter.com/baseballcards" className="hover:text-blue-300">Twitter</Link></li>
                <li><Link href="https://facebook.com/baseballcards" className="hover:text-blue-300">Facebook</Link></li>
                <li><Link href="https://instagram.com/baseballcards" className="hover:text-blue-300">Instagram</Link></li>
                <li><Link href="https://youtube.com/baseballcards" className="hover:text-blue-300">YouTube</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates on cards, stats, and more.</p>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded bg-gray-800 text-white mb-2" />
              <Button className="w-full bg-red-500 text-white hover:bg-red-600">Subscribe</Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-300">© 2024 Baseball Cards & Stats. All rights reserved.</p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li><Link href="/privacy" className="hover:text-blue-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-300">Terms of Service</Link></li>
              <li><Link href="/faq" className="hover:text-blue-300">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
