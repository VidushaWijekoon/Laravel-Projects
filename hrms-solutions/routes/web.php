<?php

use App\Http\Controllers\Admin\BranchesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController as AdminDashboard;
use App\Http\Controllers\Admin\DepartmentsController;
use App\Http\Controllers\Admin\DesignationsController;
use App\Http\Controllers\Admin\EmployeesController;
use App\Http\Controllers\SuperAdmin\DashboardController as SuperAdminDashboard;
use App\Http\Controllers\Employee\DashboardController as EmployeeDashboard;
use App\Http\Controllers\Manager\DashboardController as ManagerDashboard;

Route::get('/superadmin/dashboard', [SuperAdminDashboard::class, 'index'])->name('super-admin-dashboard');

Route::prefix('/admin')->group(function () {
    Route::get('/dashboard', [AdminDashboard::class, 'index'])->name('admin.dashboard.index');
    Route::get('/branches', [BranchesController::class, 'index'])->name('admin.branches');
    Route::get('/departments', [DepartmentsController::class, 'index'])->name('admin.departments');
    Route::get('/designations', [DesignationsController::class, 'index'])->name('admin.designations');
    Route::get('/employees', [EmployeesController::class, 'index'])->name('admin.employees');
});

Route::get('/manager/dashboard', [ManagerDashboard::class, 'index'])->name('manager-dashboard');
Route::get('/employee/dashboard', [EmployeeDashboard::class, 'index'])->name('employee-dashboard');
