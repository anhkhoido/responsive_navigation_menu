$(document).ready(function () {
    (function ($) {
        $('#hamburger_menu').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('with_sidebar');
        });
        
        $('#site_cache').click(function (e) {
            $('body').removeClass('with_sidebar');
        });
        
    })(jQuery);
});