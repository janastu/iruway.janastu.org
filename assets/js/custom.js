$(document).ready(function () {
    $('.nav-toggle').click(function (e) {
        e.preventDefault();
        var collapse_content_selector = $(this).attr('data-toggle');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Read More');
            } else {
                toggle_switch.html('Read Less');
            }
        });
    });

});