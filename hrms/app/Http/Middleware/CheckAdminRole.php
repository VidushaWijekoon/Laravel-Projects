<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;

class CheckAdminRole
{
    public function handle($request, Closure $next, ...$roles)
    {
        $email = $request->session()->get('email');

        $email ?: abort(redirect()->route('login.page')->with('error', 'Access denied.'));

        $user = DB::table('admin')->where('EmailAddress', $email)->first();
        (!$user || !in_array($user->Role, $roles))
            ? abort(redirect()->route('login.page')->with('error', 'Access denied.'))
            : $request->merge(['admin_user' => $user]);

        return $next($request);
    }
}
