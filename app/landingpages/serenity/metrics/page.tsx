// /app/portfolio/serenity/metrics/page.tsx
'use client';

import { useState } from 'react';
import { Heart, Activity, Weight, Thermometer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MetricData {
  date: string;
  heartRate: number;
  bloodPressure: number;
  weight: number;
  temperature: number;
}

export default function MetricsPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');
  const [metrics] = useState<MetricData[]>([
    { date: '2024-10-26', heartRate: 72, bloodPressure: 120, weight: 68, temperature: 36.6 },
    { date: '2024-10-27', heartRate: 75, bloodPressure: 122, weight: 68.2, temperature: 36.5 },
    { date: '2024-10-28', heartRate: 71, bloodPressure: 118, weight: 68.1, temperature: 36.7 },
    { date: '2024-10-29', heartRate: 73, bloodPressure: 121, weight: 67.9, temperature: 36.6 },
    { date: '2024-10-30', heartRate: 74, bloodPressure: 119, weight: 67.8, temperature: 36.5 },
    { date: '2024-10-31', heartRate: 70, bloodPressure: 117, weight: 67.7, temperature: 36.6 },
    { date: '2024-11-01', heartRate: 72, bloodPressure: 120, weight: 67.5, temperature: 36.7 },
  ]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <>
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-merriweather text-2xl font-bold text-gray-800">Health Metrics</h1>
      </div>

      {/* Time Range Selector */}
      <div className="mb-6 flex space-x-2 overflow-x-auto pb-2">
        {['week', 'month', 'year'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range as 'week' | 'month' | 'year')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              timeRange === range
                ? 'bg-orange-400 text-white'
                : 'bg-pink-100 text-gray-600 hover:bg-orange-100'
            }`}
          >
            Last {range}
          </button>
        ))}
      </div>

      {/* Metrics Grid */}
      <div className="space-y-6">
        {/* Heart Rate */}
        <Card className="bg-white hover:bg-pink-50 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <Heart className="text-orange-400" size={20} />
                </div>
                <h2 className="font-merriweather font-medium text-gray-800">Heart Rate</h2>
              </div>
              <span className="text-orange-400 font-medium">{metrics[metrics.length - 1].heartRate} bpm</span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    domain={['dataMin - 5', 'dataMax + 5']}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip
                    labelFormatter={formatDate}
                    formatter={(value: number) => [`${value} bpm`, 'Heart Rate']}
                  />
                  <Line
                    type="monotone"
                    dataKey="heartRate"
                    stroke="#fb923c"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Blood Pressure */}
        <Card className="bg-white hover:bg-pink-50 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <Activity className="text-orange-400" size={20} />
                </div>
                <h2 className="font-merriweather font-medium text-gray-800">Blood Pressure</h2>
              </div>
              <span className="text-orange-400 font-medium">
                {metrics[metrics.length - 1].bloodPressure} mmHg
              </span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    domain={['dataMin - 5', 'dataMax + 5']}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip
                    labelFormatter={formatDate}
                    formatter={(value: number) => [`${value} mmHg`, 'Blood Pressure']}
                  />
                  <Line
                    type="monotone"
                    dataKey="bloodPressure"
                    stroke="#fb923c"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Weight */}
        <Card className="bg-white hover:bg-pink-50 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                  <Weight className="text-orange-400" size={20} />
                </div>
                <h2 className="font-merriweather font-medium text-gray-800">Weight</h2>
              </div>
              <span className="text-orange-400 font-medium">
                {metrics[metrics.length - 1].weight} kg
              </span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    domain={['dataMin - 1', 'dataMax + 1']}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip
                    labelFormatter={formatDate}
                    formatter={(value: number) => [`${value} kg`, 'Weight']}
                  />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#fb923c"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Temperature */}
        <Card className="bg-white hover:bg-pink-50 transition-colors">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <Thermometer className="text-orange-400" size={20} />
                </div>
                <h2 className="font-merriweather font-medium text-gray-800">Temperature</h2>
              </div>
              <span className="text-orange-400 font-medium">
                {metrics[metrics.length - 1].temperature}°C
              </span>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={metrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fce7f3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={formatDate}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <YAxis 
                    domain={['dataMin - 0.5', 'dataMax + 0.5']}
                    tick={{ fontSize: 12 }}
                    stroke="#9CA3AF"
                  />
                  <Tooltip
                    labelFormatter={formatDate}
                    formatter={(value: number) => [`${value}°C`, 'Temperature']}
                  />
                  <Line
                    type="monotone"
                    dataKey="temperature"
                    stroke="#fb923c"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}