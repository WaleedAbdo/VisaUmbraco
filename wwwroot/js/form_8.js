$(function () {
    $('.header-level').click(function () {
        $(this).next('.sub-level').find('table').toggle();
    });
});


$("#check_all").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
});
function delete_row(e) {
    e.parentElement.parentElement.remove();
}