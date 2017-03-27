window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

console.log = function () {
};

bootstrap_alert = function () {
};
bootstrap_alert.warning = function (message, alert, timeout) {
    $('<div id="storeOpenAlert" class="alert alert-' + alert + ' fade in alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
        + message + '</div>').appendTo('body');
    setTimeout(function () {
        $(".alert").alert('close');
    }, timeout);
};

var checkIfOpen = function () {
    var myDate = new Date();
    moment.tz.setDefault("America/Edmonton");
    //console.log(moment.tz(myDate, "America/Edmonton").format('dddd HH:mm'));

    var dayOfWeek = moment.tz(myDate, "America/Edmonton").format('dddd').toLowerCase();
    var timeOfDay = moment.tz(myDate, "America/Edmonton").format('HH');

    $('#' + dayOfWeek + 'HoursLine').css("font-weight", "bold");

    if (['monday', 'tuesday', 'wednesday', 'friday'].indexOf(dayOfWeek) >= 0) {
        if (timeOfDay >= 10 && timeOfDay <= 18) {
            bootstrap_alert.warning('We are <strong>open</strong> right now! Come and visit us!', 'success', 4000);
            $("#openHoursIndicator-open")
                .css("display", "''");
            $("#openHoursIndicator-closed")
                .css("display", "none");

        }
        else {
            bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
            $("#openHoursIndicator-open")
                .css("display", "none");
            $("#openHoursIndicator-closed")
                .css("display", "''");
        }
    } else if (['thursday'].indexOf(dayOfWeek) >= 0) {
        if (timeOfDay >= 10 && timeOfDay <= 19) {
            bootstrap_alert.warning('We are <strong>open</strong> right now! Come and visit us!', 'success', 4000);
            $("#openHoursIndicator-open")
                .css("display", "''");
            $("#openHoursIndicator-closed")
                .css("display", "none");
        }
        else {
            bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
            $("#openHoursIndicator-open")
                .css("display", "none");
            $("#openHoursIndicator-closed")
                .css("display", "''");
        }
    } else if (['saturday'].indexOf(dayOfWeek) >= 0) {
        if (timeOfDay >= 10 && timeOfDay <= 17) {
            bootstrap_alert.warning('We are <strong>open</strong> right now! Come and visit us!', 'success', 4000);
            $("#openHoursIndicator-open")
                .css("display", "''");
            $("#openHoursIndicator-closed")
                .css("display", "none");
        }
        else {
            bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
            $("#openHoursIndicator-open")
                .css("display", "none");
            $("#openHoursIndicator-closed")
                .css("display", "''");
        }
    } else if (['sunday'].indexOf(dayOfWeek) >= 0) {
        bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
        $("#openHoursIndicator-open")
            .css("display", "none");
        $("#openHoursIndicator-closed")
            .css("display", "''");
    }
};

$(function () {
    $(window).stellar();
    new WOW().init();

    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 105
    });

    $(".fa-chevron-circle-down").hover(function () {
            $(this).stop().animate({fontSize: '60px'}, 100)
        },
        function () {
            $(this).stop().animate({fontSize: '56px'}, 100)
        });

    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.carousel').carousel({
        interval: 3000,
        pause: null
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
    });

    var csTheme = {thumbnail: {borderColor: '#ffffff'}};

    $(".imageGallery").nanogallery2({
        thumbnailHeight: 250,
        thumbnailHoverEffect2: {name: 'scale120', duration: 100},
        thumbnailGutterWidth: 0,
        thumbnailGutterHeight: 0,
        thumbnailLabel: {display: false, position: 'overImageOnMiddle', align: 'center'},
        thumbnailOpenImage: false,
        thumbnailBorderHorizontal: 1,
        thumbnailBorderVertical: 1,
        colorScheme: csTheme
    });


    $('[data-toggle="tooltip"]').tooltip();

    checkIfOpen();
});







