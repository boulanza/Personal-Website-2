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

    nav_expand();
}

function nav_expand() {
    var top_of_screen = $(window).scrollTop();
    var header1 = $('#header1').offset().top;
    var header2 = $('#header2').offset().top;
    var header3 = $('#header3').offset().top;

    if (top_of_screen > header3) {
        $('#sub1').css({
            display: none
        });
        $('#sub2').css({
            display: none
        });
        $('#sub3').css({
            display: inline
        });
    }
    else if (top_of_screen > header2) {
        $('#sub1').css({
            display: none
        });
        $('#sub2').css({
            display: inline
        });
        $('#sub3').css({
            display: none
        });
    }
    else if (top_of_screen > header1) {
    alert("dklaj");
        $('#sub1').css({
            display: inline
        });
        $('#sub2').css({
            display: none
        });
        $('#sub3').css({
            display: none
        });
    }
}

$(function () {
    $(window).scroll(nav_top);
    nav_top();
    nav_expand();
    $('nav').addClass('unstick');
})


