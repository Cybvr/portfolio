"use client";
import React, { useState } from 'react';
import { Star, Phone, MapPin, Clock, ChevronRight, Menu, X } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Merriweather } from 'next/font/google';

const merriweatherFont = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

const MenuSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-amber-800 mb-4">{title}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-amber-200 pb-4">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">{item.name}</h4>
            <span className="text-amber-800 font-semibold">{item.price}</span>
          </div>
          <p className="text-gray-600 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const AlQasrAlMalaki = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');

  const menuItems = {
    starters: [
      {
        name: "Gold-Dusted Dates",
        price: "AED 85",
        description: "Organic Medjool dates filled with saffron-infused almond paste"
      },
      {
        name: "Pearl of the Gulf",
        price: "AED 165",
        description: "Fresh oysters with rose water pearls and citrus caviar"
      }
    ],
    mains: [
      {
        name: "Camel Prime Cut",
        price: "AED 450",
        description: "24-hour slow-cooked camel tenderloin with truffle jus"
      },
      {
        name: "Royal Persian Saffron Rice",
        price: "AED 195",
        description: "Basmati rice infused with saffron, studded with berries and nuts"
      }
    ],
    desserts: [
      {
        name: "Golden Phoenix",
        price: "AED 250",
        description: "23k gold-wrapped chocolate soufflé with Iranian pistachios"
      }
    ]
  };

  return (
    <div className={`${merriweatherFont.variable} font-merriweather min-h-screen bg-gradient-to-b from-amber-50 to-white`}>
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-800">Al Qasr Al Malaki</h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => setActiveTab('menu')}
                className={`${activeTab === 'menu' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600'} px-3 py-2`}
              >
                Menu
              </button>
              <button 
                onClick={() => setActiveTab('reservations')}
                className={`${activeTab === 'reservations' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600'} px-3 py-2`}
              >
                Reservations
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                className={`${activeTab === 'contact' ? 'text-amber-800 border-b-2 border-amber-800' : 'text-gray-600'} px-3 py-2`}
              >
                Contact
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-amber-800"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                setActiveTab('menu');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-800 hover:bg-amber-50 w-full text-left"
            >
              Menu
            </button>
            <button
              onClick={() => {
                setActiveTab('reservations');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-800 hover:bg-amber-50 w-full text-left"
            >
              Reservations
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-800 hover:bg-amber-50 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-96 bg-amber-900">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Al Qasr Al Malaki</h2>
              <p className="text-xl text-amber-100">Where Royal Arabian Cuisine Meets Modern Luxury</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'menu' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-amber-800">Royal Culinary Experience</h2>
            <MenuSection title="Starters" items={menuItems.starters} />
            <MenuSection title="Main Courses" items={menuItems.mains} />
            <MenuSection title="Desserts" items={menuItems.desserts} />
          </div>
        )}

        {activeTab === 'reservations' && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Make a Reservation</CardTitle>
              <CardDescription>Experience dining at its finest</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="time"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Number of guests"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button className="w-full bg-amber-800 text-white py-2 rounded hover:bg-amber-900 transition">
                  Request Reservation
                </button>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>Get in touch with our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-amber-800" />
                  <span>+971 4 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-amber-800" />
                  <span>Downtown Dubai, Adjacent to Dubai Mall</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-amber-800" />
                  <span>Open daily: 12:00 PM - 12:00 AM</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Al Qasr Al Malaki</h3>
              <p className="text-amber-200">Experience the pinnacle of Arabian hospitality</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <p>Lunch: 12:00 PM - 3:30 PM</p>
              <p>Dinner: 6:30 PM - 12:00 AM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p>Downtown Dubai</p>
              <p>United Arab Emirates</p>
              <p>Tel: +971 4 123 4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlQasrAlMalaki;