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

    document.querySelector('.toggleSideMenu').addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });

    // Define toggleSidebar function
    function toggleSidebar(show) {
        if (show) {
            sidebar.classList.add('show');
        } else {
            sidebar.classList.remove('show');
        }
    }

    // Close the sidebar when the close button is clicked
    document.querySelector('.closeMenu').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior
        toggleSidebar(false); // Hide the sidebar
    });
    // ===================================================================
    // Toggle edit mode
    $('#toggleEditMode').click(function () {
        $('#menuContainer').toggleClass('edit-mode');
        $('#toggleEditMode img').attr('src', function () {
            return $('#menuContainer').hasClass('edit-mode') ? 'images/icons/check-circle.svg' : 'images/icons/setting.svg';
        });
        $('.cancelButton').toggleClass('hidden'); // Show/Hide cancel button in edit mode
    });

    // Cancel button to exit edit mode without saving
    $('.cancelButton').click(function () {
        $('#menuContainer').removeClass('edit-mode');
        $('#toggleEditMode').find('img').attr('src', 'images/icons/setting.svg');
        $(this).toggleClass('hidden');
    });

    // Toggle visibility of menu items (eye icon)
    $('.toggle-visibility').click(function (event) {
        event.preventDefault(); // Prevent default anchor action
        const $icon = $(this).find('img'); // Find the img inside the .toggle-visibility link
        const newSrc = $icon.attr('src') === 'images/icons/eye.svg' ? 'images/icons/eye-slash.svg' : 'images/icons/eye.svg';
        $icon.attr('src', newSrc); // Set the new src attribute
        $(this).closest('.nav-link').toggleClass('invisible-item');
    });
    // =====================================
    $('#toggleSidebar').click(function () {
        $('#sidebarModal').offcanvas('show');
    });
    $('#sidebarModal a').click(function () {
        $('#sidebarModal').offcanvas('hide');
    });
});
