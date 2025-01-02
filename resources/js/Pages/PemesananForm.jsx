import React, { useState } from 'react';
import Sidebar from './DashboardPage/Sidebar';
import { Head } from '@inertiajs/react'; 
import { Inertia } from '@inertiajs/inertia';

const styles = {
  input: "w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300",
  label: "block text-sm font-medium text-gray-700 mb-2",
  button: "px-6 py-2 bg-indigo-600 text-white font-medium text-sm rounded-lg shadow hover:bg-indigo-700 focus:ring focus:ring-indigo-300",
  container: "flex flex-col min-h-screen sm:flex-row sm:space-x-4 p-4 items-center",
  card: "bg-white p-6 shadow-lg rounded-lg w-full max-w-md",
  title: "text-2xl font-semibold text-gray-800 mb-4",
  form: "w-full",
  submitContainer: "flex justify-end"
};

// Konstanta untuk Dropdown
const Dropdown = ({ id, label, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
      >
        <option value="">Pilih {label}</option>
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nama}
          </option>
        ))}
      </select>
    </div>
  );
};

const PemesananForm = ({ kendaraan, driver, pihak }) => {
  const [formData, setFormData] = useState({
    kendaraanId: '',
    driverId: '',
    pihakId: '',
    tanggalPemesanan: '', 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData };
    Inertia.post('/pemesanans', data); // Send the form data to the backend
  };

  const handleExport = () => {
    window.location.href = '/pemesanan/export';
  };

  return (
    <div className={styles.container}>
      <Head title="Admin Dashboard" />

      {/* Sidebar */}
      <div className="w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-3/4 flex flex-col items-center p-12">
        <div className={styles.card}>
          <h2 className={styles.title}>Form Pemesanan</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Kendaraan Dropdown */}
            <Dropdown
              id="kendaraan"
              label="Kendaraan"
              value={formData.kendaraanId}
              onChange={(e) =>
                setFormData({ ...formData, kendaraanId: e.target.value })
              }
              options={kendaraan}
            />

            {/* Driver Dropdown */}
            <Dropdown
              id="driver"
              label="Driver"
              value={formData.driverId}
              onChange={(e) =>
                setFormData({ ...formData, driverId: e.target.value })
              }
              options={driver}
            />

            {/* Pihak Dropdown */}
            <Dropdown
              id="pihak"
              label="Pihak"
              value={formData.pihakId}
              onChange={(e) =>
                setFormData({ ...formData, pihakId: e.target.value })
              }
              options={pihak}
            />

            {/* Tanggal Pemesanan */}
            <div className="mb-4">
              <label htmlFor="tanggal_pemesanan" className={styles.label}>
                Tanggal Pemesanan
              </label>
              <input
                type="date"
                id="tanggal_pemesanan"
                value={formData.tanggal_pemesanan}
                onChange={(e) =>
                  setFormData({ ...formData, tanggal_pemesanan: e.target.value })
                }
                className={styles.input}
              />
            </div>

            {/* Submit Button */}
            <div className={styles.submitContainer}>
              <button type="submit" className={styles.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PemesananForm;
