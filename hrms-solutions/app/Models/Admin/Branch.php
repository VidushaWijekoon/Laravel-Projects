<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Branch extends Model
{
    use HasFactory;

    protected $table = 'hr_branches';

    protected $fillable = [
        'BranchName',
        'BranchEmailAddress',
        'ContactNo',
        'LandlineNo',
        'FaxNo',
        'City',
        'BranchAddress',
        'BranchCityCode',
        'BranchPostalCode',
        'BranchLabourFileno',
        'BranchAreaManager',
        'BranchManager',
        'BranchAssistantManager',
        'CreatedBy',
        'BranchStatus',
        'CreatedAt',
    ];

    public $timestamps = false;
}
