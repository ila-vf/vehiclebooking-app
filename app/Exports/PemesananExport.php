<?php

namespace App\Exports;

use App\Models\Pemesanan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PemesananExport implements FromCollection, WithHeadings
{
    protected $pemesanan;

    public function __construct($pemesanan)
    {
        $this->pemesanan = $pemesanan;
    }

    public function collection()
    {
        // Mengembalikan pemetaan data setiap pemesanan
        return $this->pemesanan->map(function ($item) {
            return [
                'ID Pemesanan' => $item->id,
                'Nama Kendaraan' => $item->kendaraan->nama ?? '',
                'Kategori Kendaraan' => $item->kendaraan->kategori ?? '',
                'Status Kendaraan' => $item->kendaraan->status ?? '',
                'Nama Driver' => $item->driver->nama ?? '',
                'Alamat Driver' => $item->driver->alamat ?? '',
                'Telepon Driver' => $item->driver->telepon ?? '',
                'Nama Pihak' => $item->pihak->nama ?? '',
                'Jabatan Pihak' => $item->pihak->jabatan ?? '',
                'Telepon Pihak' => $item->pihak->telepon ?? '',
                'Tanggal Pemesanan' => $item->tanggal_pemesanan,
                'Status Pemesanan' => $item->status ?? '',
            ];
        });
    }

    public function headings(): array
    {
        return [
            'ID Pemesanan',
            'Nama Kendaraan',
            'Kategori Kendaraan',
            'Status Kendaraan',
            'Nama Driver',
            'Alamat Driver',
            'Telepon Driver',
            'Nama Pihak',
            'Jabatan Pihak',
            'Telepon Pihak',
            'Tanggal Pemesanan',
            'Status Pemesanan',
        ];
    }
}
