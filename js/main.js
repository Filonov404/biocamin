//тогл бургер

$(".menu-mobile").on("click", function () {
    $(".header-bottom").css("display", "block");
});

$(".close-btn").on("click", function () {
    $(".header-bottom").css("display", "none");
});

//Слайдер на глалвной

new Swiper(".slider-wrapper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints: {
        0: {
            slidesPerView: "auto",
        },
        550: {
            slidesPerView: "auto",
            freeMode: true,
        }
    },
    pagination: {
        el: ".top-pagination",
        type: "fraction",
        currentClass: "all-items",
        totalClass: "active-item",
    },
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prew",
        disabledClass: "arrow-disabled"
    },

});

//слайдер на главной виды каминов

new Swiper(".sliders-items-inner", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 1,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        430: {
            slidesPerView: 1.2,
            freeMode: true,
        },
        860: {
            slidesPerView: 3,
        },
    },
    scrollbar: {
        el: ".progress-bar",
    },
    navigation: {
        nextEl: ".arrow-next-bioflares",
        prevEl: ".arrow-prev-bioflares",
        disabledClass: "arrow-disabled-bioflares"
    },

})

//слайдер на главной видеообзоры

new Swiper(".video-review-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        430: {
            slidesPerView: 1.2,
            freeMode: true,
        },
        1200: {
            slidesPerView: 1,
            freeMode: true,
        },
    },
    scrollbar: {
        el: ".progress-bar-video",
        hide: false,
    },
    navigation: {
        nextEl: ".arrow-next-video",
        prevEl: ".arrow-prev-video",
        disabledClass: "arrow-video-disabled"
    }
})

//слайдер на главной наши работы

new Swiper(".our-works-slider", {
    freeMode: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 35,
    slideActiveClass: 'activ-slide',
    scrollbar: {
        el: ".progress-bar-works",
    },
    navigation: {
        nextEl: ".arrow-next-video",
        prevEl: ".arrow-prev-video",
    },
})

//слайдер на главной статьи

new Swiper(".news-slider-wrapper", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 1,
    slideActiveClass: 'activ-slide',
    scrollbar: {
        el: ".progress-bar-news",
    },
})

//открыть закрыть каталог в футере

$(".footer-title").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
});

//слайдер в карточке товаров

var bigSlides = new Swiper(".bigSlides-slider-wrapper", {

    height: 497,
    spaceBetween: 12,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    scrollbar: {
        el: ".progress-bar-card",
    },
});
new Swiper(".thumbs-slider-wrapper", {
    loop: true,
    slidesPerView: 2,
    height: 115,
    spaceBetween: 12,
    navigation: {
        nextEl: ".arrow-next-bigSlides",
        prevEl: ".arrow-prev-bigSlides",
    },

    thumbs: {
        swiper: bigSlides,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        340: {
            slidesPerView: 1.1,
            freeMode: true,
        },
        550: {
            slidesPerView: 1.2,
            freeMode: true,
        },
        960: {
            slidesPerView: 2,
            height:450,
        },
    },
});

//табы в карточке товаров

$(".slider-tabs").each(function () {
    let ths = $(this);
    ths.find(".slider-text-description").not(":first").hide();
    ths
        .find(".tabs")
        .click(function () {
            ths
                .find(".tabs")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
            ths
                .find(".description-inner")
                .hide()
                .eq($(this).index())
                .fadeIn();
        })
        .eq(0)
        .addClass("active");
});

//популярные биокамины

new Swiper(".popular-bioflares-inner", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 4,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            height: 400,
            slidesPerView: 1.1,
        },
        550: {
            height: 400,
            slidesPerView: 1.2,
        },
        860: {
            slidesPerView: 2,
        },
    },
    scrollbar: {
        el: ".progress-bar-card",
        hide: false,
    },
})

// обертка для указания процента скидки <div class="circle_percent" data-percent="30">

$(".circle_percent").each(function() {
    let $this = $(this),
        $dataV = $this.data("percent"),
        $dataDeg = $dataV * 3.6,
        $round = $this.find(".round_per");
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
    $this.prop('Counter', 0).animate({Counter: $dataV},
        {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $this.find(".percent_text").text(Math.ceil(now)+"%");
            }
        });
    if($dataV >= 51){
        $round.css("transform", "rotate(" + 360 + "deg)");
        setTimeout(function(){
            $this.addClass("percent_more");
        },1000);
        setTimeout(function(){
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        },1000);
    }
});

//эффект при наведении на кнопки

$('.ripple-effect').on('mouseenter', function(e) {
    let presentOfset = $(this).offset(),
        relX = e.pageX - presentOfset.left,
        relY = e.pageY - presentOfset.top;
    $(this).find('span').css({
        top: relY,
        left: relX,
    });
});
$('.ripple-effect').on('mouseout', function(e) {
    let presentOfset = $(this).offset(),
        relX = e.pageX - presentOfset.left,
        relY = e.pageY - presentOfset.top;
    $(this).find('span').css({
        top: relY,
        left: relX,
    });
});


//добавление классов при смене разрешения на странице новости

function myFunction(x) {
    if (x.matches) {
        $('.articles-inner').addClass("slider");
    } else {
        $('.articles-inner').removeClass("slider");
    }
}

const mmObj = window.matchMedia("(max-width: 768px)");
myFunction(mmObj);

// слайдер на странице новости

new Swiper(".articles-inner.slider", {
    loop: true,
    spaceBetween: 30,
    scrollbar: {
        el: ".progress-bar-card",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            spaceBetween: 20,
            slidesPerView: 1.25,
        },
        550: {
            slidesPerView: 1.3,
        }
    }
})

// слайдер на странице о нас, отзывы

new Swiper(".review-slider-inner", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 14,
    scrollbar: {
        el: ".progress-bar-review",
    },
    navigation: {
        nextEl: ".arrow-next-review",
        prevEl: ".arrow-prev-review",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 1.2,
        },
        550: {
            spaceBetween: 11,
            slidesPerView: 1.2,
        },
        960: {
            slidesPerView: 2,
        }

    }
})

// Вызов модального окна
$('.btn-wraper-test').click( function() {
    $('.overlay').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click( function() {
    $('.overlay').fadeOut();
});

// Закрытие окна на поле
$(document).mouseup( function (e) {
    let popup = $('.popup');
    if (e.target !== popup[0] && popup.has(e.target).length === 0){
        $('.overlay').fadeOut();
    }
});