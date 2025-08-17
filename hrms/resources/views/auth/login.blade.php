@extends('layouts.auth.app')

@section('content')
    <div class="container-fluid">
        <div class="row min-vh-100 flex-center g-0">
            <div class="col-lg-8 col-xxl-5 py-3 position-relative">
                <img class="bg-auth-circle-shape" src="{{ asset('assets/img/icons/spot-illustrations/bg-shape.png') }}"
                    alt="" width="250" />
                <img class="bg-auth-circle-shape-2" src="{{ asset('assets/img/icons/spot-illustrations/shape-1.png') }}"
                    alt="" width="150" />
                <div class="card overflow-hidden z-1">
                    <div class="card-body p-0">
                        <div class="row g-0 h-100">
                            <div class="col-md-5 text-center bg-card-gradient">
                                <div class="position-relative p-4 pt-md-5 pb-md-7" data-bs-theme="light">
                                    <div class="bg-holder bg-auth-card-shape"
                                        style="background-image:url({{ asset('assets/img/icons/spot-illustrations/half-circle.png') }});">
                                    </div>
                                    <div class="z-1 position-relative">
                                        <p class="opacity-75 text-white">
                                            {{ __('With the power of Falcon, you can now focus
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        only on functionaries for your digital products, while leaving the UI design
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        on us!') }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-3 mb-4 mt-md-4 mb-md-5" data-bs-theme="light">
                                    <p class="mb-0 mt-4 mt-md-5 fs-10 fw-semi-bold text-white opacity-75">
                                        {{ __('Read our') }}
                                        <a class="text-decoration-underline text-white"
                                            href="#!">{{ __('terms') }}</a> {{ __('and') }}
                                        <a class="text-decoration-underline text-white"
                                            href="#!">{{ __('conditions') }} </a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-7 d-flex flex-center">
                                <div class="p-4 p-md-5 flex-grow-1">
                                    <div class="row flex-between-center">
                                        <div class="col-auto">
                                            <h3>{{ __('Account Login') }}</h3>
                                        </div>
                                    </div>
                                    <form method="POST" action="{{ route('login.check') }}" class="login_validate">
                                        @csrf
                                        <div class="mb-3">
                                            <label class="form-label" for="card-email">{{ __('Email Address') }}</label>
                                            <input class="form-control email" id="card-email" type="email"
                                                name="email" />
                                            @error('email')
                                                <div class="text-danger mt-2">{{ $message }}</div>
                                            @enderror
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="card-password">{{ __('Password') }}</label>
                                            </div>
                                            <input class="form-control password" id="card-password" type="password"
                                                name="password" />
                                            @error('password')
                                                <div class="text-danger mt-2">{{ $message }}</div>
                                            @enderror
                                        </div>
                                        <div class="row flex-between-center">
                                            <div class="col-auto">
                                                <div class="form-check mb-0">
                                                    <input class="form-check-input" type="checkbox" id="card-checkbox"
                                                        checked="checked" />
                                                    <label class="form-check-label mb-0"
                                                        for="card-checkbox">{{ __('Remember Me') }}</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <a class="fs-10"
                                                    href="{{ route('forget_password') }}">{{ __('Forgot Password?') }}</a>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <button class="btn btn-primary d-block w-100 mt-3" type="submit">
                                                {{ __('Log in') }}
                                            </button>
                                        </div>

                                        @if (session('error'))
                                            <div class="alert alert-danger">
                                                {{ session('error') }}
                                            </div>
                                        @endif

                                        @if ($errors->any())
                                            <div class="mb-3">
                                                <div class="alert alert-danger">
                                                    <ul class="mb-0">
                                                        @foreach ($errors->all() as $error)
                                                            <li>{{ $error }}</li>
                                                        @endforeach
                                                    </ul>
                                                </div>
                                            </div>
                                        @endif

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        $(document).ready(function() {
            $(".login_validate").validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6
                    }
                },
                messages: {
                    email: "Please enter a registered email address",
                    password: "Please enter password",
                },
                errorClass: "text-danger mt-2",
                errorElement: "div",
                highlight: function(element) {
                    $(element).addClass("is-invalid");
                },
                unhighlight: function(element) {
                    $(element).removeClass("is-invalid");
                },
                submitHandler: function(form) {
                    var toastEl = document.getElementById('successToast');
                    if (toastEl) {
                        var toast = new bootstrap.Toast(toastEl, {
                            delay: 3000
                        });
                        toast.show();
                    }
                    form.submit();
                }
            });
        });
    </script>
@endpush
