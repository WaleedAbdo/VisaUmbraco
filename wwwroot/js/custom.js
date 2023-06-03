$(document).ready(function() {
    $('select').select2();
    $('[data-toggle="tooltip"]').tooltip();
    $(window).on('scroll load', function() {
        $("#header.cloned #logo img").attr("src", $('#header #logo img').attr('data-sticky-logo'));
    });
    $(".dropdown-filter").on('click', function() {
        $(".explore__form-checkbox-list").toggleClass("filter-block");
    });
    $('.ui.dropdown').dropdown();
    $('#birthdatepicker').datepick({dateFormat: 'dd-mm-yyyy'});
    $('#datepicker').datepick({dateFormat: 'dd-mm-yyyy'});
    var x = document.getElementById("track_your_request_menu");
    window.addEventListener('resize', function(){
        var window_width= $(window).width();
        if(window_width < 1024){
            x.style.display = "none";
        }
    });

    $('body').on('click', '#view_all_home_countries_link', function(e){
        e.preventDefault();
        if($('#home_flags').hasClass('d-none')) {
            $('#home_flags').toggleClass('d-none');
            $(this).html('View Less');
        }
        else {
            $('#home_flags').toggleClass('d-none');
            $(this).html('View All');
        }
        return false;
    });
});
function show_and_hide() {
    var x = document.getElementById("track_your_request_menu");
    var window_width= $(window).width();
    if(window_width >= 1024){
        if (x.style.display === "flex") {
            x.style.display = "none";
        } else {
            x.style.display = "flex";
        }
    }
    else {
        $('#track_your_request a').attr("href", "track_your_order.html")
    }            
}

function close_menu(){
    var x = document.getElementById("track_your_request_menu");
    x.style.display = "none";
}


function activate_tab (tab) {
    $('.tab-home').removeClass('active');
    $("#button_tab_"+tab).addClass('active');
    $('.tab-pane.fade').removeClass('show').removeClass('active');
    $('#tabs_'+tab).addClass('show').addClass('active');
    $('body,html').animate({
        scrollTop: $("#visa_search_tabs").offset().top - 100
    }, 2000);
}
