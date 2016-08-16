$(document).ready(function() {

    // Slick Slider
    if ($(".carousel-prod").length){
        $(".carousel-prod").slick({
            swipe:false,
            swipeToSlide:false,
            infinite: true,
            adaptiveHeight:true,
            speed: 200,
            arrows: true,
            slidesToScroll: 4,
            slidesToShow: 4,
            dots: false,

            responsive: [{
                breakpoint: 1023,
                settings: {
                    swipe:true,
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }]    
        })
    };

});