import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrasi komponen Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = () => {
  const [data, setData] = useState(Array(12).fill(0)); // Data awal (12 bulan)
  const [selectedMonth, setSelectedMonth] = useState(null); // Untuk menyimpan bulan yang dipilih

  const handleInputChange = (value) => {
    if (selectedMonth !== null) {
      const updatedData = [...data];
      updatedData[selectedMonth] = parseInt(value) || 0; // Memperbarui data bulan yang dipilih
      setData(updatedData);
    }
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(Number(e.target.value)); // Menyimpan bulan yang dipilih
  };

  // Data untuk Chart.js
  const chartData = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ],
    datasets: [
      {
        label: 'Pemakaian Kendaraan',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Grafik Pemakaian Kendaraan Per Bulan',
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 max-w-screen-xl mx-auto items-center">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">Grafik Pemakaian Kendaraan</h1>

      {/* Dropdown untuk memilih bulan */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-xs sm:text-sm font-medium mb-2">Pilih Bulan</label>
        <select
          onChange={handleMonthChange}
          value={selectedMonth !== null ? selectedMonth : ""}
          className="w-full border rounded p-2 text-xs sm:text-sm"
        >
          <option value="">Pilih Bulan</option>
          {chartData.labels.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Input untuk jumlah pemakaian */}
      {selectedMonth !== null && (
        <div className="mb-4 sm:mb-6">
          <label className="block text-xs sm:text-sm font-medium">Jumlah Pemakaian Kendaraan</label>
          <input
            type="number"
            value={data[selectedMonth]} // Menampilkan data bulan yang dipilih
            onChange={(e) => handleInputChange(e.target.value)} // Memperbarui data saat input berubah
            className="w-full mt-1 text-center border rounded p-2 text-xs sm:text-sm"
          />
        </div>
      )}

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]"> {/* Membuat chart responsif dengan tinggi dinamis */}
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
