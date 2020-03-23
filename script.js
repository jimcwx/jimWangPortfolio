app = {};

app.init = function() {
  app.landingPageArrowClick();
  app.landingPageArrowEnter();
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