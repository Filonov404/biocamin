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
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        currentClass: "all-items",
        totalClass: "active-item",
    },
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prew",
        disabledClass: "arrow-disabled"
    },
    // breakpoints: {
    //     slidesPerView: 1,
    //     spaceBetween: 5,
    //     550: {
    //         slidesPerView: 1.05,
    //         spaceBetween: 5,
    //     }
    // }
});