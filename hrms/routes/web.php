<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\BranchesController;
use App\Http\Controllers\Admin\EmployeesController;
use App\Http\Controllers\Admin\DepartmentsController;
use App\Http\Controllers\Admin\DesignationsController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Manager\DashboardController as ManagerDashboard;
use App\Http\Controllers\Employee\DashboardController as EmployeeDashboard;
use App\Http\Controllers\SuperAdmin\DashboardController as SuperAdminDashboard;

Route::get('/', [LoginController::class, 'index'])->name('login.page');
Route::post('/login', [LoginController::class, 'login_check'])->name('login.check');

Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/forget-password', [LoginController::class, 'forget_password'])->name('forget_password');
Route::post('/check-forget-password', [LoginController::class, 'check_forget_password'])->name('forget_password.check');

Route::middleware(['check.role:SuperAdmin'])->group(function () {
    Route::get('/superadmin/dashboard', [SuperAdminDashboard::class, 'index'])
        ->name('super-admin-dashboard');
});

Route::middleware(['check.role:Admin'])->prefix('/admin')->group(function () {
    Route::get('/dashboard', [AdminDashboard::class, 'index'])->name('admin.dashboard');

    Route::prefix('/branches')->group(function () {
        Route::get('/', [BranchesController::class, 'index'])->name('admin.branches');
        Route::post('/store', [BranchesController::class, 'store'])->name('admin.branches.store');
    });

    Route::get('/departments', [DepartmentsController::class, 'index'])->name('admin.departments');
    Route::get('/designations', [DesignationsController::class, 'index'])->name('admin.designations');
    Route::get('/employees', [EmployeesController::class, 'index'])->name('admin.employees');
});

Route::middleware(['check.role:Manager'])->group(function () {
    Route::get('/manager/dashboard', [ManagerDashboard::class, 'index'])->name('manager-dashboard');
});

Route::middleware(['check.role:Employee'])->group(function () {
    Route::get('/employee/dashboard', [EmployeeDashboard::class, 'index'])->name('employee-dashboard');
});
