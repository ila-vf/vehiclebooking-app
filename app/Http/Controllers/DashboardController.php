<?php
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Mendapatkan pengguna yang sedang login
        $user = auth()->user();

        // Mengirim data role ke frontend
        return Inertia::render('Dashboard', [
            'user' => $user,
        ]);
    }
}
