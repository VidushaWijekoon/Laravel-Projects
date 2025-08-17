@extends('layouts.dashboard.app')

@section('content')
    @include('components.breadcrumbs.breadcrumbs', ['page_title' => $title])
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
    @endif

    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <div class="row g-3 mt-2">
        <div class="col-xxl-12 col-xl-12">
            <div class="card overflow-hidden">
                <div class="card-header p-0 scrollbar-overlay border-bottom" data-simplebar="init">
                    <div class="simplebar-wrapper" style="margin: 0px;">
                        <div class="simplebar-height-auto-observer-wrapper">
                            <div class="simplebar-height-auto-observer"></div>
                        </div>
                        <div class="simplebar-mask">
                            <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                    aria-label="scrollable content" style="height: auto; overflow: hidden;">
                                    <div class="simplebar-content" style="padding: 0px;">
                                        <ul class="nav nav-tabs border-0 tab-contact-details flex-nowrap"
                                            id="contact-details-tab" role="tablist">
                                            <li class="nav-item text-nowrap" role="presentation">
                                                <a class="nav-link mb-0 d-flex align-items-center gap-2 py-3 px-x1 active"
                                                    id="contact-branches-tab" data-bs-toggle="tab" href="#branches"
                                                    role="tab" aria-controls="branches" aria-selected="true">
                                                    <span class="fas fa-stream icon"></span>
                                                    <h6 class="mb-0 text-600">Branches</h6>
                                                </a>
                                            </li>
                                            <li class="nav-item text-nowrap" role="presentation">
                                                <a class="nav-link mb-0 d-flex align-items-center gap-2 py-3 px-x1"
                                                    id="contact-create-new-branch-tab" data-bs-toggle="tab"
                                                    href="#create-new-branch" role="tab"
                                                    aria-controls="create-new-branch" aria-selected="false" tabindex="-1">
                                                    <span class="fas fa-ticket-alt"></span>
                                                    <h6 class="mb-0 text-600">Create New Branch</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="simplebar-placeholder" style="width: 1173px; height: 50px;"></div>
                    </div>
                    <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                        <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                    </div>
                    <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                        <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                    </div>
                </div>

                <div class="tab-content">

                    <div class="card-body tab-pane active" id="branches" role="tabpanel"
                        aria-labelledby="contact-branches-tab">
                        <div class="table-responsive scrollbar">
                            <table class="table table-hover table-bordered table-striped overflow-hidden" id="branch_table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Branch Name</th>
                                        <th>Email Address</th>
                                        <th>Contact No</th>
                                        <th>Landline No</th>
                                        <th>Labour No</th>
                                        <th>Manager</th>
                                        <th>Asst Manager</th>
                                        <th>Area Manager</th>
                                        <th>Emp Count</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="card-body tab-pane p-3" id="create-new-branch" role="tabpanel"
                        aria-labelledby="contact-create-new-branch-tab">
                        <form action="{{ route('admin.branches.store') }}" method="POST" class="create_branch_validate">
                            @csrf
                            <div class="row">
                                <!-- Left Column -->
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-3">
                                            Branch Name
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="name" id="name"
                                                required />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">
                                            Email Address
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="email" class="form-control" name="email" id="email"
                                                required />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">
                                            Contact No
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="contactno" required />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">Landline No</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="landlineno" />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">Fax No</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="faxno" />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">
                                            Emirates
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <select id="emirates" name="emirates" class="form-control" required>
                                                <option value="">Select Emirate</option>
                                                <option value="Abu Dhabi">Abu Dhabi</option>
                                                <option value="Ajman">Ajman</option>
                                                <option value="Dubai">Dubai</option>
                                                <option value="Fujairah">Fujairah</option>
                                                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                                <option value="Sharjah">Sharjah</option>
                                                <option value="Umm Al Quwain">Umm Al Quwain</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">
                                            Address
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control" name="address" required></textarea>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Column -->
                                <div class="col-md-6">
                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">
                                            City Code
                                            <span class="text-danger">*</span>
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="citycode" required />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">Postal Code</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="postalcode" />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">
                                            Labour File No
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" name="labourfileno" />
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">Area Manager</label>
                                        <div class="col-sm-9">
                                            <select name="area_manager" class="form-control">
                                                <option value="">--Select Area Manager--</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">Manager Name</label>
                                        <div class="col-sm-9">
                                            <select name="branch_manager" class="form-control">
                                                <option value="">--Select Branch Manager--</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label class="col-sm-3 control-label mb-2">Asst Manager
                                            Name</label>
                                        <div class="col-sm-9">
                                            <select name="asst_manager" class="form-control">
                                                <option value="">--Select Asst Manager--</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="form-group">
                                <div class="col-sm-offset-3 col-sm-9">
                                    <button type="submit" class="btn btn-primary btn-sm rounded-0" id="create_branch">
                                        Add Branches
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('scripts')
    <script>
        $(document).ready(function() {
            $(".create_branch_validate").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    contactno: {
                        required: true,
                        digits: true,
                        minlength: 7,
                        maxlength: 15
                    },
                    landlineno: {
                        digits: true
                    },
                    faxno: {
                        digits: true
                    },
                    emirates: {
                        required: true
                    },
                    address: {
                        required: true,
                        minlength: 5
                    },
                    citycode: {
                        required: true
                    },
                    postalcode: {
                        digits: true
                    },
                    labourfileno: {
                        digits: true
                    }
                },
                messages: {
                    name: "Please enter the branch name",
                    emailid: "Please enter a valid email address",
                    contactno: "Enter a valid contact number",
                    emirates: "Please select an emirate",
                    address: "Address is required",
                    citycode: "City code is required",
                    postalcode: "Only digits allowed",
                    landlineno: "Only digits allowed",
                    faxno: "Only digits allowed"
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
                    form.submit();
                    var toastEl = document.getElementById('successToast');
                    var toast = new bootstrap.Toast(toastEl, {
                        delay: 3000
                    });
                    toast.show();
                }
            });
        });

        new DataTable('#branch_table');
    </script>
@endpush
