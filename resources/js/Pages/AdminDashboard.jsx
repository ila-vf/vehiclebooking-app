import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/Pages/DashboardPage/Sidebar'
import Chart from '@/Pages/DashboardPage/Chart'

export default function AdminDashboard({ user }) {
        return (
            <div className="flex flex-col min-h-screen sm:flex-row sm:space-x-4 p-4 ">
                <Head title="Admin Dashboard" />
                
                 {/* Sidebar */}
            <div className="w-full sm:w-1/4">
              <Sidebar />
            </div>

            {/* Chart */}
            <div className="w-full sm:w-3/4">
              <Chart />
            </div>
                
            </div>
        );
    };

