jQuery(document).on('ready', function ($) {
    "use strict";

    $('#status').fadeOut();

    /*---------------------------------
     //------ ANIMATE HEADER ------//
     ----------------------------------*/
    $(window).scroll(function () {
        var nav = $('.heading-3');
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            nav.addClass("bg-menu");
        } else {
            nav.removeClass("bg-menu");
        }
    });
    
    $(window).scroll(function () {
        var nav = $('.heading-6');
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            nav.addClass("bg-menu");
        } else {
            nav.removeClass("bg-menu");
        }
    });

    /*----------------------------------
    //------ JQUERY SCROOLTOP ------//
    -----------------------------------*/
    var go = $(".go-up");
    $(window).on('scroll', function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            go.fadeIn();
        } else {
            go.fadeOut();
        }
    });

}(jQuery));
