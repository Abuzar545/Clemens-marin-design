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
$(document).ready(function(){
    $(".inventery-menu").on("click",function(){
        $(".menuinv-wrapper").fadeToggle()
        $(".service-menu-rapper").fadeOut()
        $(".more-manu-content").fadeOut()
        $(".location-menu-wraper").fadeOut()

    })
})        
$(document).ready(function(){
    $(".outtboard").on("click",function(){
        $(".service-menu-rapper").fadeToggle()
         $(".more-manu-content").fadeOut()
         $(".menuinv-wrapper").fadeOut()
         $(".location-menu-wraper").fadeOut()
    })
}) 
$(document).ready(function(){
    $(".more-clemens").on("click",function(){
        $(".more-manu-content").fadeToggle()
        $(".menuinv-wrapper").fadeOut()
        $(".service-menu-rapper").fadeOut()
        $(".location-menu-wraper").fadeOut()
    })
}) 
$(document).ready(function(){
    $(".location-manu").on("click",function(){
        $(".location-menu-wraper").fadeToggle()
        $(".menuinv-wrapper").fadeOut()
         $(".more-manu-content").fadeOut()
        $(".service-menu-rapper").fadeOut()
    })
}) 
$(document).ready(function(){
    $("#mobile-manu-icon-item").on("click",function(){
        $(".mobile-menu-items").slideToggle()
        $(".more-manu-content   ").fadeTOut()
        $(".menuinv-wrapper").fadeOut()
        $(".service-menu-rapper").fadeOut()
        $(".location-menu-wraper").fadeOut()
    })
}) 
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("mobile-manu-icon-item");
    const leftNav = document.querySelector(".LeftNavigation");
    const overlay = document.getElementById("navOverlay");

    // Toggle Mobile Menu Drawer
    const toggleMenu = () => {
        leftNav.classList.toggle("mobile-active");
        overlay.classList.toggle("mobile-active");
        
        // Dynamically swap modern bootstrap view icons
        if(leftNav.classList.contains("mobile-active")) {
            menuIcon.classList.replace("bi-list", "bi-x");
        } else {
            menuIcon.classList.replace("bi-x", "bi-list");
        }
    };

    menuIcon.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);
});