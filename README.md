# TechTreeMVCWebApplication

TechTreeMVCWebApplication is a web-based application developed using the **ASP.NET Core Web App (Model-View-Controller)** template. This application uses **SQL Server** as its database management system.

## Technologies Used

- **ASP.NET Core MVC** (Model-View-Controller)
- **C#**
- **Entity Framework Core**
- **SQL Server**
- **Bootstrap** (UI Styling)

## Features

- CRUD (Create, Read, Update, Delete) for main entities
- Authentication and authorization using Identity
- Implementation of areas and partial views
- Database management with Entity Framework Core

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/jindanza/TechTreeMVCWebApplication.git
cd TechTreeMVCWebApplication
```

### 2. Configure Database

Ensure that SQL Server is installed and running, then update **appsettings.json** according to your database configuration:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER;Database=TechTreeDB;Trusted_Connection=True;MultipleActiveResultSets=true"
}
```

### 3. Apply Database Migrations

Run the following command to apply database migrations:

```bash
dotnet ef database update
```

### 4. Run the Application

Start the application using the following command:

```bash
dotnet run
```

Access the application through your browser at **http://localhost:44377** (or based on your configured port).

## Folder Structure

```
TechTreeMVCWebApplication/
│-- Areas/          # Folder for Areas
│-- Comparers/      # Folder for Comparers
│-- Controllers/    # Folder for Controllers
│-- Entities/       # Folder for Entities
│-- Extensions/     # Folder for Extensions
│-- Interfaces/     # Folder for Interfaces
│-- Models/         # Folder for Models
│-- Properties/     # Folder for Properties
│-- Views/          # Folder for Views
│-- Data/           # Folder for database configurations
│-- wwwroot/        # Folder for static assets (CSS, JS, etc.)
│-- appsettings.json # Application configuration
```

## Contribution

If you would like to contribute, please fork this repository and create a pull request.
