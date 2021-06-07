//Global

$(document).ready(function () {
  //navigation for mobile
  $('.sidenav').sidenav();

  // Sticky Navbar function
  const navbar = $('#navbar');
  const header = $('#header').height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > header) {
      navbar.addClass('sticky');
      //console.log(navbar);
    } else {
      navbar.removeClass('sticky');
    }
  });

  // Smooth scrolling
  const headerHeight = $('#header').outerHeight();
  $('#main-nav li a').click(function (event) {
    event.preventDefault();
    const targetHref = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(targetHref).offset().top - headerHeight,
      },
      1000
    );
  });

  // Portfolio -> filter project cards and add filter
  const filterLabel = $('.filter-label');
  let selectedClass = filterLabel[0].id;
  
  const isActive = function() {
      for (let i = 0; i < filterLabel.length; i++) {
      const el = filterLabel[i];
      console.log(el.parentElement)
      if (el.id == selectedClass) {
        $(el).addClass('is-active');
      } else {
        $(el).removeClass('is-active')
      }
    } 
  }
  console.log(filterLabel)

  filterLabel.on('click', function () {
    selectedClass = $(this).attr('data-rel');
    console.log(selectedClass)

    $('#portfolio.col').fadeTo(100, 0.1);
    $('.project-card ')
      .not('.' + selectedClass)
      .fadeOut()
      .removeClass('scale-anm');

    setTimeout(function () {
      $('.' + selectedClass)
        .fadeIn()
        .addClass('scale-anm');
      $('#portfolio.col').fadeTo(300, 1);
    }, 300);

    isActive();
  });
});
