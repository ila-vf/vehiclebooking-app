import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from './DashboardPage/Sidebar';
import PersetujuanList from './PersetujuanList';
import Chart from './DashboardPage/Chart';

export default function UserDashboard({ user }) {
        return (
            <div className="flex flex-col min-h-screen sm:flex-row sm:space-x-4 p-4 ">
            <Head title="User Dashboard" />
            {/* Sidebar */}
            <div className="w-full sm:w-1/4">
            <Sidebar user={user} />
            </div>
            {/* Chart */}
            <div className="w-full sm:w-3/4">
            <Chart/>
            </div>
                
            </div>
        );
    };

