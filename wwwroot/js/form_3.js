function show1() {

    $('.show1_form').toggle();
    $('.frm3bindhtml').show();
    $('.show2_form').hide();
    $('.Destination_label').css("opacity", .8);
    $('.Applicant_label').css("opacity", 1);
    //$('.form_title').html('You Request a visa form Egypt to Chania with nationality <br><span style=' + '"    font-size: 1.5rem;font-weight: 100;"' + '>More Details.....</span>');
    
    if ($('.show1_form').is(":hidden") && $('.show2_form').is(":hidden")) {
        //$('.form_title').html('Total Cost 1000 EGP<br><span style=' + '"    font-size: 1.5rem;font-weight: 100;"' + '>More Details.....</span>');
        $('.instructions').show();
    } else {
        $('.instructions').hide();
    }
}

function show2() {
   
    $('.show2_form').toggle();
    $('.frm3bindhtml').show();
    $('.show1_form').hide();
    $('.Applicant_label').css("opacity", .8);
    $('.Destination_label').css("opacity", 1);
    //$('.form_title').html('You Request a visa form Egypt to Chania with nationality <br><span style=' + '"    font-size: 1.5rem;font-weight: 100;"' + '>More Details.....</span>');
    if ($('.show1_form').is(":hidden") && $('.show2_form').is(":hidden")) {
        //$('.form_title').html('Total Cost 1000 EGP<br><span style=' + '"    font-size: 1.5rem;font-weight: 100;"' + '>More Details.....</span>');
        $('.instructions').show();
    } else {
        $('.instructions').hide();
    }

}


$('.arrow-data p').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});

function change_value(ele) {
    var class_name = ele.className;
    class_name = class_name.split("_");
    var old_Value = $('.' + class_name[1] + '>p').text();
    if ($('.' + class_name[1] + '>p').find('span').eq(0)) {

        $('.' + class_name[1] + '>p>span').remove();
        $('.' + class_name[1] + '>p').append('<span> </span>');
    } else {
        $('.' + class_name[1] + '>p').append('<span> </span>');
    }
    $('.' + class_name[1] + '>p>span');
    var class_name_value = ele.innerText;
    $('.' + class_name[1] + '>p>span').empty();
    $('.' + class_name[1] + '>p>span').append(" :" + " " + class_name_value);
    $('.' + class_name[1]).click();
    var next_ele = $('.' + class_name[1]).parent().next().children();
    next_ele[0].click();
}


function change_value_2(ele) {
    var class_name = ele.className;
    class_name = class_name.split("_");
    var old_Value = $('.' + class_name[1] + '>p').text();
    if ($('.' + class_name[1] + '>p').find('span').eq(0)) {

        $('.' + class_name[1] + '>p>span').remove();
        $('.' + class_name[1] + '>p').append('<span> </span>');
    } else {
        $('.' + class_name[1] + '>p').append('<span> </span>');
    }
    $('.' + class_name[1] + '>p>span');

    var class_name_value = ele.innerText;
    $('.' + class_name[1] + '>p>span').empty();
    $('.' + class_name[1] + '>p>span').append(" :" + " " + class_name_value);

    $('.' + class_name[1]).click();

    var next_ele = $('.' + class_name[1]).parent().next().children();
    next_ele[0].click();
}

$( document ).ready(function () {
    $('body').on('click', '#show_details', function() {
        if($(this).hasClass('more_active-details')) {
            $("#details_tables").addClass("d-none");
            $('#show_details').html('More Details.....');
            $(this).removeClass('more_active-details');
        }
        else {
            $(this).addClass('more_active-details');
            $("#details_tables").removeClass("d-none");
            $('#show_details').html('Less Details...');
        }
        return fasle;
    });
});

