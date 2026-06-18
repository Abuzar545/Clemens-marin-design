$(document).ready(function () {
    $('.sliderhome').owlCarousel({
        loop: true,
        margin: 10,
        // nav:true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});


$(document).ready(function () {

    $('.service-input').click(function () {

        // Get clicked tab index
        let index = $(this).index();

        // Active tab styling
        $('.service-input').removeClass('activeTab');
        $(this).addClass('activeTab');

        // Show corresponding content
        $('.maintence-right-wrapper').removeClass('activeItem');
        $('.maintence-right-wrapper').eq(index).addClass('activeItem');

    });

});