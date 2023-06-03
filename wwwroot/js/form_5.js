$('body').on('change', '#service-selector', function(){
    if($(this).val() != '') {
        $('.service_content').show();
        $('.applicants_form').show();
        $('.add_button').show();
    }
    else {
        $('.service_content').hide();
        $('.applicants_form').hide();
        $('.add_button').hide();
    }
});
$('body').on('click', '#add_service_btn', function () {
  
    var service = $('#service-selector').val();
    var seconds = new Date().getTime();
    var data = '<div class="card">';
    data += '<div class="card-header" id="heading'+seconds+'">';
    data += '<h2 class="mb-0 d-flex">';
    data += service;
    data += '<button class="btn btn-link remove_btn ml-auto" type="button">';
    data += 'Remove';
    data += '</button>';
    data += '<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse'+seconds+'" aria-expanded="false" aria-controls="collapse'+seconds+'">';
    data += '<i class="fas fa-chevron-down"></i>';
    data += '</button>';
    data += '</h2>';
    data += '</div>';
    data += '<div id="collapse'+seconds+'" class="collapse" aria-labelledby="heading'+seconds+'" data-parent="#accordionService">';
    data += '<div class="card-body">';
    data += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore gna a. Ut enim ad minim veniam,</p>';
    data += '<div class="container-fluid mb-3">';
    data += '<div class="row">';
    data += '<div class="col-lg-6 col-12">';
    data += '<select class="applicant_selector" data-card="#collapse'+seconds+'">';
    data += '<option value="">Choose Applicant</option>';    
    data += '<option value="Moaz Ali">Moaz Ali</option>';
    data += '<option value="Fatma Mohamed">Fatma Mohamed</option>';   
    data+= '</select>';
    data += '</div>';
    data += '</div>';
    data += '</div>';
    data += '<div class="service_applicants mx-3">';
    data += '<p class="d-flex">Moaz Ali <button type="button" class="btn btn-link remove_applicant_btn ml-auto">Remove</button></p>';    
    data += '<p class="d-flex">Fatma Mohamed <button type="button" class="btn btn-link remove_applicant_btn ml-auto">Remove</button></p>';    
    data += '</div>';
    data += '</div>';
    data += '</div>';
    data += '</div>';
    $("#accordionService").append(data);
    $('.applicant_selector').select2();

});
$('body').on('change', '.applicant_selector', function () {
    if ($(this).val() != '') {
        var pa = $(this).attr('data-card');
        var data = '<p class="d-flex">'+$(this).val()+' <button type="button" class="btn btn-link remove_applicant_btn ml-auto">Remove</button></p>';    
        $(pa+' .service_applicants').append(data);
    }
});
$('body').on('click', '.remove_btn', function () {
    $(this).parent().parent().parent().remove();
});
$('body').on('click', '.remove_applicant_btn', function () {
    $(this).parent().remove();
});