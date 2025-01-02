import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { FiDownload } from 'react-icons/fi';
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

// Fungsi untuk mengunduh laporan dalam format Excel
const handleDownload = () => {
  window.location.href = '/pemesanan-export/export';
};

// Kelas untuk tombol unduh laporan
const DOWNLOAD_BUTTON_CLASSES =
  "px-6 py-2 bg-indigo-700 text-white font-medium text-sm rounded-lg shadow hover:bg-indigo-400 focus:ring focus:ring-indigo-300 flex items-center";

const PersetujuanList = ({ pemesanan }) => {
  const [editedStatus, setEditedStatus] = useState({});
   // Fungsi untuk menangani perubahan status
  const handleStatusChange = (id, newStatus) => {
    setEditedStatus((prevStatus) => ({
      ...prevStatus,
      [id]: newStatus,
    }));
  };

  
  const handleSaveStatus = (id, status) => {
    axios.put(`/pemesanan/${id}`, { status })
        .then(response => {
            console.log('Status berhasil diperbarui:', response.data);
        })
        .catch(error => {
            console.error('Error updating status:', error);
        });
};


  const handleDownload = () => {
    window.location.href = '/pemesanan-export/export';
  };

  // Mendefinisikan komponen untuk baris data yang menampilkan kendaraan, driver, pihak, dan pemesanan
const VehicleDetails = ({ item }) => (
  <>
    <td className="px-4 py-2 border">{item.kendaraan?.nama}</td>
    <td className="px-4 py-2 border">{item.kendaraan?.kategori}</td>
    <td className="px-4 py-2 border">{item.kendaraan?.status}</td>
  </>
);

const DriverDetails = ({ item }) => (
  <>
    <td className="px-4 py-2 border">{item.driver?.nama}</td>
    <td className="px-4 py-2 border">{item.driver?.alamat}</td>
    <td className="px-4 py-2 border">{item.driver?.telepon}</td>
  </>
);

const PartyDetails = ({ item }) => (
  <>
    <td className="px-4 py-2 border">{item.pihak?.nama}</td>
    <td className="px-4 py-2 border">{item.pihak?.jabatan}</td>
    <td className="px-4 py-2 border">{item.pihak?.telepon}</td>
  </>
);
  const OrderDetails = ({ item }) => (
    <>
      <td className="px-4 py-2 border">{item.tanggal_pemesanan}</td>
      <td className="px-4 py-2 border">
        <select
          value={editedStatus[item.id] || item.status}
          onChange={(e) => handleStatusChange(item.id, e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="pending">Pending</option>
          <option value="approved_1">Approved 1</option>
          <option value="approved_2">Approved 2</option>
          <option value="rejected">Rejected</option>
        </select>
        <button
          onClick={() => handleSaveStatus(item.id)}
          className={`ml-2 text-sm ${
            editedStatus[item.id] ? 'text-blue-600 hover:text-blue-800' : 'text-gray-500'
          }`}
        >
          Save
        </button>
      </td>
    </>
  );


  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Head title="User Dashboard" />
      <div className="w-full lg:w-1/4">
        <Sidebar />
      </div>

      <div className="w-full lg:w-3/4 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Persetujuan List
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
                  <tr key={item.id}>
                    <VehicleDetails item={item} />
                    <DriverDetails item={item} />
                    <PartyDetails item={item} />
                    <OrderDetails item={item} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersetujuanList;
