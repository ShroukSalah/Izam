//   ================== ========================
$(document).ready(function () {
    $('.fav-btn').click(function () {
        $(this).toggleClass('active');
    });
    // custom sroting select
    $(".default_option").click(function () {
        $(this).parent().toggleClass("active");
        $(".sorting-block").toggleClass("active")
    })

    $(".select_ul li").click(function () {
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
        $(".sorting-block").removeClass("active")
    })
 
});
