<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap"
    rel="stylesheet" />

<link rel="stylesheet" href="{{ asset('assets/vendors/simplebar/simplebar.min.css') }}">
<link rel="stylesheet" href="{{ asset('assets/css/theme-rtl.min.css') }}" id="style-rtl">
<link rel="stylesheet" href="{{ asset('assets/css/theme.min.css') }}" id="style-default">
<link rel="stylesheet" href="{{ asset('assets/css/user-rtl.min.css') }}" id="user-style-rtl">
<link rel="stylesheet" href="{{ asset('assets/css/user.min.css') }}" id="user-style-default">

<script>
    var isRTL = JSON.parse(localStorage.getItem("isRTL"));
    if (isRTL) {
        var linkDefault = document.getElementById("style-default");
        var userLinkDefault = document.getElementById("user-style-default");
        linkDefault.setAttribute("disabled", true);
        userLinkDefault.setAttribute("disabled", true);
        document.querySelector("html").setAttribute("dir", "rtl");
    } else {
        var linkRTL = document.getElementById("style-rtl");
        var userLinkRTL = document.getElementById("user-style-rtl");
        linkRTL.setAttribute("disabled", true);
        userLinkRTL.setAttribute("disabled", true);
    }
</script>
