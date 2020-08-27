$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    controlArrows: false,
    scrollBar: true,
    navigation: true,
    responsiveWidth: 991,
    responsiveHeight: 767,
    responsiveSlides: true,
});

$('.result-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    draggable: false,
    swipe: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/arrow-right.png" alt=""></button>',
    appendArrows: '.result-slider__nav',
});


$(".result-slider").on('afterChange', function (event, slick, currentSlide) {
    $(".cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.btn-burger').click(function () {
   $('.main-sidebar__box').fadeToggle();
});


$('.result-box__photo').twentytwenty({
    move_slider_on_hover: false,
    no_overlay: true,
});

$('.gallery-slider-top').slick({
    slidesToShow: 2,
    asNavFor: '.gallery-slider-bottom',
    arrows: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1520,
            settings: {
                slidesToShow: 1,

            }
        }
    ]
});

$('.gallery-slider-bottom').slick({
    slidesToShow: 3,
    asNavFor: '.gallery-slider-top',
    appendArrows: '.gallery-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/arr-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/arr-right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1520,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 1270,
            settings: {
                variableWidth: true,

            }
        }
    ]
});
