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

function nav_expand() {
    //http://jsfiddle.net/Vy33z/4/
    //this might help??
    /*var $div = $('div');
    var divleft = $div.position().left;
    $('div').scroll(function() {
        $('img').each(function() {
            img = $(this);
            imgleft = img.position().left;
            if (imgleft >= divleft && imgleft + img.width() <= divleft + $div.width()) {
                $(this).css({
                    opacity: '1'
                })
                $(this).siblings('img').css({
                    opacity: '0.2'
                });
                return false;
            }
        });
    })*/
}

$(function () {
    $(window).scroll(nav_top);
    nav_top();
    $('nav').addClass('unstick');
})


