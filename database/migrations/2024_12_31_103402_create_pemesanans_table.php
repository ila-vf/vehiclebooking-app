<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pemesanans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kendaraan_id')->constrained(); // Relasi ke tabel kendaraan
            $table->foreignId('driver_id')->constrained(); // Relasi ke tabel driver
            $table->foreignId('pihak_id')->constrained('pihaks'); 
            $table->date('tanggal_pemesanan');
            $table->enum('status', ['pending', 'approved_1', 'approved_2', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemesanans');
    }
};
