<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('admin')->insert([
            [
                'EmployeeId'    => '0001',
                'Role'          => 'SuperAdmin',
                'EmailAddress'  => 'vidusha.wijekoon11@gmail.com',
                'Password'      => Hash::make('SuperAdmin@123'), 
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'EmployeeId'    => '0002',
                'Role'          => 'Admin',
                'EmailAddress'  => 'admin@gccexchange.com',
                'Password'      => Hash::make('Admin@123'),
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
        ]);
    }
}
