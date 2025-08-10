<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- ===============================================-->
    <!-- Document Title-->
    <!-- ===============================================-->
    <title>{{ config('app.name', 'Human Resources Management System (HRMS)') }}</title>

    <meta name="theme-color" content="#ffffff" />

    <!-- ===============================================-->
    <!--    Favicons-->
    <!-- ===============================================-->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/img/falcon.png') }}" />

    <!-- ===============================================-->
    <!-- Stylesheets-->
    <!-- ===============================================-->
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    @include('libraries.dashboard.styles')
</head>

<body>
    <main class="main" id="top">
        @yield('content')
    </main>
</body>

</html>
