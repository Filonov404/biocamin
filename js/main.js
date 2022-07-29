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
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
            freeMode: true,
        },
        860: {
            slidesPerView: 3,
        },
    },
    scrollbar: {
        el: ".progress-bar",
        hide: false,
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
        el: ".progress-bar-video",
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
        el: ".progress-bar-works",
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
        el: ".progress-bar-video",
    },
});
new Swiper(".thumbs-slider-wrapper", {
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
    slidesPerView: 4,
    spaceBetween: 4,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            height: 400,
            slidesPerView: 1.2,
            freeMode: true,
        },
        860: {
            slidesPerView: 2,
        },
    },
    scrollbar: {
        el: ".progress-bar-video",
        hide: false,
    },
})