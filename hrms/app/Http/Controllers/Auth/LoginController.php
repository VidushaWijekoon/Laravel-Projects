<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function __construct()
    {
        // No need for default auth middleware since we handle session manually
    }

    public function index(Request $request)
    {
        if ($request->session()->get('is_loggedin')) {
            $role = $request->session()->get('role');

            switch ($role) {
                case 'SuperAdmin':
                    return redirect()->route('super-admin-dashboard');
                case 'Admin':
                    return redirect()->route('admin.dashboard');
                case 'Manager':
                    return redirect()->route('manager-dashboard');
                case 'Employee':
                    return redirect()->route('employee-dashboard');
            }
        }

        return view('auth.login');
    }

    public function login_check(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $credentials = [
            'EmailAddress' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::guard('admin')->attempt($credentials)) {
            $admin = Auth::guard('admin')->user();
            $role = $admin->Role;

            $request->session()->regenerate();

            session([
                'email' => $admin->EmailAddress,
                'role' => $role,
                'loggedin_id' => $admin->id,
                'is_loggedin' => true,
                'username' => $role,
            ]);

            switch ($role) {
                case 'SuperAdmin':
                    return redirect()->route('super-admin-dashboard');
                case 'Admin':
                    return redirect()->route('admin.dashboard');
                case 'Manager':
                    return redirect()->route('manager-dashboard');
                case 'Employee':
                    return redirect()->route('employee-dashboard');
                default:
                    return redirect()->route('login.page');
            }
        }

        return redirect()->route('login.page')->with('error', 'Invalid Username or Password');
    }

    public function forget_password()
    {
        return view('auth.forget-password');
    }

    public function check_forget_password()
    {
        dd(request()->all());
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login.page')->with('success', 'You have been logged out successfully.');
    }
}
