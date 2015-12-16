(function ($) {
  'use strict';

  $(document).ready(function() {
    $('.fighter-camp img').delay(200).fadeIn('slow', function() {
      $('.date-camp img').each(function(i) {
        $(this).delay(100*i).fadeTo(300,1);
      });
    });
  });
}(jQuery));
