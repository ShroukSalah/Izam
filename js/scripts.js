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
    //    Mobile Side Menu
    const sidebar = document.querySelector('.SideMenu');

    document.querySelector('.toggleSideMenu').addEventListener('click', function() {
        sidebar.classList.toggle('hide');
    });

    // Define toggleSidebar function
    function toggleSidebar(show) {
        if (show) {
            sidebar.classList.remove('hide');
        } else {
            sidebar.classList.add('hide');
        }
    }

    // Close the sidebar when the close button is clicked
    document.querySelector('.closeMenu').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        toggleSidebar(false); // Hide the sidebar
    });
});
