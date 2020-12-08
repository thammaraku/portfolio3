//////////////////////////// FUNCTION ////////////////////////////////////////

function clickToShow() {

    var btnContainer = $('#myBtnContainer');
    var btn = $('.myBtnContainer .btn');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("mouseover", function () {

            var current = $('.is-active')
            current.removeClass('is-active');

            $(this).addClass(" is-active");
            btnClass = ($(this).attr('class'));

            var split = btnClass.split(' ');
            var selectedBtnClass = split[0];
            var selectedBtnClassContent = selectedBtnClass + "-content";

            $('.content').hide();
            $(`#${selectedBtnClassContent}`).fadeIn(1000);

        });
    }
}


function hamburgerToShow() {

    var btnContainer = $('#navbarHamburger');
    var btn = $('#navbarHamburger .navbar-item');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
            });

            var current = $('.is-active')
            current.removeClass('is-active');

            $(this).addClass(" is-active");
            btnClass = ($(this).attr('href'));

            var split = btnClass.split(' ');
            var selectedBtnClass = split[0];
            var selectedBtnClassContent = selectedBtnClass + "-content";

            $('.content').hide();
            $(`${selectedBtnClassContent}`).fadeIn(1000);
            $(`${selectedBtnClass}`).addClass(" is-active");

        });
    }
}


//////////////////////////// EXECUTION ////////////////////////////////////////

$(document).ready(function () {


    $("#btn1-content").fadeIn(1000);
    $("#btn2-content").hide();
    $("#btn3-content").hide();
    $("#btn4-content").hide();

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function (e) {
        e.preventDefault;

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    // content section
    clickToShow();
    // hamburger menu section
    hamburgerToShow();


    // var carousels = bulmaCarousel.attach('.carousel', {
    //     slidesToScroll: 1,
    //     slidesToShow: 2
    // });

    // console.log(carousels);
    // console.log(carousels.length);

    // for(var i = 0; i < carousels.length; i++) {
    //     console.log(carousels[i]);
    //     // Add listener to  event
    //     carousels[i].on('before:show', state => {
    //         console.log(state);
    //     });
    // }

});

