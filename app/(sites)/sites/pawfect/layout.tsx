'use client';

import { 
  Dog, 
  Heart, 
  Search, 
  ShoppingCart, 
  User, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram
} from 'lucide-react';

export default function PawfectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-indigo-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567</span>
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@pawfectmatch.com</span>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-4 h-4 cursor-pointer" />
            <Twitter className="w-4 h-4 cursor-pointer" />
            <Instagram className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Dog className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-800">PawfectMatch</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Dogs</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Breeds</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="w-6 h-6 text-gray-600 cursor-pointer" />
              <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Dog className="w-6 h-6" />
                <span className="text-xl font-bold">PawfectMatch</span>
              </div>
              <p className="text-gray-400">Finding forever homes for our furry friends, one paw at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Available Dogs</a></li>
                <li><a href="#" className="hover:text-white">Adoption Process</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> support@pawfectmatch.com</li>
                <li>123 Puppy Lane</li>
                <li>Dogtown, DG 12345</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on new arrivals and special offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-grow"
                />
                <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-400">&copy; 2024 PawfectMatch. All rights reserved.</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}