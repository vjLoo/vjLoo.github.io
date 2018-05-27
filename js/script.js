//Navigation smooth scrolling
$(document).ready(function() {
  //Get header height
  var headerHeight = $("header").outerHeight();
  //Animate scrolling when menu items clicked
  $(".slide").click(function(e) {
    var linkHref = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);
    //Prevent section name from showing in URL
    e.preventDefault();
  });
});