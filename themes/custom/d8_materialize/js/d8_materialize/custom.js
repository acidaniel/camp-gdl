jQuery(document).ready(function() {
    jQuery('.button-collapse').sideNav();


    jQuery('.parallax').parallax();

    // Sticky Navigation.

    //jQuery(window).scroll(function() {
    //    var topnav = jQuery('.top-nav');
    //    var navw = jQuery('.nav-wrapper');
    //    var scroll = jQuery(window).scrollTop();
    //    if(navw.offset().top < scroll) {
    //        if(topnav.hasClass('sticky') === false) {
    //            topnav.addClass('sticky');
    //        } else {
    //            return;
    //        }
    //    } else if(navw.offset().top > scroll) {
    //        topnav.removeClass('sticky');
    //    }
    //});


});