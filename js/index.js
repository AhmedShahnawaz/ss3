$(document).ready(function () { 
  

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1
    });


    // top  owl carousel
    $('#mobile-area .owl-carousel').owlCarousel({
        loop: false,
        // margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
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
    })

    // fixed home area background img whit owl carousel
    $("#fixed-home-bg .owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1
    });


    // top  owl carousel
    $('#services-area-3 .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })


    // recent post owl carousel in post centent area
    $('#recent-post .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
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
    })

  // home page form slider area 
    $('#form-text-area1 .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: false,
        nav: false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    // service area of homeopathy 
    $('#service-img .owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                dots: true
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })

      // recent services owl carousel in post centent area
      $('#recent-services .owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: false,
        responsive: {
            0: {
                items: 2,
                dots: true
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    })


    // recent services owl carousel in post centent area
    $('#blog-area .owl-carousel').owlCarousel({

        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


});

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar-area");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// scrolling slider animation area 
$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
  
        //activate fullpage.js
        // $('#fullpage').fullpage({
        // scrollBar: true,
        // navigation: true,
        // navigationTooltips: ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
        // loopBottom: true,
        // sectionSelector: 'section'
        // });
    
    //apply color to each section from array
    // int = -1;
    // color_array = ['#1abc9c','#c0392b','#9b59b6','#3498db','#f1c40f','#16a085'];

    // $('section').each(function(){
    //     int++
    //     $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
    // });
    
    });


       // search bar area 
       jQuery(document).ready(function ($) {

        $('.live-search-list li').each(function () {
            $(this).attr('data-search-term', $(this).text().toLowerCase());
        });

        $('.live-search-box').on('keyup', function () {

            var searchTerm = $(this).val().toLowerCase();

            $('.live-search-list li').each(function () {

                if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                    $(this).show();
                } else {
                    $(this).hide();
                }

            });

        });

    });

    // model area 
    $('.button').click(function () {
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })

    $('#modal-container').on("click", function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });



    // buttom to top area button 
    
 
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});