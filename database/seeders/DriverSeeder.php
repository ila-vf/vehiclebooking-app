<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Driver;

class DriverSeeder extends Seeder
{
    public function run()
    {
        Driver::create([
            'nama' => 'Budi Gunawan',
            'alamat' => 'Jl. Raya No. 1',
            'telepon' => '08123456789',
        ]);

        Driver::create([
            'nama' => 'Adi Supriadi',
            'alamat' => 'Jl. Raya No. 2',
            'telepon' => '08123456788',
        ]);
    }
}
