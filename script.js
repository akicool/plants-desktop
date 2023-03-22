$(document).ready(function() {
    $('.nav__burger-menu').click(function(event) {
        $('.nav__burger-menu, .nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

