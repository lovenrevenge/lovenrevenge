$('.mobile-nav, .dt-nav').localScroll();

var $links = $('.mobile-nav a');

      $links.on('click', function () {
     $('.nav-check').prop('checked', false);
});