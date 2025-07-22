import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, LogOut } from "lucide-react";

import React from 'react'

const LoginPad = () => {
    return (
        <div className="min-h-screen bg-[#f5f9fc] p-6">
            {/* Navbar */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-[#007BFF]">CrisisBoard</h1>
                <div className="flex items-center gap-4">
                    <Bell className="w-5 h-5 text-[#007BFF] cursor-pointer" />
                    <span className="text-gray-700 font-medium">Citizen</span>
                    <img
                        src="https://ui-avatars.com/api/?name=User"
                        alt="User"
                        className="w-8 h-8 rounded-full"
                    />
                    <LogOut className="w-5 h-5 text-red-500 cursor-pointer" />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                    { title: "Today's Incidents", value: 8 },
                    { title: "Active Responders", value: 14 },
                    { title: "Resolved Cases", value: 32 },
                    { title: "Live Reports", value: 3 },
                ].map((stat, i) => (
                    <Card key={i} className="shadow rounded-2xl">
                        <CardContent className="p-4">
                            <p className="text-gray-500 text-sm">{stat.title}</p>
                            <h2 className="text-2xl font-semibold text-[#007BFF]">{stat.value}</h2>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Button className="bg-[#007BFF] text-white hover:bg-blue-600 w-full md:w-auto">
                    Report New Incident
                </Button>
                <Button className="bg-[#FFA500] text-white hover:bg-orange-600 w-full md:w-auto">
                    Join Incident Room
                </Button>
                <Button className="bg-gray-700 text-white hover:bg-gray-900 w-full md:w-auto">
                    View Admin Panel
                </Button>
            </div>

            {/* Alerts Feed */}
            <div className="bg-white rounded-2xl p-4 shadow">
                <h2 className="text-lg font-semibold text-[#007BFF] mb-2">Live Alerts</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Flood alert in North Zone. Responders deployed.</li>
                    <li>Citizen reported fire incident in Block A.</li>
                    <li>Weather warning: High winds expected today evening.</li>
                </ul>
            </div>
        </div>
    )
}

export default LoginPad
