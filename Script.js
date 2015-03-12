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
        $("#sub1").hide();
        $("#sub2").hide();
        $("#sub3").show();
    }
    else if (top_of_screen > header2) {
        $("#sub1").hide();
        $("#sub2").show();
        $("#sub3").hide();
    }
    else if (top_of_screen > header1) {
    //alert(header1);
        $("#sub1").show();
        $("#sub2").hide();
        $("#sub3").hide();
    }
    else {
        $("#sub1").hide();
        $("#sub2").hide();
        $("#sub3").hide();
    }
}

$(function () {
    $("#sub1").hide();
    $("#sub2").hide();
    $("#sub3").hide();
    $(window).scroll(nav_top);
    nav_top();
    nav_expand();
    $('nav').addClass('unstick');
})


