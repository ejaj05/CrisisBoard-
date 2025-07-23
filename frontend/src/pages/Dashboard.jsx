import React from 'react';
import { useEffect, useState } from 'react';
import { Bell, MapPin, PlusCircle, AlertTriangle, User } from 'lucide-react';
import FullMapView from './FullMapView';

const Dashboard = () => {
  const [incidents, setIncidents] = useState([
    { id: 1, type: 'Fire', location: 'Sector 5', icon: '🔥' },
    { id: 2, type: 'Accident', location: 'City Hospital', icon: '🚑' },
    { id: 3, type: 'Suspicious Activity', location: 'North Market', icon: '🚓' },
  ]);

  const username = "Ejaj"; // Ideally fetched from auth context

  return (
    <div className="h-screen bg-gray-50 overflow-auto">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-700">CrisisBoard</h1>
        <div className="flex items-center gap-4">
          <Bell className="text-gray-600 hover:text-black cursor-pointer" />
          <User className="text-gray-600 hover:text-black cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Welcome */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Welcome, {username}!</h2>
          <p className="text-gray-500">Stay informed and report incidents in your area.</p>
        </div>

        {/* Nearby Incidents */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Nearby Incidents</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white p-4 shadow rounded-lg flex items-center gap-4">
                <div className="text-3xl">{incident.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-700">{incident.type}</h4>
                  <p className="text-sm text-gray-500">{incident.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Preview */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold text-sky-700 mb-2">Live Map</h3>
          <div className="bg-gray-200 h-[90vh] flex items-center justify-center text-gray-500">
            <FullMapView/>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <button className="bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 flex items-center justify-center gap-2">
            <PlusCircle size={20} /> Report Incident
          </button>
          <button className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center gap-2">
            <MapPin size={20} /> View Nearby
          </button>
          <button className="bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 flex items-center justify-center gap-2">
            <AlertTriangle size={20} /> Alerts
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
