app = {};


app.init = function() {
  app.landingPageArrowClick();
  app.landingPageArrowEnter();
  app.navScrollAppear();
  app.hamburgerScrollAppear();
  app.hamburgerClick();
  app.exitHamburger();
  app.hamburgerLinkClick();
}

$(function () {
  app.init();
});

// Function to scroll down after clicking on arrow on landing page
app.landingPageArrowClick = function() {
  $(".scrollDownArrow").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
    }, 1);
  });
}

// Function to add enter keyup to non-anchor tag buttons
app.landingPageArrowEnter = function() {
  $(".scrollDownArrow, .hamburger, .exitMenu").keyup(function(e) {
    if (e.which === 13) {
      this.click();
    }
  })
}

// Function for the nav on the right side to appear after scrolling 50% of the browser view height
app.navScrollAppear = function() {
  let $nav = $(".sideNav");
  let $win = $(window);
  let winH = $win.height();

  $win.on("scroll", function() {
    if ($(this).scrollTop() > (winH / 2)) {
      $nav.removeClass("disabled").addClass("enabled");
    } else {
      $nav.removeClass("enabled").addClass("disabled");
    }
  }).on("resize", function() {
    winH = $(this).height();
  })
}

// Function for the hamburger menu to appear on the top right corner after scrolling 50% of the browser view height
app.hamburgerScrollAppear = function () {
  let $hamburger = $(".hamburger");
  let $win = $(window);
  let winH = $win.height();

  $win.on("scroll", function () {
    if ($(this).scrollTop() > (winH / 2)) {
      $hamburger.removeClass("disabled").addClass("enable");
    } else {
      $hamburger.removeClass("enable").addClass("disabled");
    }
  }).on("resize", function () {
    winH = $(this).height();
  })
}

// Function for the hamburger button to bring out the navigation menu
app.hamburgerClick = function() {
  $(".hamburger").click(function() {
    $(".sideNav").toggleClass("menuGone menuHere");
    $(".exitMenu").toggleClass("disabled enable");
  })
}

// Function to leave the navigation menu
app.exitHamburger = function() {
  $(".exitMenu").click(function() {
    $(".sideNav").toggleClass("menuGone menuHere");
    $(".exitMenu").toggleClass("disabled enable");
  })
}

// Function to leave the navigation menu after a user has clicked a button
app.hamburgerLinkClick = function() {
  $(".sideNav li a").click(function() {
    if ($(".sideNav").hasClass('menuHere') === true) {
      $(".sideNav").toggleClass("menuGone menuHere");
      $(".exitMenu").toggleClass("disabled enable");
    }
  })
}