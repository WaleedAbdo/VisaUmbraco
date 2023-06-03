function change_value(ele) {
    var class_name = ele.className;
    $('.'+class_name).removeClass('active');
    ele.classList.add('active');
    class_name =class_name.split("_");
    var old_Value = $('.'+class_name[1]+'>p').text();
    
    if($('.'+class_name[1]+'>p').find('span').eq(0)) {
      $('.'+class_name[1]+'>p>span').remove();  
      $('.'+class_name[1]+'>p').append('<span> </span>');  
    }
    else {
        $('.'+class_name[1]+'>p').append('<span> </span>');  
    }
    $('.'+class_name[1]+'>p>span');
    var class_name_value =ele.innerText;
    $('.'+class_name[1]+'>p>span').empty();
    $('.'+class_name[1]+'>p>span').append(" :"+ " " +class_name_value);
    $('.'+class_name[1]).click();
    var next_ele=$('.'+class_name[1]).parent().next().children();
    next_ele[0].click();
}