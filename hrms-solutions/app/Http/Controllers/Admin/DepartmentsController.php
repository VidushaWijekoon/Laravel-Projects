<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DepartmentsController extends Controller
{
    public function index()
    {
        return view("pages.admin.departments.index");
    }
}
