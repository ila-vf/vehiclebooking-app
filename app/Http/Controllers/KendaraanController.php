<?php

namespace App\Http\Controllers;

use App\Models\Kendaraan;
use Illuminate\Http\Request;

class KendaraanController extends Controller
{
    public function index()
    {
        // Mengambil semua data kendaraan dari database
        return response()->json(Kendaraan::all());
    }
}
