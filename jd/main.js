$(document).ready(function () {
    $(".client-slider").owlCarousel({
      loop: true,
      margin: 80,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 5
        },
        1000: {
          items: 7
        }
      }
    });
  });

//////////////////////////////////////////////////

$(document).ready(function(){
    $("#work").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: [
            '<img src="img/icons8-left-50.png" alt="Previous">',
            '<img src="img/icons8-right-50.png" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

/////////////////////////////////////////////

AOS.init({
    once: true 
  });

