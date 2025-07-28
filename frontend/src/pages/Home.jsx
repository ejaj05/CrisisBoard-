// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
import mapImg from '../assets/map-img.jpg'
import { IoMoonSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { MdZoomInMap } from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setisDarkMode } from '@/slices/toggle';

import { Link } from 'react-router-dom';
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {isDarkMode} = useSelector((state) => state.toggle)
  const dispatch = useDispatch()
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    fire: true,
    medical: true,
    natural: true,
    accident: true,
    security: true,
    utility: true
  });
  const incidentTypes = [
    { id: 'fire', name: 'Fire Emergency', icon: 'fas fa-fire', color: 'text-red-500', count: 3 },
    { id: 'medical', name: 'Medical Emergency', icon: 'fas fa-ambulance', color: 'text-blue-500', count: 7 },
    { id: 'natural', name: 'Natural Disaster', icon: 'fas fa-cloud-rain', color: 'text-green-500', count: 2 },
    { id: 'accident', name: 'Traffic Accident', icon: 'fas fa-car-crash', color: 'text-yellow-500', count: 4 },
    { id: 'security', name: 'Security Alert', icon: 'fas fa-shield-alt', color: 'text-purple-500', count: 1 },
    { id: 'utility', name: 'Utility Outage', icon: 'fas fa-bolt', color: 'text-orange-500', count: 2 }
  ];
  const incidents = [
    { id: 1, type: 'fire', lat: 40.7128, lng: -74.0060, title: 'Building Fire', severity: 'high', time: '5 min ago' },
    { id: 2, type: 'medical', lat: 40.7580, lng: -73.9855, title: 'Medical Emergency', severity: 'medium', time: '12 min ago' },
    { id: 3, type: 'accident', lat: 40.7505, lng: -73.9934, title: 'Traffic Collision', severity: 'low', time: '18 min ago' },
    { id: 4, type: 'natural', lat: 40.7282, lng: -73.9942, title: 'Flood Warning', severity: 'high', time: '25 min ago' },
    { id: 5, type: 'security', lat: 40.7614, lng: -73.9776, title: 'Security Alert', severity: 'medium', time: '32 min ago' },
    { id: 6, type: 'utility', lat: 40.7831, lng: -73.9712, title: 'Power Outage', severity: 'low', time: '45 min ago' }
  ];
  const toggleFilter = (filterId) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterId]: !prev[filterId]
    }));
  };
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };
  return (
    <div className="relative mt-20 z-10">

      {/* Map Background */}
      <div className={`min-h-screen z-0 inset-0 transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-50'}`}
        style={{
          backgroundImage: `url(${mapImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={`absolute h-screen inset-0 ${isDarkMode && 'bg-gray-900/50' }`}></div>
      </div>
      {/* Incident Markers */}
      {incidents.map((incident) => {
        const incidentType = incidentTypes.find(type => type.id === incident.type);
        if (!activeFilters[incident.type] || !incidentType) return null;
        return (
          <div
            key={incident.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
          >
            <div className={`relative ${getSeverityColor(incident.severity)} rounded-full p-3 shadow-lg transition-all duration-200 group-hover:scale-110`}>
              <i className={`${incidentType.icon} text-white text-lg`}></i>
              <div className={`absolute -top-1 -right-1 w-3 h-3 ${getSeverityColor(incident.severity)} rounded-full animate-pulse`}></div>
            </div>
            {/* Incident Info Popup */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm`}>
                <div className="font-semibold">{incident.title}</div>
                <div className="text-xs opacity-75">{incident.time}</div>
              </div>
            </div>
          </div>
        );
      })}
      {/* User Location Pin */}
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: '50%', top: '50%' }}>
        <div className="relative">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
          <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 w-8 h-8 bg-blue-500 rounded-full opacity-20 -translate-x-2 -translate-y-2"></div>
        </div>
      </div>
      {/* Legend/Filter Panel */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => setIsLegendOpen(!isLegendOpen)}
          className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-200 hover:bg-opacity-100 cursor-pointer !rounded-button whitespace-nowrap`}
        >
          <i className="fas fa-layer-group mr-2"></i>
          Legend
        </button>
        {isLegendOpen && (
          <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg mt-2 min-w-64`}>
            <h3 className="font-semibold mb-3 text-sm">Incident Types</h3>
            <div className="space-y-2">
              {incidentTypes.map((type) => (
                <div
                  key={type.id}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${activeFilters[type.id]
                      ? isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                      : 'opacity-50'
                    }`}
                  onClick={() => toggleFilter(type.id)}
                >
                  <div className="flex items-center">
                    <i className={`${type.icon} ${type.color} mr-3 text-sm`}></i>
                    <span className="text-sm">{type.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                    {type.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
        <button
          onClick={() => dispatch(setisDarkMode(!isDarkMode))}
          className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-200 hover:bg-opacity-100 cursor-pointer !rounded-button whitespace-nowrap`}
        >
          {isDarkMode ? <IoSettings/> : <IoMoonSharp/>}
        </button>
        <button className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-200 hover:bg-opacity-100 cursor-pointer !rounded-button whitespace-nowrap`}>
          <FiPlus/>
        </button>
        <button className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-200 hover:bg-opacity-100 cursor-pointer !rounded-button whitespace-nowrap`}>
          <AiOutlineMinus/>
        </button>
        <button className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-200 hover:bg-opacity-100 cursor-pointer !rounded-button whitespace-nowrap`}>
          <MdZoomInMap/>
        </button>
      </div>
      {/* Current Location Button */}
      <div className="absolute bottom-4 left-4 z-10">
        <button className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-200 hover:bg-opacity-100 cursor-pointer !rounded-button whitespace-nowrap`}>
          <i className="fas fa-location-arrow text-blue-500"></i>
        </button>
      </div>
      {/* Report Incident Button */}
      <div className="fixed bottom-24 right-4 md:right-8">
        <Link to={'/report'} className="bg-red-600 text-white md:px-8 md:py-4 p-3 rounded-md shadow-2xl transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-2xl cursor-pointer flex items-center space-x-3 !rounded-button whitespace-nowrap">
          <IoWarning className='text-2xl'/>
          <span className="font-bold text-lg tracking-wide">Report Incident</span>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping"></span>
        </Link>
      </div>
      
    </div>
  );
};
export default Home