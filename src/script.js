//Global

$(document).ready(function() {
  //navigation for mobile
  $(".sidenav").sidenav();

  // Sticky Navbar function
  var navbar = $("#navbar");
  var header = $("#header").height();

  $(window).scroll(function() {
    if ($(this).scrollTop() > header) {
      navbar.addClass("sticky");
      //console.log(navbar);
    } else {
      navbar.removeClass("sticky");
    }
  });

  // Smooth scrolling
  var headerHeight = $("#header").outerHeight();
  $("#main-nav li a").click(function(event) {
    event.preventDefault();
    var targetHref = $(this).attr("href");
    
    $("html, body").animate(
      {
        scrollTop: $(targetHref).offset().top - headerHeight
      },
      1000
    );
  });

  // Portfolio -> filter project cards and add filter
  let filterLabel = $(".filter-label");
  let selectedClass = "";

  filterLabel.on("click", function() {
    console.log("click");
    selectedClass = $(this).attr("data-rel");
    console.log(selectedClass);
    
    $("#portfolio").fadeTo(100, 0.1);
    $(".project-card ")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("scale-anm");
    
      setTimeout(function() {
      $("." + selectedClass)
        .fadeIn()
        .addClass("scale-anm");
      $("#portfolio").fadeTo(300, 1);
    }, 300);
  });
});
