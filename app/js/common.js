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
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    // draggable: false,
    // swipe: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.result-slider__nav',
});


$('.yes_no').click(function () {
    $(this).toggleClass('active');
});




$(".result-slider").on('afterChange', function (event, slick, currentSlide) {
    $(".cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.btn-burger').click(function () {
    $('.overlay-menu').fadeToggle();
    $(this).toggleClass('click');
    $('.main-sidebar__box').fadeToggle();
});

$('.overlay-menu').click(function () {
    $(this).fadeOut();
    $('.btn-burger').removeClass('click');
    $('.main-sidebar__box').fadeOut();
});

$('.main-features-certificate').fancybox();

$('.result-gallery').fancybox();


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
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arr-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arr-right.png" alt=""></button>',
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