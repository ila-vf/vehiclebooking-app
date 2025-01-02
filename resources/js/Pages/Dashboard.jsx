import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ user }) {
    const navigate = useNavigate();

    useEffect(() => {
        // Jika user memiliki peran 'admin', arahkan ke admin dashboard
        if (user.role === 'admin') {
            navigate('/admin');
        } 
        // Jika user belum disetujui, arahkan ke halaman pending approval
        else if (!user.is_approved) {
            navigate('/approval-pending');
        } 
        // Jika pengguna biasa, arahkan ke halaman user
        else {
            navigate('/user');
        }
    }, [user, navigate]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
