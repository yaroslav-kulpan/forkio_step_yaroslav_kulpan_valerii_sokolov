$(document).ready(function () {
    $('.navbar__toggler').click(function (e) {
        e.preventDefault();
        $('.navbar__nav').toggleClass('navbar__nav-open');
    });
});