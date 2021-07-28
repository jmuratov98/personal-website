$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  // set background image for hero section
  $('.has-bg-img').each(function () {
    var $img = $(this).find('img.is-bg-img').first();
    if ($img) {
      $(this).css('background-image', 'url(' + $img.attr('src') + ')');
      $img.remove();
    }
  });

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});