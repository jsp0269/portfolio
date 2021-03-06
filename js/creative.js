$(document).ready(function () {
  $("#inc-allmidifier").load("project/AllMidifier.html");
  $("#inc-ariby").load("project/Ariby.html");
  $("#inc-bicycle").load("project/Bike.html");
  $("#inc-elcollector").load("project/ELCollector.html");
  $("#inc-gaint").load("project/Gaint.html");
  $("#inc-itus").load("project/ITus.html");
  $("#inc-library").load("project/Library.html");
  $("#inc-safebox").load("project/SafeBox.html");
  $("#inc-set").load("project/GeniusSet.html");
  $("#inc-snackpop").load("project/SnackPop.html");
  $("#inc-farmcar").load("project/FarmCar.html");
  $("#inc-escaperoom").load("project/EscapeRoom.html");
  $("#inc-summoner").load("project/SummonerVR.html");
  $("#inc-disaster").load("project/Disaster.html");
});

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Modal
  $('a[href]').click(function (event) {
    var mlink = this.toString().substr(this.toString().indexOf('#'));
    if (mlink.search("#pro") != -1) {
      event.preventDefault();
      $(mlink).modal({
        fadeDuration: 250
      });
    }
  });
})(jQuery); // End of use strict

// Filter
function FilterCtg(evt, ctgname) {
  var i, x, tablinks;
  x = document.getElementsByClassName("ctg-all");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" filter-active", "");
  }
  x = document.getElementsByClassName(ctgname);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
  evt.currentTarget.className += " filter-active";
}