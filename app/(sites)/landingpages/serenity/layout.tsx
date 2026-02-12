// /app/portfolio/serenity/layout.tsx
'use client';

import { Home, Calendar, ChartLine, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Merriweather, Inter } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function SerenityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className={`${merriweather.variable} ${inter.variable} font-inter min-h-screen bg-gradient-to-b from-pink-50 to-white`}>
      {/* Top Bar */}
      <header className="bg-white shadow-sm px-4 py-4 flex items-center justify-between fixed top-0 w-full z-10">
        <span className="font-merriweather text-xl font-bold text-orange-400">Serenity</span>
        <Link href="#" className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
          <User size={18} className="text-orange-400" />
        </Link>
      </header>

      {/* Main Content - with padding for top and bottom bars */}
      <main className="flex-1 px-4 pt-20 pb-20">
        {children}
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-white fixed bottom-0 w-full flex justify-around items-center px-6 py-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <Link 
          href="/portfolio/serenity" 
          className={`flex flex-col items-center p-2 ${
            pathname === '/portfolio/serenity' 
              ? 'text-orange-400' 
              : 'text-gray-400 hover:text-orange-400'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          href="/portfolio/serenity/appointments" 
          className={`flex flex-col items-center p-2 ${
            pathname === '/portfolio/serenity/appointments' 
              ? 'text-orange-400' 
              : 'text-gray-400 hover:text-orange-400'
          }`}
        >
          <Calendar size={24} />
          <span className="text-xs mt-1">Appointments</span>
        </Link>
        <Link 
          href="/portfolio/serenity/metrics" 
          className={`flex flex-col items-center p-2 ${
            pathname === '/portfolio/serenity/metrics' 
              ? 'text-orange-400' 
              : 'text-gray-400 hover:text-orange-400'
          }`}
        >
          <ChartLine size={24} />
          <span className="text-xs mt-1">Metrics</span>
        </Link>
      </nav>
    </div>
  );
}