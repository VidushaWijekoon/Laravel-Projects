<?php

namespace App\Http\Controllers\Admin;

use App\Models\Admin\Branch;
use App\Http\Controllers\Controller;

class BranchesController extends Controller
{
    public function index()
    {
        $branches = Branch::all();

        $page_data['title'] = "Branches";

        return view("pages.admin.branches.index", $page_data);
    }
}
