//////////////////////////// FUNCTION ////////////////////////////////////////

function clickToShow() {

    var btnContainer = $('#myBtnContainer');
    console.log(btnContainer);
    var btn = $('.myBtnContainer .btn');
    console.log(btn.length);
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("mouseover", function () {
            // var current = document.getElementsByClassName("is-active");
            var current = $('.is-active')
            current.removeClass('is-active');



            $(this).addClass(" is-active");
            console.log(this);
            console.log($(this).attr('class'));
            btnClass = ($(this).attr('class'));

            var split = btnClass.split(' ');
            var selectedBtnClass = split[0];
            console.log(selectedBtnClass);
            console.log(selectedBtnClass + "-content");
            var selectedBtnClassContent = selectedBtnClass + "-content";
            console.log(selectedBtnClassContent);

            $('.content').hide();
            // $(`.${selectedBtnClassContent}`).show();
            $(`#${selectedBtnClassContent}`).fadeIn(1000);


        });
    }
}


function hamburgerToShow() {

    var btnContainer = $('#navbarHamburger');
    console.log(btnContainer);
    var btn = $('#navbarHamburger .navbar-item');
    console.log(btn.length);
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            // var current = document.getElementsByClassName("is-active");
            var current = $('.is-active')
            current.removeClass('is-active');



            $(this).addClass(" is-active");
            console.log(this);
            console.log($(this).attr('href'));
            btnClass = ($(this).attr('href'));

            var split = btnClass.split(' ');
            var selectedBtnClass = split[0];
            console.log(selectedBtnClass);
            console.log(selectedBtnClass + "-content");
            var selectedBtnClassContent = selectedBtnClass + "-content";
            console.log(selectedBtnClassContent);

            $('.content').hide();
            // $(`.${selectedBtnClassContent}`).show();
            $(`${selectedBtnClassContent}`).show();
            $(`${selectedBtnClass}`).addClass(" is-active");


        });
    }
}

//////////////////////////// EXECUTION ////////////////////////////////////////

$(document).ready(function () {


    $("#btn1-content").show();
    $("#btn2-content").hide();
    $("#btn3-content").hide();
    $("#btn4-content").hide();

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        console.log($('.navbar-burger').attr('class'));
        $(".navbar-menu").toggleClass("is-active");
        console.log($('.navbar-menu').attr('class'));


    });

    clickToShow();
    hamburgerToShow();

});

