function more_questions() {
    $('.more_questions').show();

}
function less_questions() {
    $('.more_questions').hide();

}
function more_questions_with_data() {
    $('.more_questions_with_data_container').show();

}
function less_questions_with_data() {
    $('.more_questions_with_data_container').hide();

}
function delete_row(e) {
    e.parentElement.parentElement.parentElement.remove();
}
$( document ).ready(function () {
    $('body').on('change keyup keydown paste', '#childrens_number_field', function(){
        var html = '';
        for (var i = 0; i < $(this).val(); i++) {
            html += '<div class="col-12 inputs more_questions_with_data d-flex align-items-center mb-3 border-bottom pb-3">';
            html += '<div class="row">';
            html += '<div class="col-12 col-lg-9">';
            html += '<div class="row">';
            html += '<div class="col-6 col-lg-3 inputs mb-3">';
            html += '<label for="">first Name <i class="fa fa-exclamation tooltipicon" data-toggle="tooltip" data-placement="bottom" title="Enter PERSONAL DETAILS"></i></label>';
            html += '<input type="text" placeholder="Name*">';
            html += '</div>';
            html += '<div class="col-6 col-lg-3 inputs mb-3">';
            html += '<label for="">Last Name <i class="fa fa-exclamation tooltipicon" data-toggle="tooltip" data-placement="bottom" title="Enter PERSONAL DETAILS"></i></label>';
            html += '<input type="text" placeholder="Name*">';
            html += '</div>';
            html += '<div class="col-6 col-lg-3 inputs mb-3">';
            html += '<label for="">Nationality <i class="fa fa-exclamation tooltipicon" data-toggle="tooltip" data-placement="bottom" title="Enter PERSONAL DETAILS"></i></label>';
            html += '<input type="text" placeholder="Nationality*">';
            html += '</div>';
            html += '<div class="col-6 col-lg-3 inputs mb-3">';
            html += '<label for="">Date Of Birth <i class="fa fa-exclamation tooltipicon" data-toggle="tooltip" data-placement="bottom" title="Enter PERSONAL DETAILS"></i></label>';
            html += '<input type="text" ng-required="true" placeholder="MM/DD/YYYY" class="date_of_birth" />';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="col-12 col-lg-3">';
            html += '<button type="button" class="page_buttons border mt-3 p-1 bg-dark mx-1">edit</button>';
            html += '<button type="button" class="page_buttons border mt-3 p-1 bg-dark mx-1">save</button>';
            html += '<button type="button" class="page_buttons border mt-3 p-1 mx-1" onclick="delete_row(this)">remove</button>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
        }
        $('#childrens_fields').html(html);
        $('.date_of_birth').datepick({dateFormat: 'dd-mm-yyyy'});
    });
    if ($("#phone").length) {
        var inputa = document.querySelector("#phone");
        var phone_tel = window.intlTelInput(inputa, {
            initialCountry: "eg",
            placeholderNumberType:"MOBILE",
            autoHideDialCode: false,
            separateDialCode:true,
            hiddenInput: "#phone_tel",
            geoIpLookup: function(callback) {
                $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "Egypt";
                    callback(countryCode);
                });
            }
        });
 
        var countryData = phone_tel.getSelectedCountryData();
        if($('#phone_dialcode').val() == '')
        {
            $('#phone_dialcode').val(countryData.dialCode);
            $('#phone_iso').val(countryData.iso2);
        }
        else
        {
            phone_tel.destroy();
            phone_tel = window.intlTelInput(inputa, {
                initialCountry: $('#phone_iso').val(),
                placeholderNumberType:"MOBILE",
                autoHideDialCode: false,
                separateDialCode:true,
                hiddenInput: "#phone_tel",
                geoIpLookup: function(callback) {
                    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                        var countryCode = $('#phone_iso').val();
                        callback(countryCode);
                    });
                }
            });
        }      
        
        inputa.addEventListener("countrychange", function() {
            countryData = phone_tel.getSelectedCountryData();
            $('#phone_dialcode').val(countryData.dialCode);
            $('#phone_iso').val(countryData.iso2);
        });
    }
});
