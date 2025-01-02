<?php

namespace App\Http\Controllers;

use App\Models\Pemesanan;
use App\Models\Kendaraan;
use App\Models\Driver;
use App\Models\Pihak;
use App\Exports\PemesananExport;
use Inertia\Inertia;
use Illuminate\Http\Request;


class PemesananController extends Controller
{
    public function index()
    {
        // Mengambil data kendaraan, driver, dan pihak
        $kendaraan = Kendaraan::all();
        $driver = Driver::all();
        $pihak = Pihak::all();

        return Inertia::render('PemesananForm', [
            'kendaraan' => $kendaraan,
            'driver' => $driver,
            'pihak' => $pihak,
            
        ]);
    }

    public function store(Request $request)
    {
        // Validasi data
        $validated = $request->validate([
            'kendaraanId' => 'required|exists:kendaraans,id',
            'driverId' => 'required|exists:drivers,id',
            'pihakId' => 'required|exists:pihaks,id',
            'tanggal_pemesanan' => 'required|date',  
        ], [
            'kendaraanId.required' => 'Kendaraan harus dipilih.',
            'driverId.required' => 'Driver harus dipilih.',
            'pihakId.required' => 'Pihak harus dipilih.',
            'tanggal_pemesanan.required' => 'Tanggal pemesanan wajib diisi.',
            'tanggal_pemesanan.date' => 'Format tanggal tidak valid.',
        ]);
        

        // Menyimpan data pemesanan
        Pemesanan::create([
            'kendaraan_id' => $validated['kendaraanId'],
            'driver_id' => $validated['driverId'],
            'pihak_id' => $validated['pihakId'],
            'tanggal_pemesanan' => $validated['tanggal_pemesanan'],
            
        ]);

        // Mengirim response menggunakan Inertia
        return redirect()->route('pemesanan.index')->with('success', 'Pemesanan berhasil dibuat!');
    }

    
    // Menambahkan fungsi untuk mengekspor data ke Excel
    public function export()
    {
        $pemesanan = Pemesanan::with(['kendaraan', 'driver', 'pihak'])->get();
    return \Maatwebsite\Excel\Facades\Excel::download(new PemesananExport($pemesanan), 'pemesanan.xlsx');
    }

    public function showExportPage()
{
    $pemesanan = Pemesanan::with(['kendaraan', 'driver', 'pihak'])->get();
        return Inertia::render('PemesananExport', [
            'pemesanan' => $pemesanan,
    ]);
}


public function persetujuanList()
{
    // Mengambil data pemesanan dengan status 'pending'
    $pemesanan = Pemesanan::with(['kendaraan', 'driver', 'pihak'])
        ->where('status', 'pending')
        ->get();
    // Mengirim data ke frontend menggunakan Inertia
    return Inertia::render('UserPage/PersetujuanList', [
        'pemesanan' => $pemesanan,
    ]);
}

public function update(Request $request, $id)
{
    $request->validate([
        'status' => 'required|string',
    ]);

    $pemesanan = Pemesanan::findOrFail($id);
    $pemesanan->status = $request->status;
    $pemesanan->save();

    return back()->with('success', 'Status berhasil diperbarui');
}

}
