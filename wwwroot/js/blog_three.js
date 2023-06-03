$(document).ready(function () {
  $('body').on('click', '.reply_toggler', function(e){
    e.preventDefault();
    $(this).parent().parent().parent().children('.comment_reply_form').toggleClass('d-none');
    return false;
  });
});