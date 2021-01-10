$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    // Fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top - $('header').innerHeight();

        $("#nav a").removeClass('active')
        $this.addClass('active');

        if ($("#nav_toggle").hasClass('active')) {
            $(window).on("scroll", function() {
                $('#nav_toggle').removeClass("active");
                $("#nav").removeClass("active");
            });
        }

        $('.section__title').removeClass('bg-highlight')
        $(blockId + ' .section__title').addClass('bg-highlight')

        $("html, body").animate({
            scrollTop: blockOffset
        }, 700);
    });
    // menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();


        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $this.toggleClass('active');
        $(blockId).slideToggle();
    });
    // slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});