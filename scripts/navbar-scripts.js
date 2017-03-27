$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_init = 300;

    if(y_scroll_pos >= scroll_pos_init) {
        $("#top-nav-id")
            .css({opacity: 0.7})
            .mouseenter(function () {
                $(".cbp-af-header-shrink").css({opacity: 1.0});
            })
            .mouseleave(function () {
                $(".cbp-af-header-shrink").css({opacity: 0.7});
            });
    }
    else
    {
        $(".cbp-af-header-shrink").css({opacity: 1.0});
    }
});
