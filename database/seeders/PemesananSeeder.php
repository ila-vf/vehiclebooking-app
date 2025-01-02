<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pemesanan;

class PemesananSeeder extends Seeder
{
    public function run()
    {
        Pemesanan::create([
            'kendaraan_id' => 1,
            'tanggal_pemesanan' => now(),
            'status' => 'pending'
        ]);
    }
}
