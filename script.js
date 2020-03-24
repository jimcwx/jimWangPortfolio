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
    }, 500);
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
    if ($(this).scrollTop() > winH) {
      $nav.removeClass("disabled").addClass("enabled");
    }
  }).on("resize", function() {
    winH = $(this).height();
  })
}