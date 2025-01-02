<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pihak extends Model
{
    use HasFactory;
    // kolom yang dapat diisi 
    protected $fillable = ['nama', 'jabatan', 'telepon'];
}
