$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    controlArrows: false,
    scrollBar: true,
    navigation: true,
    // autoScrolling: false
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


$('.result-box__photo').twentytwenty({
    move_slider_on_hover: false,
    no_overlay: true,
});

$('.gallery-slider-top').slick({
    slidesToShow: 2,
    asNavFor: '.gallery-slider-bottom',
    arrows: false,
    variableWidth: true
});

$('.gallery-slider-bottom').slick({
    slidesToShow: 3,
    asNavFor: '.gallery-slider-top',
    appendArrows: '.gallery-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/arr-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/arr-right.png" alt=""></button>',
});
