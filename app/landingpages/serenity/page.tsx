// /app/portfolio/serenity/page.tsx
'use client';

import { useState } from 'react';
import { Calendar, Activity, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SerenityHome() {
  const [greeting, setGreeting] = useState('Good morning');

  // Update greeting based on time of day
  useState(() => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 17) setGreeting('Good afternoon');
    else if (hour >= 17) setGreeting('Good evening');
  });

  return (
    <>
      <h1 className="font-merriweather text-2xl font-bold text-gray-800 mb-6">{greeting}, Sarah</h1>

      {/* Today's Overview */}
      <section className="mb-8">
        <h2 className="font-merriweather text-lg font-semibold text-gray-600 mb-4">Today's Overview</h2>
        <div className="space-y-4">
          <Card className="bg-white hover:bg-pink-50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <Calendar size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-merriweather font-medium text-gray-800">Next Appointment</h3>
                    <p className="text-sm text-gray-600">Today, 2:30 PM</p>
                  </div>
                </div>
                <span className="text-sm text-orange-400">Dr. Smith</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:bg-pink-50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Activity size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-merriweather font-medium text-gray-800">Latest Vitals</h3>
                    <p className="text-sm text-gray-600">Heart Rate: 72 bpm</p>
                  </div>
                </div>
                <span className="text-sm text-orange-400">2h ago</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:bg-pink-50 transition-colors cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <Clock size={20} className="text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-merriweather font-medium text-gray-800">Medication Reminder</h3>
                    <p className="text-sm text-gray-600">Vitamin D - 1 tablet</p>
                  </div>
                </div>
                <span className="text-sm text-orange-400">In 2h</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Weekly Summary Section */}
      <section>
        <h2 className="font-merriweather text-lg font-semibold text-gray-600 mb-4">Weekly Summary</h2>
        <Card className="bg-white p-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Steps Goal</span>
              <span className="text-orange-400 font-medium">8,420 / 10,000</span>
            </div>
            <div className="w-full bg-pink-100 rounded-full h-2">
              <div className="bg-orange-400 h-2 rounded-full" style={{ width: '84.2%' }}></div>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
}