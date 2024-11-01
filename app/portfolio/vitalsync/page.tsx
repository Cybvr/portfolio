"use client";
import { Raleway } from 'next/font/google';
import React, { useState } from 'react';
import {
  Activity,
  BarChart,
  Users,
  Shield,
  Menu,
  X,
  CheckCircle,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ralewayFont = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
});

const features = [
  {
    title: 'Real-time Analytics',
    description: 'Monitor patient vitals and trends with advanced analytics',
    icon: <BarChart className="text-primary w-6 h-6" />,
  },
  {
    title: 'Patient Management',
    description: 'Streamline patient data and care coordination',
    icon: <Users className="text-primary w-6 h-6" />,
  },
  {
    title: 'Secure Platform',
    description: 'HIPAA-compliant security for sensitive health data',
    icon: <Shield className="text-primary w-6 h-6" />,
  },
  {
    title: 'Health Tracking',
    description: 'Comprehensive health metrics monitoring system',
    icon: <Activity className="text-primary w-6 h-6" />,
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    description: 'Perfect for small practices',
    features: [
      'Up to 100 patients',
      'Basic analytics',
      'Email support',
      'Standard reports',
    ],
  },
  {
    name: 'Professional',
    price: '$299',
    description: 'Ideal for growing clinics',
    features: [
      'Up to 1,000 patients',
      'Advanced analytics',
      '24/7 priority support',
      'Custom reports',
      'API access',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large healthcare organizations',
    features: [
      'Unlimited patients',
      'Custom solutions',
      'Dedicated support',
      'Custom integrations',
      'Advanced security',
    ],
  },
];

const FeatureCard = ({ feature }) => (
  <Card className="transition-transform duration-300 hover:scale-105">
    <CardHeader>
      <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
        {feature.icon}
      </div>
      <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
      <CardDescription className="text-sm">{feature.description}</CardDescription>
    </CardHeader>
  </Card>
);

const PricingCard = ({ tier }) => (
  <Card
    className={`${
      tier.highlighted ? 'border-primary border-2 shadow-lg' : 'border-gray-300'
    } transition-all duration-300 transform hover:scale-105`}
  >
    {tier.highlighted && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs">
        Most Popular
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-extrabold">{tier.price}</span>
        {tier.price !== 'Custom' && <span className="text-gray-500">/month</span>}
      </div>
      <CardDescription className="text-sm mt-2">{tier.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 text-sm">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="text-primary w-4 h-4" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-2 rounded-md text-sm ${
          tier.highlighted
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } transition`}
      >
        Get Started
      </button>
    </CardContent>
  </Card>
);

const VitalSync = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`${ralewayFont.variable} font-raleway min-h-screen bg-white text-gray-800`}>
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Activity className="text-primary w-8 h-8" />
            <span className="ml-2 font-bold text-lg">VitalSync</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-primary">Features</a>
            <a href="#" className="hover:text-primary">Solutions</a>
            <a href="#" className="hover:text-primary">Pricing</a>
            <a href="#" className="hover:text-primary">Contact</a>
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition">
              Get Started
            </button>
          </div>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-16 bg-gradient-to-b from-primary-light to-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Streamline Your Healthcare Management
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Empowering healthcare providers with powerful, secure, and intuitive solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition">
              Start Free Trial
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-primary-light transition">
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Features Designed for Modern Healthcare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="mb-8">
            Join thousands of healthcare providers who trust VitalSync.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-400 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 VitalSync. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default VitalSync;