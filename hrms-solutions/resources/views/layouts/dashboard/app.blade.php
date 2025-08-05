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

    <script src="{{ asset('assets/js/config.js') }}"></script>
    <script src="{{ asset('assets/vendors/simplebar/simplebar.min.js') }}"></script>

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
        <div class="container" data-layout="container">
            <script>
                var isFluid = JSON.parse(localStorage.getItem("isFluid"));
                if (isFluid) {
                    var container = document.querySelector("[data-layout]");
                    container.classList.remove("container");
                    container.classList.add("container-fluid");
                }
            </script>
            @include('components.dashboard.aside')
            <div class="content">
                @include('components.dashboard.header')
                @yield('content')
                @include('components.dashboard.footer')
            </div>
        </div>
    </main>
    @include('components.dashboard.settings')
    @include('libraries.dashboard.scripts')
</body>

</html>
