<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class BranchesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name'            => 'required|string|max:50',
            'email'           => 'required|email|max:50',
            'contactno'       => 'required|string|max:20',
            'emirates'        => 'required|string|max:15',
            'address'         => 'required|string|max:100',
            'citycode'        => 'required|string|max:25',
            'landlineno'      => 'nullable|string|max:20',
            'faxno'           => 'nullable|string|max:20',
            'postalcode'      => 'nullable|string|max:20',
            'labourfileno'    => 'nullable|string|max:20',
            'area_manager'    => 'nullable|string|max:50',
            'branch_manager'  => 'nullable|string|max:50',
            'asst_manager'    => 'nullable|string|max:50',
        ];
    }
}
