<?php 

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;

class CheckAdminRole
{
    public function handle($request, Closure $next, ...$roles)
    {
        $email = $request->session()->get('email');

        if (!$email) {
            return redirect()->route('login.page')->with('error', 'Access denied.');
        }

        $user = DB::table('admin')->where('EmailAddress', $email)->first();

        if (!$user || !in_array($user->Role, $roles)) {
            return redirect()->route('login.page')->with('error', 'Access denied.');
        }

        $request->merge(['admin_user' => $user]);

        return $next($request);
    }
}
