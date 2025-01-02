<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kendaraan extends Model
{
    use HasFactory;

    // Kolom yang dapat diisi
    protected $fillable = ['nama', 'kategori', 'status'];

    
}
