<h2>Langkah-langkah Menjalankan Project</h2>

<ol>
    <li><strong>Clone Repository dari GitHub</strong><br>
        Lakukan cloning project dari GitHub:<br>
        <pre><code>git clone https://github.com/ila-vf/vehiclebooking-app.git</code></pre>
    </li>
    <li><strong>Masuk ke Folder Project</strong><br>
        Setelah project ter-clone, masuk ke folder project dengan perintah:<br>
        <pre><code>cd vehiclebooking-app</code></pre>
    </li>
    <li><strong>Install Composer</strong><br>
        Pastikan Composer sudah terinstall di komputer. Install dependensi PHP dengan perintah:<br>
        <pre><code>composer install</code></pre>
    </li>
    <li><strong>Install NPM Dependencies</strong><br>
        Pastikan Node.js dan npm sudah terinstall di komputer. Install dependensi JavaScript yang diperlukan dengan perintah:<br>
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Buat File .env</strong><br>
        Salin file .env.example menjadi <code>.env</code> dengan perintah:<br>
        <pre><code>cp .env.example .env</code></pre>
        Buka file <code>.env</code> dan sesuaikan dengan konfigurasi database yang Anda gunakan. Pastikan konfigurasi untuk database sesuai, seperti:<br>
        <pre><code>DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=</code></pre>
    </li>
    <li><strong>Buat Application Key</strong><br>
        Laravel membutuhkan application key untuk enkripsi. Buat key dengan perintah:<br>
        <pre><code>php artisan key:generate</code></pre>
    </li>
    <li><strong>Jalankan Server Laravel</strong><br>
        Jalankan server backend dengan perintah:<br>
        <pre><code>php artisan serve</code></pre>
        Aplikasi akan berjalan di <a href="http://127.0.0.1:8000" target="_blank">http://127.0.0.1:8000</a>.
    </li>
    <li><strong>Jalankan Server Frontend dengan Vite</strong><br>
        Jalankan server frontend dengan perintah:<br>
        <pre><code>npm run dev</code></pre>
        Frontend akan berjalan di <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.
    </li>
    <li><strong>Migrasi Database</strong><br>
        Jalankan migrasi untuk membuat struktur tabel di database dengan perintah:<br>
        <pre><code>php artisan migrate</code></pre>
    </li>
    <li><strong>Jalankan Seeder untuk Mengisi Data Awal</strong><br>
        Jika Anda ingin mengisi database dengan data awal, jalankan perintah seeder:<br>
        <pre><code>php artisan db:seed</code></pre>
    </li>
    <li><strong>Login dengan User atau Admin</strong><br>
        Login ke aplikasi dengan akun berikut:<br>
        <strong>User:</strong> user@gmail.com dengan password <code>user1234</code><br>
        <strong>Admin:</strong> admin@gmail.com dengan password <code>admin1234</code>
    </li>
</ol>


<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
#   v e h i c l e b o o k i n g - a p p 
 
 
