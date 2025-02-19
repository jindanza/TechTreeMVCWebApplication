# TechTreeMVCWebApplication

TechTreeMVCWebApplication adalah aplikasi berbasis web yang dikembangkan menggunakan template **ASP.NET Core Web App (Model-View-Controller)**. Aplikasi ini menggunakan **SQL Server** sebagai sistem manajemen basis data.

## Teknologi yang Digunakan

- **ASP.NET Core MVC** (Model-View-Controller)
- **C#**
- **Entity Framework Core**
- **SQL Server**
- **Bootstrap** (UI Styling)

## Fitur

- CRUD (Create, Read, Update, Delete) untuk entitas utama
- Autentikasi dan otorisasi menggunakan Identity
- Implementasi area dan partial views
- Pengelolaan database dengan Entity Framework Core

## Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/TechTreeMVCWebApplication.git
cd TechTreeMVCWebApplication
```

### 2. Konfigurasi Database

Pastikan SQL Server telah terinstall dan berjalan, lalu perbarui **appsettings.json** sesuai konfigurasi database Anda:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER;Database=TechTreeDB;Trusted_Connection=True;MultipleActiveResultSets=true"
}
```

### 3. Migrasi Database

Jalankan perintah berikut untuk melakukan migrasi database:

```bash
dotnet ef database update
```

### 4. Menjalankan Aplikasi

Jalankan aplikasi dengan perintah berikut:

```bash
dotnet run
```

Akses aplikasi melalui browser di **http://localhost:44377** (atau sesuai konfigurasi port Anda).

## Struktur Folder

```
TechTreeMVCWebApplication/
│-- Areas/          # Folder untuk Area
│-- Comparers/      # Folder untuk Comparer
│-- Controllers/    # Folder untuk Controller
│-- Entities/       # Folder untuk Entities
│-- Extensions/     # Folder untuk Extension
│-- Interfaces/     # Folder untuk Interface
│-- Models/         # Folder untuk Model
│-- Properties/     # Folder untuk Property
│-- Views/          # Folder untuk View
│-- Data/           # Folder untuk konfigurasi database
│-- wwwroot/        # Folder untuk aset statis (CSS, JS, dll.)
│-- appsettings.json # Konfigurasi aplikasi
```

## Kontribusi

Jika ingin berkontribusi, silakan fork repository ini dan buat pull request.
