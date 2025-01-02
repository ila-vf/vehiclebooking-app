<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Memanggil seeder untuk setiap tabel
    $this->call([
        UserSeeder::class,
        KendaraanSeeder::class,
        DriverSeeder::class,
        PihakSeeder::class,
    ]);
    }
}
