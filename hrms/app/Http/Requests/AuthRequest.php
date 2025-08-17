<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    public function rules()
    {
        return [
            'EmailAddress'  => 'required|email|max:50',
            'Password'      => 'required|string|max:6',
        ];
    }
}
