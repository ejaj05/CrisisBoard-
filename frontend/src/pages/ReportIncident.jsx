// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { IoWarning } from 'react-icons/io5';
import { FaTelegramPlane } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { toast } from 'react-toastify';
import { FaFileAlt } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaCamera } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { useSelector } from 'react-redux';

const ReportIncident = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        category: '',
        photo: null
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const {isDarkMode} = useSelector((state) => state.toggle);
    const [useAutoLocation, setUseAutoLocation] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);
    const categories = [
        'Fire Emergency',
        'Medical Emergency',
        'Traffic Accident',
        'Natural Disaster',
        'Crime in Progress',
        'Infrastructure Damage',
        'Environmental Hazard',
        'Public Safety Concern'
    ];
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const handlePhotoUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                photo: file
            }));
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setPhotoPreview(e.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleAutoLocation = () => {
        setUseAutoLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setFormData(prev => ({
                        ...prev,
                        location: `${position.coords.latitude}, ${position.coords.longitude}`
                    }));
                    setUseAutoLocation(false);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setUseAutoLocation(false);
                }
            );
        }
    };
    const validateForm = () => {
        const newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }
        if (!formData.location.trim()) {
            newErrors.location = 'Location is required';
        }
        if (!formData.category) {
            newErrors.category = 'Category is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        alert('Incident reported successfully!');
    };
    const getCurrentTimestamp = () => {
        return new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900":"bg-gray-50"}  py-8 px-4 mt-20 `}>
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                        <IoWarning className='text-red-500 text-3xl mr-3'/>
                        <h1 className={`text-3xl font-bold ${isDarkMode?"text-white":"text-gray-900"}`}>Report Incident</h1>
                    </div>
                    <p className={`${isDarkMode?"text-gray-300":"text-gray-600"} text-lg`}>
                        Please provide detailed information about the incident to help emergency responders
                    </p>
                </div>
                {/* Main Form Card */}
                <div className={`${isDarkMode?"bg-gray-800":"bg-white"} rounded-lg shadow-lg p-6`}>
                    <form onSubmit={handleSubmit} className={`space-y-6 ${isDarkMode?"text-gray-300":"text-gray-600"}`}>
                        {/* Title Field */}
                        <div>
                            <label className="flex items-center text-sm font-medium  mb-2">
                                <FaFileAlt className=' mr-2'/>
                                Incident Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Brief description of the incident"
                                className={`${isDarkMode?"bg-gray-700":"bg-white"} w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.title ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.title && (
                                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                            )}
                        </div>
                        {/* Description Field */}
                        <div>
                            <label className="flex items-center text-sm font-medium mb-2">
                                <IoChatbox className='mr-2'/>
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Provide detailed information about what happened, when, and any other relevant details"
                                className={`${isDarkMode?"bg-gray-700":"bg-gray-100"} w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none ${errors.description ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                            )}
                        </div>
                        {/* Location Section */}
                        <div>
                            <label className="flex items-center text-sm font-medium mb-2">
                                <FaLocationDot className=' mr-2'/>
                                Location
                            </label>
                            {/* Auto Location Button */}
                            <button
                                type="button"
                                onClick={handleAutoLocation}
                                disabled={useAutoLocation}
                                className="mb-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors cursor-pointer whitespace-nowrap !rounded-button"
                            >
                                <i className={`fas ${useAutoLocation ? 'fa-spinner fa-spin' : 'fa-crosshairs'} mr-2`}><MdMyLocation/></i>
                                
                                {useAutoLocation ? 'Getting Location...' : 'Use Current Location'}
                            </button>
                            {/* Manual Location Input */}
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                placeholder="Enter address or coordinates manually"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${errors.location ? 'border-red-500' : 'border-gray-300'
                                    }`}
                            />
                            {errors.location && (
                                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                            )}
                            {/* Map Preview */}
                            <div className={`mt-3 h-48 ${isDarkMode?"bg-gray-700":"bg-gray-100"} rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors`}>
                                <div className="flex flex-col items-center">
                                    <FaMap className='text-3xl mb-2'/>
                                    <p className="text-gray-500 text-sm">Click to select location on map</p>
                                </div>
                            </div>
                        </div>
                        {/* Category Dropdown */}
                        <div>
                            <label className="flex items-center text-sm font-medium mb-2">
                                <GoFileDirectoryFill className='mr-2'/>
                                Incident Category
                            </label>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors appearance-none ${isDarkMode?"bg-gray-700":"bg-white"} ${errors.category ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                >
                                    <option value="">Select incident category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            </div>
                            {errors.category && (
                                <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                            )}
                        </div>
                        {/* Photo Upload */}
                        <div>
                            <label className="flex items-center text-sm font-medium mb-2">
                                <i className="fas fa-camera text-gray-400 mr-2"></i>
                                <FaCamera className='mr-2'/>
                                Photo Evidence (Optional)
                            </label>
                            <div className={`${isDarkMode?"bg-gray-700":"bg-gray-100"} border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors`}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoUpload}
                                    className="hidden"
                                    id="photo-upload"
                                />
                                <label htmlFor="photo-upload" className="cursor-pointer">
                                    {photoPreview ? (
                                        <div className="space-y-3">
                                            <img
                                                src={photoPreview}
                                                alt="Preview"
                                                className="mx-auto h-32 w-32 object-cover rounded-lg"
                                            />
                                            <p className="text-sm text-gray-600">Click to change photo</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl"></i>
                                            <div>
                                                <p className="">Click to upload photo</p>
                                                <p className="text-sm">or drag and drop</p>
                                            </div>
                                        </div>
                                    )}
                                </label>
                            </div>
                        </div>
                        {/* Submit Section */}
                        <div className="pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap !rounded-button"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <i className="fas fa-spinner fa-spin mr-2"></i>
                                        Submitting Report...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center">
                                        <FaTelegramPlane className='mr-2'/>
                                        Submit Incident Report
                                    </span>
                                )}
                            </button>
                            <div className="mt-4 text-center text-sm text-gray-500">
                                <i className="fas fa-clock mr-1"></i>
                                Report timestamp: {getCurrentTimestamp()}
                            </div>
                        </div>
                    </form>
                </div>
                {/* Emergency Notice */}
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-3"></i>
                        <div>
                            <h3 className="text-sm font-medium text-red-800">Emergency Notice</h3>
                            <p className="text-sm text-red-700 mt-1">
                                For immediate life-threatening emergencies, call 911 directly. This form is for non-emergency incident reporting.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ReportIncident