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

app.landingPageArrowClick = function() {
  $(".scrollDownArrow").click(function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#about").offset().top
    }, 1);
  });
}

app.landingPageArrowEnter = function() {
  $(".scrollDownArrow, .hamburger, .exitMenu").keyup(function(e) {
    if (e.which === 13) {
      this.click();
    }
  })
}

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

app.hamburgerClick = function() {
  $(".hamburger").click(function() {
    $(".sideNav").toggleClass("menuGone menuHere");
    $(".exitMenu").toggleClass("disabled enable");
  })
}

app.exitHamburger = function() {
  $(".exitMenu").click(function() {
    $(".sideNav").toggleClass("menuGone menuHere");
    $(".exitMenu").toggleClass("disabled enable");
  })
}

app.hamburgerLinkClick = function() {
  $(".sideNav li a").click(function() {
    if ($(".sideNav").hasClass('menuHere') === true) {
      $(".sideNav").toggleClass("menuGone menuHere");
      $(".exitMenu").toggleClass("disabled enable");
    }
  })
}