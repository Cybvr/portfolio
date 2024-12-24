"use client";
import React, { useState } from 'react';
import { 
  PawPrint, 
  Heart, 
  ShoppingBag, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductType {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

const ProductCard = ({ product }: { product: ProductType }) => (
  <Card className="transition-transform duration-300 hover:-translate-y-1">
    <CardHeader>
      <div className="h-48 bg-blue-100 rounded-t-lg flex items-center justify-center overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <CardTitle className="mt-4 text-xl font-heading">{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center">
        <span className="text-orange-500 font-semibold">{product.price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </CardContent>
  </Card>
);



const PetBrand = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const products: ProductType[] = [
    {
      id: 1,
      name: "Organic Pet Shampoo",
      price: "$24.99",
      description: "Natural, gentle formula for sensitive pets",
      category: "grooming",
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: "Premium Kibble",
      price: "$49.99",
      description: "Grain-free nutrition for active pets",
      category: "food",
      image: 'https://example.com/product1.jpg'
    },
    {
      id: 3,
      name: "Eco-Friendly Toy Bundle",
      price: "$34.99",
      description: "Sustainable materials, endless fun",
      category: "toys",
      image: 'https://example.com/product1.jpg'
    },
    {
      id: 4,
      name: "Calming Bed",
      price: "$79.99",
      description: "Ultra-soft comfort for peaceful rest",
      category: "beds",
      image: 'https://example.com/product1.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50 to-white">
      {/* Navigation - Keeping original nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-heading text-mint-800">PawPerfect</h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-mint-600">Shop</a>
              <a href="#" className="text-gray-600 hover:text-mint-600">About</a>
              <a href="#" className="text-gray-600 hover:text-mint-600">Contact</a>
              <a href="#" className="text-gray-600 hover:text-mint-600">Blog</a>
              <a href="#" className="text-gray-600 hover:text-mint-600">Testimonials</a>
              <a href="#" className="text-gray-600 hover:text-mint-600">
                <ShoppingBag className="w-5 h-5" />
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-mint-600">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-mint-600">About</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-mint-600">Contact</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-mint-600">Blog</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-mint-600">Testimonials</a>
          </div>
        </div>
      )}

      {/* Updated Hero Section - Split Screen with Diagonal Divider */}
      <div className="relative bg-blue-100 overflow-hidden">
        <div className="absolute inset-0 bg-blue-200 transform -skew-y-6 origin-top-left z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left md:pr-12">
              <h1 className="text-5xl md:text-6xl font-heading text-blue-800 mb-6">
                Love Your Pet,
                <br />
                Love Our Products
              </h1>
              <p className="text-xl text-blue-600 mb-8 font-body">
                Premium pet care essentials for your furry family members
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-400 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-500 transition">
                  Shop Now
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-blue-600 hover:text-white transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full opacity-50"></div>
              <img src="/images/portfolio/pawperfect/1.jpg" alt="Happy pet" className="relative z-10 w-full max-w-md rounded-lg shadow-xl transform hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Updated Featured Product Carousel - Horizontal Scroll with Gradient Edges */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 text-sm uppercase tracking-wider">Featured Items</span>
            <h2 className="text-3xl font-heading text-blue-800 mt-2">Spotlight Products</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="flex space-x-6 overflow-x-scroll scrollbar-hide relative">
              {products.map(product => (
                <div key={product.id} className="min-w-[300px] transform hover:scale-105 transition duration-300">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Updated CTA Section - Overlapping Cards Layout */}
      <div className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute top-0 left-0 w-3/4 h-full bg-orange-100 rounded-lg"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-4xl font-heading text-orange-800 mb-6">Special Discounts for Our Members</h2>
                <p className="text-lg text-orange-600 font-body mb-8">
                  Sign up today to enjoy exclusive offers and make your furry friend happier than ever.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-500 text-white px-8 py-3 rounded-sm text-lg hover:bg-blue-600 transition flex-1">
                    Become a Member
                  </button>
                  <button className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-sm text-lg hover:bg-orange-400 hover:text-white transition flex-1">
                    Learn Benefits
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-lg"></div>
                <img src="/images/portfolio/pawperfect/discount.jpg" alt="Discount Offer" className="relative z-10 w-full rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Products Grid - Masonry-style Layout */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 text-sm uppercase tracking-wider">Our Collection</span>
            <h2 className="text-3xl font-heading text-blue-800 mt-2">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className={`transform ${index % 2 === 0 ? 'md:-translate-y-8' : ''}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated Customer Journey - Timeline Layout */}
      <div className="py-20 bg-mint-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-4xl font-heading text-mint-800 mb-6">Our Customer's Journey</h2>
                <p className="text-lg text-mint-600 font-body mb-8">Follow the story of our loyal customers and learn how our products have improved their lives and their pets'.</p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-sm text-lg hover:bg-orange-600 transition w-full md:w-auto">
                  Discover Stories
                </button>
              </div>
            </div>
            <div className="md:col-span-2 space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-mint-300">
                <div className="absolute left-0 top-0 w-4 h-4 bg-mint-500 rounded-full -translate-x-2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-heading text-mint-700 mb-4">First Visit</h3>
                  <p className="text-mint-600">Discovering the perfect products for their pets' needs.</p>
                  <img src="/images/portfolio/pawperfect/400/200" alt="First Visit" className="w-full rounded-lg mt-4" />
                </div>
              </div>
              <div className="relative pl-8 pb-8 border-l-2 border-mint-300">
                <div className="absolute left-0 top-0 w-4 h-4 bg-mint-500 rounded-full -translate-x-2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-heading text-mint-700 mb-4">Regular Customer</h3>
                  <p className="text-mint-600">Building trust through quality products and excellent service.</p>
                  <img src="/images/portfolio/pawperfect/400/200" alt="Regular Customer" className="w-full rounded-lg mt-4" />
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-mint-500 rounded-full -translate-x-2"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-heading text-mint-700 mb-4">Brand Advocate</h3>
                  <p className="text-mint-600">Sharing their positive experiences with other pet parents.</p>
                  <img src="/images/portfolio/pawperfect/400/200" alt="Brand Advocate" className="w-full rounded-lg mt-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Blog Section - Magazine Style Layout */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-500 text-sm uppercase tracking-wider">Latest Articles</span>
            <h2 className="text-3xl font-heading text-blue-800 mt-2">From Our Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="/images/portfolio/pawperfect/400/300" alt="Pet care tips" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-sm bg-blue-500 px-3 py-1 rounded-full">Pet Care</span>
                </div>
              </div>
              <h3 className="font-heading text-2xl mb-4 group-hover:text-blue-600 transition">Pet Care 101</h3>
              <p className="text-gray-600 font-body mb-6">Learn the basics of taking care of your furry friends. This guide will help you understand your pet's needs and keep them happy.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="/images/portfolio/pawperfect/400/300" alt="Healthy diets" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-sm bg-orange-500 px-3 py-1 rounded-full">Nutrition</span>
                </div>
              </div>
              <h3 className="font-heading text-2xl mb-4 group-hover:text-blue-600 transition">Healthy Diets for Pets</h3>
              <p className="text-gray-600 font-body mb-6">Discover the best foods for your pet's nutrition and learn how to ensure they get a balanced diet for a healthy life.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="/images/portfolio/pawperfect/400/300" alt="Pet training" className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-sm bg-green-500 px-3 py-1 rounded-full">Training</span>
                </div>
              </div>
              <h3 className="font-heading text-2xl mb-4 group-hover:text-blue-600 transition">Training Tips</h3>
              <p className="text-gray-600 font-body mb-6">Helpful tips to train your pets effectively, improve their behavior, and make sure they listen to your commands.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Newsletter Section - Floating Card Design */}
      <div className="bg-orange-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative bg-white rounded-xl shadow-xl p-12 max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
            <div className="relative z-10">
              <div className="text-center">
                <span className="text-orange-500 text-sm uppercase tracking-wider">Newsletter</span>
                <h2 className="text-3xl font-heading text-orange-800 mt-2 mb-4">Join Our Pack</h2>
                <p className="text-orange-600 mb-8 font-body max-w-2xl mx-auto">
                  Subscribe for treats, tips, and exclusive offers. Get the latest updates, product announcements, 
                  and pet care tips straight to your inbox. Be part of our growing community of pet lovers!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 p-4 rounded-lg border-2 border-orange-200 focus:outline-none focus:border-orange-400 shadow-sm"
                  />
                  <button className="bg-orange-400 text-white px-8 py-4 rounded-lg hover:bg-orange-500 transition shadow-md hover:shadow-lg">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  🎁 New subscribers receive a special welcome discount!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Testimonials Section - Grid with Decorative Elements */}
      <div className="bg-blue-50 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-500 text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl font-heading text-blue-800 mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-full -translate-x-4 -translate-y-4 opacity-50"></div>
              <div className="relative">
                <div className="mb-6">
                  <PawPrint className="w-12 h-12 text-blue-400" />
                </div>
                <p className="text-gray-600 font-body mb-6">"The organic pet shampoo has worked wonders for my dog's skin! The natural ingredients are gentle yet effective. Highly recommend for pets with sensitive skin."</p>
                <div className="flex items-center space-x-4">
                  <img src="/images/portfolio/pawperfect/48/48" alt="Customer" className="w-12 h-12 rounded-full border-2 border-blue-200" />
                  <div>
                    <h4 className="font-heading text-lg">Emily R.</h4>
                    <p className="text-sm text-gray-500">Pet Parent</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative md:translate-y-8">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-100 rounded-full -translate-x-4 -translate-y-4 opacity-50"></div>
              <div className="relative">
                <div className="mb-6">
                  <PawPrint className="w-12 h-12 text-orange-400" />
                </div>
                <p className="text-gray-600 font-body mb-6">"My cat absolutely loves the eco-friendly toy bundle. Great quality, sustainable materials, and provides hours of entertainment. Finally found toys that last!"</p>
                <div className="flex items-center space-x-4">
                  <img src="/images/portfolio/pawperfect/48/48" alt="Customer" className="w-12 h-12 rounded-full border-2 border-orange-200" />
                  <div>
                    <h4 className="font-heading text-lg">John D.</h4>
                    <p className="text-sm text-gray-500">Cat Lover</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute top-0 right-0 w-16 h-16 bg-mint-100 rounded-full -translate-x-4 -translate-y-4 opacity-50"></div>
              <div className="relative">
                <div className="mb-6">
                  <PawPrint className="w-12 h-12 text-mint-400" />
                </div>
                <p className="text-gray-600 font-body mb-6">"The calming bed has been a game-changer for my nervous pup. The quality is exceptional, and the customer service team was incredibly helpful with sizing. Thank you!"</p>
                <div className="flex items-center space-x-4">
                  <img src="/images/portfolio/pawperfect/48/48" alt="Customer" className="w-12 h-12 rounded-full border-2 border-mint-200" />
                  <div>
                    <h4 className="font-heading text-lg">Sarah M.</h4>
                    <p className="text-sm text-gray-500">Dog Mom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Footer - Modern Grid Layout with Visual Elements */}
      <footer className="bg-mint-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mint-700/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <PawPrint className="w-8 h-8 text-white" />
                <h3 className="font-heading text-2xl text-white">PawPerfect</h3>
              </div>
              <p className="font-body text-mint-100">Making tails wag since 2024. Committed to providing the best for your furry friends.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-mint-200 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-mint-200 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-mint-200 transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-lg text-white mb-6">Shop</h4>
              <ul className="space-y-3 font-body">
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Food
                  </a>
                </li>
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Toys
                  </a>
                </li>
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Grooming
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-lg text-white mb-6">Help</h4>
              <ul className="space-y-3 font-body">
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-mint-100 hover:text-white transition flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-heading text-lg text-white mb-6">Newsletter</h4>
              <p className="text-mint-100 font-body">Stay updated with our latest offers and pet care tips.</p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-mint-700/50 text-white placeholder-mint-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-400"
                />
                <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-mint-700/50 mt-12 pt-8 text-center">
            <p className="text-mint-100 font-body">&copy; 2024 PawPerfect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PetBrand;