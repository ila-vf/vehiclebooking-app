import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FaCar } from "react-icons/fa";
import { FiHome, FiClipboard, FiDownload, FiCheck,FiLogOut, FiAlignJustify, FiX } from "react-icons/fi";
import { Inertia } from '@inertiajs/inertia';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Handle logout functionality
  const handleLogout = () => {
    Inertia.post('/logout');
  };

  // Navigation items
  const navItems = [
    { href: "/", label: "Home", icon: <FiHome className="mr-3 text-xl" /> },
    { href: "/pemesanan-form", label: "Form Pemesanan", icon: <FiClipboard className="mr-3 text-xl" /> },
    { href: "/pemesanan-export", label: "Export Laporan", icon: <FiDownload className="mr-3 text-xl" /> },
    { href: "/persetujuan-list", label: "Persetujuan", icon: <FiCheck className="mr-3 text-xl" /> },
  ];

  // Sidebar content
  const SidebarContent = () => (
    <ul className="space-y-4 ">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="hover:text-indigo-500 py-2 flex items-center transition-all duration-200 ease-in-out"
          >
            {item.icon}
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <button
          onClick={handleLogout}
          className="hover:text-indigo-500 py-2 flex items-center w-full text-left transition-all duration-200 ease-in-out"
        >
          <FiLogOut className="mr-3 text-xl" />
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <div className="relative ">
      {/* Sidebar for larger screens */}
      <div
        className={`fixed top-6 left-6 bottom-6 w-64 bg-white text-gray-800 p-5 rounded-lg shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} sm:block`}
      >
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <FaCar className="mr-2 text-indigo-500" /> Vebook
        </h2>
        <SidebarContent />
      </div>

      {/* Toggle button for smaller screens */}
      <button
        className="sm:hidden fixed top-4 left-6 text-black p-3 rounded-full shadow-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiAlignJustify className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
