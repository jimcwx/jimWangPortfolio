app = {};

app.init = function() {
  app.landingPageArrowClick();
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