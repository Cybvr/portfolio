// /app/portfolio/serenity/appointments/page.tsx
'use client';

import { useState } from 'react';
import { Calendar, Plus, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Appointment {
  id: number;
  doctor: string;
  date: string;
  time: string;
  type: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export default function AppointmentsPage() {
  const [activeFilter, setActiveFilter] = useState<'upcoming' | 'completed' | 'all'>('upcoming');
  const [appointments] = useState<Appointment[]>([
    {
      id: 1,
      doctor: 'Dr. Smith',
      date: '2024-11-01',
      time: '14:30',
      type: 'General Checkup',
      status: 'upcoming'
    },
    {
      id: 2,
      doctor: 'Dr. Johnson',
      date: '2024-11-15',
      time: '10:00',
      type: 'Follow-up',
      status: 'upcoming'
    },
    {
      id: 3,
      doctor: 'Dr. Williams',
      date: '2024-10-25',
      time: '15:45',
      type: 'Consultation',
      status: 'completed'
    }
  ]);

  const filteredAppointments = appointments.filter(appointment => {
    if (activeFilter === 'all') return true;
    return appointment.status === activeFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-orange-100 text-orange-700';
      case 'completed':
        return 'bg-pink-100 text-orange-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* Page Header with Filter */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-merriweather text-2xl font-bold text-gray-800">Appointments</h1>
        <button className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
          <Filter size={18} className="text-orange-400" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {(['upcoming', 'completed', 'all'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-merriweather ${
                activeFilter === filter
                  ? 'bg-orange-400 text-white'
                  : 'bg-pink-100 text-gray-600 hover:bg-orange-100'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {filteredAppointments.map((appointment) => (
          <Card 
            key={appointment.id} 
            className="bg-white hover:bg-pink-50 transition-colors cursor-pointer"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-merriweather font-medium text-gray-800">{appointment.doctor}</span>
                <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(appointment.status)}`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <Calendar size={16} className="text-orange-400" />
                <span>{new Date(appointment.date).toLocaleDateString()} at {appointment.time}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{appointment.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Appointment Button */}
      <button 
        className="fixed bottom-20 right-4 bg-orange-400 text-white rounded-full p-3 shadow-lg hover:bg-orange-500 flex items-center justify-center"
        aria-label="Add appointment"
      >
        <Plus size={24} />
      </button>
    </>
  );
}