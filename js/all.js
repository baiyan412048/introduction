$(document).ready(function () {

    //移至content
    $("#mouse").click(function () {
        $("html, body").animate({
            scrollTop: $("#content").offset().top
        }, { duration: 800, easing: "swing" });
        return false;
    });

    //返回頂端
    $('#to-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#to-top').fadeIn(200);
        } else {
            $('#to-top').stop().fadeOut(200);
        }
    }).scroll();


    //選單
    $('#menu-icon-toggle').click(function() {
        /* Act on the event */
        $('#menu-icon-toggle').toggleClass('active');
    });
    
});