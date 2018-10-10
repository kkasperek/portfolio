//Global 

$(document).ready(function () {

    //navigation for mobile
    $('.sidenav').sidenav();


    // Sticky Navbar function 
    var navbar = $("#navbar");
    var header = $("#header").height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > header) {
            navbar.addClass("sticky");
            //console.log(navbar);
        } else {
            navbar.removeClass("sticky");
        }
    });

    // Smooth scrolling 
    var headerHeight = $("#header").outerHeight();
    $('#main-nav li a').click(function (event) {
        event.preventDefault();
        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight
        }, 1000);
    });


    // Portfolio -> filter project cards and add filter 

    let filterLabel = $(".filter-label");
    let projects = $(".project-card");

    filterLabel.on("click", function () {
        console.log("works");
           
        
        for (i in filterLabel){
            console.log(filterLabel[i]);
            var category = filterLabel[i].attr("data-name");
            console.log(category);
        }
    });

    function filterProjects() {





        // update active state for category labels
        //updateFilterLabel();

        // display or hide elements depending on selected category
        // if (!category) {
        //   // display all projects if "all" is selected
        //   $.each.call(projects, displayEl());
        // } else {
        //   $.each.call(projects, function(el) {
        //     if (el.attr("data-name") !== category) {
        //       hideEl(el);
        //     } else {
        //       displayEl(el);
        //     }
        //   });
        // }

        // utility
        function updateFilterLabel() {
            [].forEach.call(filterLabel, $(this).removeClass("is-active"));
            filterLabel.addClass("is-active");
        }
        function displayEl(el) {
            el.style.display = "block";
        }
        function hideEl(el) {
            el.style.display = "none";
        }

    }

    filterProjects();


});