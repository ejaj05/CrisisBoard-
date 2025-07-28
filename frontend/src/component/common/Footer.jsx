import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const {isDarkMode} = useSelector((state) => state.toggle)
    const [activeFilters, setActiveFilters] = useState({
        fire: true,
        medical: true,
        natural: true,
        accident: true,
        security: true,
        utility: true,
    });
    const incidents = [
        {
            id: 1,
            type: "fire",
            lat: 40.7128,
            lng: -74.006,
            title: "Building Fire",
            severity: "high",
            time: "5 min ago",
        },
        {
            id: 2,
            type: "medical",
            lat: 40.758,
            lng: -73.9855,
            title: "Medical Emergency",
            severity: "medium",
            time: "12 min ago",
        },
        {
            id: 3,
            type: "accident",
            lat: 40.7505,
            lng: -73.9934,
            title: "Traffic Collision",
            severity: "low",
            time: "18 min ago",
        },
        {
            id: 4,
            type: "natural",
            lat: 40.7282,
            lng: -73.9942,
            title: "Flood Warning",
            severity: "high",
            time: "25 min ago",
        },
        {
            id: 5,
            type: "security",
            lat: 40.7614,
            lng: -73.9776,
            title: "Security Alert",
            severity: "medium",
            time: "32 min ago",
        },
        {
            id: 6,
            type: "utility",
            lat: 40.7831,
            lng: -73.9712,
            title: "Power Outage",
            severity: "low",
            time: "45 min ago",
        },
    ];

    return (
        <div className="">
            <div
                className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} bg-opacity-90 backdrop-blur-sm border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
            >
                <div className="max-w-7xl mx-auto py-8 px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* About Section */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">CrisisWatch</h3>
                            <p className="text-sm opacity-75 mb-4">
                                Real-time emergency monitoring and response platform for
                                communities worldwide.
                            </p>
                            <div className="flex space-x-4">
                                <button className="text-xl hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    <FaTwitter/>
                                </button>
                                <button className="text-xl hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    <FaFacebook/>
                                </button>
                                <button className="text-xl hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    <FaLinkedin/>
                                </button>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        About Us
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        Emergency Services
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        Community Guidelines
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        Support Center
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        Safety Tips
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        Emergency Contacts
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        Training Materials
                                    </button>
                                </li>
                                <li>
                                    <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                        API Documentation
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <i className="fas fa-phone mr-2"></i>
                                    Emergency: 911
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-envelope mr-2"></i>
                                    support@crisiswatch.com
                                </li>
                                <li className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    New York, NY 10001
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mt-8 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-sm">
                                © 2025 CrisisWatch. All rights reserved.
                            </div>
                            <div className="flex space-x-6 text-sm">
                                <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    Privacy Policy
                                </button>
                                <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    Terms of Service
                                </button>
                                <button className="hover:text-red-500 transition-colors duration-200 !rounded-button whitespace-nowrap">
                                    Cookie Policy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergency Status Bar */}
            <div
                className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"} bg-opacity-90 backdrop-blur-sm p-4 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
            >
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-sm">System Online</span>
                        </div>
                        <div className="text-sm opacity-75">
                            Last Updated: {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="text-sm">
                            <span className="font-semibold">Active Incidents: </span>
                            <span className="text-red-500">
                                {/* {
                                    incidents.filter((item) =>  activeFilters[item.type])
                                } */}
                            </span>
                        </div>
                        <div className="text-sm">
                            <span className="font-semibold">Coverage Area: </span>
                            <span>New York City</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer