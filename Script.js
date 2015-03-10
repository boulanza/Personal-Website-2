// code to keep nav at the top from here:
// http://jsfiddle.net/livibetter/HV9HM/

function nav_top() {
    var top_of_screen = $(window).scrollTop();
    var top_of_nav = $('#nav_anchor').offset().top;

    if (top_of_screen > top_of_nav) {
        $('nav').addClass('stick');
        $('nav').removeClass('unstick');
    }
    else {
        $('nav').removeClass('stick');
        $('nav').addClass('unstick');
    }
}

$(function () {
    $(window).scroll(nav_top);
    nav_top();
    $('nav').addClass('unstick');
})