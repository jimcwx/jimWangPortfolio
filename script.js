app = {};

app.init = function() {
  app.landingPageArrowClick();
  app.landingPageArrowEnter();
  app.navScrollAppear();
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
  $(".scrollDownArrow").keyup(function(e) {
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