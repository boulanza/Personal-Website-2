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

    nav_pos();
}

function nav_pos() {
    var top_of_screen = $(window).scrollTop();
    var header1 = $('#HelloWorld').offset().top;
    var header2 = $('#Education').offset().top;
    var header3 = $('#WorkExperience').offset().top;
    var header4 = $('#Projects').offset().top;
    var header5 = $('#Contact').offset().top;

    if (top_of_screen > header5) {
        $('#co').css('text-decoration', 'underline');
        $('#pr').css('text-decoration', 'none');
    }
    else if (top_of_screen > header4) {
        $('#pr').css('text-decoration', 'underline');
        $('#co').css('text-decoration', 'none');
        $('#we').css('text-decoration', 'none');
    }
    else if (top_of_screen > header3) {
        $('#we').css('text-decoration', 'underline');
        $('#pr').css('text-decoration', 'none');
        $('#ed').css('text-decoration', 'none');
    }
    else if (top_of_screen > header2) {
        $('#ed').css('text-decoration', 'underline');
        $('#we').css('text-decoration', 'none');
        $('#hw').css('text-decoration', 'none');
    }
    else if (top_of_screen > header1) {
        $('#hw').css('text-decoration', 'underline');
        $('#ed').css('text-decoration', 'none');
    }
    else {
        $('#hw').css('text-decoration', 'none');
    }
}

$(function () {
    $(window).scroll(nav_top);
    nav_top();
    nav_pos();
    $('nav').addClass('unstick');
})


