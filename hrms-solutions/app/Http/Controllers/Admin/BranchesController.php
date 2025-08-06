<?php

namespace App\Http\Controllers\Admin;

use DB;
use Exception;
use Carbon\Carbon;
use App\Models\Admin\Branch;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\admin\BranchesRequest;

class BranchesController extends Controller
{
    public function index()
    {
        $branches = Branch::all();

        $page_data['title'] = "Branches";

        return view("pages.admin.branches.index", $page_data);
    }

    public function store(BranchesRequest $request)
    {
        $validated = $request->validated();

        $post_data = [
            'BranchName'                => $validated['name'],
            'BranchEmailAddress'        => $validated['email'],
            'ContactNo'                 => $validated['contactno'],
            'LandlineNo'                => $validated['landlineno'] ?? "",
            'FaxNo'                     => $validated['faxno'] ?? "",
            'City'                      => $validated['emirates'],
            'BranchAddress'             => $validated['address'],
            'BranchCityCode'            => $validated['citycode'],
            'BranchPostalCode'          => $validated['postalcode'] ?? "",
            'BranchLabourFileno'        => $validated['labourfileno'] ?? "",
            'BranchAreaManager'         => $validated['area_manager'] ?? "",
            'BranchManager'             => $validated['branch_manager'] ?? "",
            'BranchAssistantManager'    => $validated['asst_manager'] ?? "",
            'CreatedBy'                 => Auth::id() ?? 1,
            'BranchStatus'              => 'Active',
            'CreatedAt'                 => Carbon::now(),
        ];

        try {
            $queries = Branch::create($post_data);
            dd($queries);

            // return redirect()->route('branches.index')->with('success', 'Branch created successfully.');
        } catch (Exception $e) {
            Log::error('Branch creation failed: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Something went wrong. Please try again.');
        }
    }
}
