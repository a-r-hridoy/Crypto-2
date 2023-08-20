// Preloader area
var preloader = document.getElementById("preloader");
function preloder_function() {
    setTimeout(() => {
        preloader.style.display = "none";
    }, 200);

}
// Preloader area

// Carousel area

$('.sponsors').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    
});


$('.testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




$('.country').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
    
});

// Carousel area



$(document).ready(function () {
    // code from https://code.mukto.info/counter-up-with-a-simple-jquery/
        // Create new intersection observer
        var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            // If the element is in view, start counter animation
            if (entry.isIntersecting) {
            $(entry.target).prop("Counter", 0).animate(
                {
                Counter: $(entry.target).text(),
                },
                {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                    $(entry.target).text(Math.ceil(now));
                },
                }
            );
            // Stop observing the element to prevent duplicate animations
            observer.unobserve(entry.target);
            }
        });
        });
    
        // Observe each .counterup element
        $(".counterup").each(function () {
        observer.observe(this);
        });
    });

    