$(document).ready(function() {
    const $hamburgerMenuButton = $('.navigation__hamburger'),
        $navigationHiddenLayer = $('.navigation__hidden-menu');

    //Toggle betwen hidden and visible navigation
    function toggleHiddenMenu() {
        $navigationHiddenLayer.toggleClass('navigation__hidden-menu--is-active')
        $hamburgerMenuButton.toggleClass('navigation__hamburger--is-active')
    }

    //show border under navigation after scroll
    function borderUnderNavigation() {
        if($(window).scrollTop()) {
            $('.navigation').css('border-bottom', '3px solid black')
        }
        else {
            $('.navigation').css('border-bottom', 'none')
        }
    }

    $hamburgerMenuButton.on('click', toggleHiddenMenu)
    $(window).on('scroll', borderUnderNavigation)
    borderUnderNavigation()
});