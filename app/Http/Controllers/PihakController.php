<?php

namespace App\Http\Controllers;

use App\Models\Pihak;
use Illuminate\Http\Request;

class PihakController extends Controller
{
    public function index()
    {
        // Mengambil semua data pihak yang menyetujui
        return response()->json(Pihak::all());
    }
}
