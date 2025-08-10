<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'EmployeeId' => '0001',
                'Role'       => 'SuperAdmin',
                'Password'   => Hash::make('SuperAdmin@123'), 
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'EmployeeId' => '0002',
                'Role'       => 'Admin',
                'Password'   => Hash::make('Admin@123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'EmployeeId' => '0003',
                'Role'       => 'Manager',
                'Password'   => Hash::make('Manager@123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'EmployeeId' => '0004',
                'Role'       => 'Employee',
                'Password'   => Hash::make('Employee@123'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
