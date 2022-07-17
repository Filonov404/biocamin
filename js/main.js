//тогл бургер

$(".menu-mobile").on("click", function () {
    $(".header-bottom").css("display", "block");
});

$(".close-btn").on("click", function () {
    $(".header-bottom").css("display", "none");
});

//Слайдер на глалвной
new Swiper(".slider-wrapper", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: "auto",
        },
        550: {
            slidesPerView: "auto",
        }
    },
    pagination: {
        el: ".top-pagination ",
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

new Swiper(".sliders-items-inner",{
    slidesPerView: 3,
    spaceBetween: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        860: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".progress-bar",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".arrow-next-bioflares",
        prevEl: ".arrow-prev-bioflares",
        disabledClass: "arrow-disabled-bioflares"
    },

})

//слайдер на главной видеообзоры

new Swiper(".video-review-slider", {
    slidesPerView: 1,
    spaceBetween: 12,
    0: {
        slidesPerView: 1,
    },
    760: {
        slidesPerView: 2,
    },
    550: {
        slidesPerView: 1,
    },
    pagination: {
        el: ".progress-bar-video",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".arrow-next-video",
        prevEl: ".arrow-prev-video",
        disabledClass: "arrow-video-disabled"
    }
})