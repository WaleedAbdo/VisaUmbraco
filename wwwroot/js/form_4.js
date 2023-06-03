function show1() {
    $(".show1_form").toggle();
    $(".show2_form").hide();
    $(".Cash_label").css("opacity", 0.8);
    $(".Online_label").css("opacity", 1);
}

function show2() {
    $(".show2_form").toggle();
    $(".show1_form").hide();
    $(".Online_label").css("opacity", 0.8);
    $(".Cash_label").css("opacity", 1);
}