$(document).ready(function () {

    var menuMobile = $('.main-menu > ul');

    $('#btn-menu').click(function () {
        $('.stick-btn').toggleClass('changed');
        $('.stick-btn > span').toggle();
        $(menuMobile).toggleClass('menu-mobile');
    })

})