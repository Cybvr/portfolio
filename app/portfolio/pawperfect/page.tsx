"use client";
import React, { useState } from 'react';
import { Quicksand } from 'next/font/google';
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

const quicksandFont = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

interface ProductType {
  id: number;
  name: string;
  price: string;
  description: string;
  category: string;
}

const ProductCard = ({ product }: { product: ProductType }) => (
  <Card className="transition-transform duration-300 hover:-translate-y-1">
    <CardHeader>
      <div className="h-48 bg-mint-200 rounded-t-lg flex items-center justify-center">
        <PawPrint className="w-16 h-16 text-mint-600" />
      </div>
      <CardTitle className="mt-4 text-xl font-heading">{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex justify-between items-center">
        <span className="text-orange-500 font-semibold">{product.price}</span>
        <button className="bg-mint-500 text-white px-4 py-2 rounded-full hover:bg-mint-600 transition">
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
      category: "grooming"
    },
    {
      id: 2,
      name: "Premium Kibble",
      price: "$49.99",
      description: "Grain-free nutrition for active pets",
      category: "food"
    },
    {
      id: 3,
      name: "Eco-Friendly Toy Bundle",
      price: "$34.99",
      description: "Sustainable materials, endless fun",
      category: "toys"
    },
    {
      id: 4,
      name: "Calming Bed",
      price: "$79.99",
      description: "Ultra-soft comfort for peaceful rest",
      category: "beds"
    }
  ];

  return (
    <div className={`${quicksandFont.variable} font-quicksand min-h-screen bg-gradient-to-b from-mint-50 to-white`}>
      {/* Navigation */}
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
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-mint-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading text-mint-800 mb-6">
              Love Your Pet,
              <br />
              Love Our Products
            </h1>
            <p className="text-xl text-mint-600 mb-8 font-body">
              Premium pet care essentials for your furry family members
            </p>
            <button className="bg-orange-400 text-white px-8 py-3 rounded-full text-lg hover:bg-orange-500 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-mint-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-mint-600 w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl mb-2">Made with Love</h3>
              <p className="text-gray-600 font-body">Carefully crafted products for your pet's wellbeing</p>
            </div>
            <div className="text-center">
              <div className="bg-mint-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Paw className="text-mint-600 w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl mb-2">Pet Approved</h3>
              <p className="text-gray-600 font-body">Tested and loved by pets worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-mint-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-mint-600 w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl mb-2">Free Shipping</h3>
              <p className="text-gray-600 font-body">On orders over $50</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-16 bg-mint-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-heading text-center mb-12 text-mint-800">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-heading text-orange-800 mb-4">Join Our Pack</h2>
            <p className="text-orange-600 mb-8 font-body">Subscribe for treats, tips, and exclusive offers</p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-full border-2 border-orange-200 focus:outline-none focus:border-orange-400"
              />
              <button className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-mint-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-xl mb-4">PawPerfect</h3>
              <p className="font-body text-mint-100">Making tails wag since 2024</p>
            </div>
            <div>
              <h4 className="font-heading text-lg mb-4">Shop</h4>
                <ul className="space-y-2 font-body">
                  <li><a href="#" className="text-mint-100 hover:text-white">Food</a></li>
                  <li><a href="#" className="text-mint-100 hover:text-white">Toys</a></li>
                  <li><a href="#" className="text-mint-100 hover:text-white">Accessories</a></li>
                  <li><a href="#" className="text-mint-100 hover:text-white">Grooming</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg mb-4">Help</h4>
                <ul className="space-y-2 font-body">
                  <li><a href="#" className="text-mint-100 hover:text-white">FAQs</a></li>
                  <li><a href="#" className="text-mint-100 hover:text-white">Shipping</a></li>
                  <li><a href="#" className="text-mint-100 hover:text-white">Returns</a></li>
                  <li><a href="#" className="text-mint-100 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-mint-100 hover:text-white">
                    <Instagram />
                  </a>
                  <a href="#" className="text-mint-100 hover:text-white">
                    <Facebook />
                  </a>
                  <a href="#" className="text-mint-100 hover:text-white">
                    <Twitter />
                  </a>
                </div>
              </div>
              </div>
              <div className="border-t border-mint-700 mt-8 pt-8 text-center font-body">
              <p className="text-mint-100">&copy; 2024 PawPerfect. All rights reserved.</p>
              </div>
              </div>
              </footer>
              </div>
              );
              };

              export default PetBrand;