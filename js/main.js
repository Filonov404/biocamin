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

//открыть закрыть меню в футере

$(".footer-title").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");
});
