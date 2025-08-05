<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SuperAdmin\DashboardController;

Route::get('/superadmin/dashboard', [DashboardController::class, 'index'])->name('super-admin-dashboard');
Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('admin-dashboard');
Route::get('/manager/dashboard', [DashboardController::class, 'index'])->name('manager-dashboard');
Route::get('/employee/dashboard', [DashboardController::class, 'index'])->name('employee-dashboard');
