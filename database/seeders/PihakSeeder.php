<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Pihak;

class PihakSeeder extends Seeder
{
    public function run()
    {
        Pihak::create([
            'nama' => 'Budi Santoso',
            'jabatan' => 'Manajer',
            'telepon' => '08123456789',
        ]);

        Pihak::create([
            'nama' => 'Siti Aisyah',
            'jabatan' => 'Kepala Divisi',
            'telepon' => '08123456788',
        ]);
    }
}
