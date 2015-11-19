jQuery(document).ready(function() {
    jQuery('.button-collapse').sideNav();


    jQuery('.parallax').parallax();

    // Sticky Navigation.

    jQuery(window).scroll(function() {
        var topnav = jQuery('.site-logo img').position();
        var topdistance = topnav.top
        var scroll = jQuery(window).scrollTop();
        stickyNav(topdistance, scroll);
    });
    function stickyNav(t, s) {
        if(t < s) {
            console.log('activate');
            jQuery('.top-nav').addClass('sticky').removeClass('no-sticky');
        } else if(s === 0) {
            console.log('deactivate');
            jQuery('.top-nav').removeClass('sticky').addClass('no-sticky');
        }
    }


});