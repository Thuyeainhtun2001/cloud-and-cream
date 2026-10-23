document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function (carouselEl) {
        var carousel = new bootstrap.Carousel(carouselEl, {
            interval: 1000,
            ride: 'carousel',
            pause: false
        });
        carousel.cycle();
    });
});