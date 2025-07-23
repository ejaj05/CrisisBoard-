import React from "react";
import { useState } from "react";

export default function ReportIncident() {
    const [incident, setIncident] = useState({
        category: "",
        location: "",
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setIncident((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Incident reported:", incident);

        // You can send this data to backend using fetch or axios
    };

    return (
        <div className="w-full h-screen overflow-auto pt-10 pb-20 mt-20">
            <div className="max-w-3xl mx-auto px-4  mt-20`">
                <h2 className="text-2xl font-bold mb-6 text-center">🚨 Report an Incident</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
                    {/* Category */}
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select
                            name="category"
                            value={incident.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="fire">🔥 Fire</option>
                            <option value="accident">🚗 Accident</option>
                            <option value="medical">💉 Medical Emergency</option>
                            <option value="crime">🔫 Crime</option>
                            <option value="other">📍 Other</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={incident.location}
                            onChange={handleChange}
                            placeholder="Type or use map picker"
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea
                            name="description"
                            value={incident.description}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe what happened..."
                            className="w-full border border-gray-300 rounded p-2"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block mb-1 font-medium">Upload Image (optional)</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="shadow w-28 px-2 py-2"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                    >
                        Submit Incident
                    </button>
                </form>
            </div>
        </div>
    );
}
