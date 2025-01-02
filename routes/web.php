<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\KendaraanController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\PihakController;
use App\Http\Controllers\PemesananController;


// Menampilkan halaman login hanya jika pengguna belum login
Route::get('/', function () {
    if (auth()->check()) {
        // Jika sudah login, alihkan ke dashboard sesuai dengan perannya
        $user = auth()->user();
        if ($user->role === 'admin') {
            return redirect()->route('dashboard.admin');
        } else {
            return redirect()->route('dashboard.user');
        }
    }
    
    return Inertia::render('Auth/Login');
})->name('login');

// Menangani proses login (menggunakan POST)
Route::post('/', [AuthenticatedSessionController::class, 'store'])->name('login.store');

// Dashboard: hanya bisa diakses jika pengguna sudah login
Route::get('/dashboard', function () {
    $user = auth()->user();

    // Redirect berdasarkan peran pengguna
    if ($user->role === 'admin') {
        return redirect()->route('dashboard.admin'); // Mengarahkan ke dashboard admin
    } else {
        return redirect()->route('dashboard.user'); // Mengarahkan ke dashboard user
    }
})->middleware(['auth', 'verified'])->name('dashboard');

// Admin dashboard
Route::get('/dashboard/admin', function () {
    return Inertia::render('AdminDashboard');
})->middleware('auth')->name('dashboard.admin');

// User dashboard
Route::get('/dashboard/user', function () {
    return Inertia::render('UserDashboard', [
        'user' => auth()->user(), //objek user
    ]);
})->middleware('auth')->name('dashboard.user');

// Rute profile untuk pengguna yang sudah login
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/pemesanan-form', function () {
    $user = Auth::user();

    // Memeriksa apakah pengguna sudah login dan memiliki peran 'admin'
    if (!$user || $user->role !== 'admin') {
        abort(403, 'Unauthorized'); // Menampilkan halaman 403 jika tidak memiliki akses
    }

    // Jika pengguna memiliki peran 'admin', arahkan ke metode index pada PemesananController
    return app(PemesananController::class)->index();
})->name('pemesanan.index');

Route::get('/pemesanan-export', [PemesananController::class, 'showExportPage'])->name('pemesanan.export.page');

Route::get('/pemesanan-export/export', [PemesananController::class, 'export'])->name('pemesanan.export');

Route::post('/pemesanans', [PemesananController::class, 'store'])->name('pemesanan.store');

Route::get('/persetujuan-list', function () {
    $user = Auth::user();
    // Memeriksa apakah pengguna memiliki role 'user'
    if (!$user || $user->role !== 'user') {
        abort(403, 'Unauthorized'); // Mneampilkan halaman 403 jika tidak memiliki akses
    }

    // Mengirim data ke komponen Inertia
    return Inertia::render('PersetujuanList', [
        'pemesanan' => \App\Models\Pemesanan::with(['kendaraan', 'driver', 'pihak'])->get(),
    ]);
})->name('persetujuan.list');

Route::put('/pemesanan/{id}', [PemesananController::class, 'update'])->name('pemesanan.update');

Route::get('/kendaraan', [PemesananController::class, 'getKendaraan']);
Route::get('/driver', [PemesananController::class, 'getDriver']);
Route::get('/pihak', [PemesananController::class, 'getPihak']);


Route::get('/pemesanan/persetujuan', [PemesananController::class, 'persetujuanList']);

// Rute untuk logout
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
