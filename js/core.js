$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

// set background image for hero section
$('.has-bg-img').each(function() {
  var $img = $(this).find('img.is-bg-img').first();
  if ($img) {
    $(this).css('background-image', 'url(' + $img.attr('src') + ')');
    $img.remove();
  }
});

// implement the navbar-burger toggle
// code is taken from bulma.io documentation 
document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});