import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Head } from '@inertiajs/react';
import Sidebar from './DashboardPage/Sidebar';

// Header tabel utama
const TABLE_HEADERS = [
  { colSpan: 3, label: "Kendaraan" },
  { colSpan: 3, label: "Driver" },
  { colSpan: 3, label: "Pihak" },
  { colSpan: 2, label: "Pemesanan" },
];

// Header kolom data
const COLUMN_HEADERS = [
  "Nama", "Kategori", "Status", 
  "Nama", "Alamat", "Telepon", 
  "Nama", "Jabatan", "Telepon", 
  "Tanggal Pemesanan", "Status"
];

// Komponen untuk setiap baris dalam tabel
const TableRow = ({ item }) => (
  <tr key={item.id}>
    <td className="px-4 py-2 border">{item.kendaraan?.nama}</td>
    <td className="px-4 py-2 border">{item.kendaraan?.kategori}</td>
    <td className="px-4 py-2 border">{item.kendaraan?.status}</td>
    <td className="px-4 py-2 border">{item.driver?.nama}</td>
    <td className="px-4 py-2 border">{item.driver?.alamat}</td>
    <td className="px-4 py-2 border">{item.driver?.telepon}</td>
    <td className="px-4 py-2 border">{item.pihak?.nama}</td>
    <td className="px-4 py-2 border">{item.pihak?.jabatan}</td>
    <td className="px-4 py-2 border">{item.pihak?.telepon}</td>
    <td className="px-4 py-2 border">{item.tanggal_pemesanan}</td>
    <td className="px-4 py-2 border">{item.status}</td>
  </tr>
);

// Kelas untuk tombol unduh laporan
const DOWNLOAD_BUTTON_CLASSES =
  "px-6 py-2 bg-indigo-700 text-white font-medium text-sm rounded-lg shadow hover:bg-indigo-400 focus:ring focus:ring-indigo-300 flex items-center";


const PemesananExport = ({ pemesanan }) => {
  // Fungsi untuk menangani klik unduh
  const handleDownload = () => {
    window.location.href = '/pemesanan-export/export';
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Head title="Export Laporan" />
      <div className="w-full lg:w-1/4">
        <Sidebar />
      </div>

      <div className="w-full lg:w-3/4 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Pemesanan Export
          </h2>
          <div className="flex justify-end mb-4">
            <button onClick={handleDownload} className={DOWNLOAD_BUTTON_CLASSES}>
              <FiDownload className="mr-2" />
              Download Excel
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  {TABLE_HEADERS.map((header, index) => (
                    <th key={index} className="px-4 py-2 border" colSpan={header.colSpan}>
                      {header.label}
                    </th>
                  ))}
                </tr>
                <tr>
                  {COLUMN_HEADERS.map((col, index) => (
                    <th key={index} className="px-4 py-2 border">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {pemesanan?.map((item) => (
                <TableRow key={item.id} item={item} />
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PemesananExport;
