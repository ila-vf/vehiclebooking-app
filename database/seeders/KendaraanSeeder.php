<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kendaraan;

class KendaraanSeeder extends Seeder
{
    public function run()
    {
        Kendaraan::create([
            'nama' => 'Toyota Avanza',
            'kategori' => 'Perusahaan',
            'status' => 'Tersedia',
        ]);

        Kendaraan::create([
            'nama' => 'Honda CRV',
            'kategori' => 'Sewa',
            'status' => 'Tersedia',
        ]);
    }
}
