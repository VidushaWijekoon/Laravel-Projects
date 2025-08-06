<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DesignationsController extends Controller
{
    public function index()
    {
        return view("pages.admin.designations.index");
    }
}
