<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    use HasFactory;

    // Kolom yang dapat diisi
    protected $fillable = [
        'kendaraan_id',
        'driver_id',
        'pihak_id',  
        'tanggal_pemesanan',
        'status',
    ];

    // Relasi dengan tabel Kendaraan
    public function kendaraan()
    {
        return $this->belongsTo(Kendaraan::class);
    }

    // Relasi dengan tabel Driver
    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    // Relasi dengan tabel Pihak
    public function pihak()
    {
        return $this->belongsTo(Pihak::class);
    }
}


