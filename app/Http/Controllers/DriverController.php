<?php

namespace App\Http\Controllers;

use App\Models\Driver;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function index()
    {
        // Mengambil semua data driver dari database
        return response()->json(Driver::all());
    }
}

