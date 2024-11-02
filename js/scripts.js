$(document).ready(function () {

    // Toggle favorite button
    $('.fav-btn').click(function () {
        $(this).toggleClass('active');
    });

    // Custom sorting select
    $(".default_option").click(function () {
        $(this).parent().toggleClass("active");
        $(".sorting-block").toggleClass("active");
    });

    $(".select_ul li").click(function () {
        const selectedOption = $(this).html();
        $(".default_option li").html(selectedOption);
        $(this).parents(".select_wrap").removeClass("active");
        $(".sorting-block").removeClass("active");
    });

    // Mobile Side Menu toggle
    const sidebar = document.querySelector('.SideMenu');

    document.querySelector('.toggleSideMenu').addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // Close sidebar menu
    document.querySelector('.closeMenu').addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
        sidebar.classList.remove('show'); // Hide sidebar
    });

    // Toggle edit mode
    $('#toggleEditMode').click(function () {
        $('#menuContainer').toggleClass('edit-mode');
        const newIcon = $('#menuContainer').hasClass('edit-mode')
            ? 'images/icons/check-circle.svg'
            : 'images/icons/setting.svg';
        $('#toggleEditMode img').attr('src', newIcon);
        $('.cancelButton').toggle(); // Show/Hide cancel button in edit mode
    });

    // Cancel button to exit edit mode without saving
    $('.cancelButton').click(function () {
        $('#menuContainer').removeClass('edit-mode');
        $('#toggleEditMode img').attr('src', 'images/icons/setting.svg');
        $(this).hide();
    });

    // Toggle visibility of menu items (eye icon)
    $('.toggle-visibility').click(function (event) {
        event.preventDefault();
        const $icon = $(this).find('img');
        const newIconSrc = $icon.attr('src') === 'images/icons/eye.svg'
            ? 'images/icons/eye-slash.svg'
            : 'images/icons/eye.svg';
        $icon.attr('src', newIconSrc);
        $(this).closest('.nav-link').toggleClass('invisible-item');
    });

    // Sidebar modal toggle (Bootstrap 5 offcanvas)
    $('#toggleSidebar').click(function () {
        $('#sidebarModal').offcanvas('show');
    });
    $('#sidebarModal a').click(function () {
        $('#sidebarModal').offcanvas('hide');
    });

});