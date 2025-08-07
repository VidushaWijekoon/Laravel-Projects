<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin\Branch;

class BranchSeeder extends Seeder
{
    public function run(): void
    {
        Branch::factory()->count(15)->create();
    }
}
