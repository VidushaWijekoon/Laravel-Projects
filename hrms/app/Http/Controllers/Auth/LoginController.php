<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\AuthRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function index()
    {
        return view('auth.login');
    }

    public function login_check(AuthRequest $request)
    {
        dd($request);
        $credentials = [
            'EmailAddress' => $request->email,
            'password'     => $request->password,
        ];

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            session([
                'role'  => Auth::user()->Role,
                'email' => Auth::user()->EmailAddress,
            ]);

            switch (Auth::user()->Role) {
                case 'SuperAdmin':
                    return redirect()->route('super-admin-dashboard');

                case 'Admin':
                    return redirect()->route('admin.dashboard');

                default:
                    return redirect()->route('home');
            }
        }


        return back()->withErrors([
            'email' => 'Invalid credentials.',
        ]);
    }

    public function forget_password()
    {
        return view('auth.forget-password');
    }

    public function check_forget_password()
    {
        dd($_POST);
    }
}
