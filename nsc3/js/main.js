(function($) {
    "use strict";

    jQuery(document).ready(function($) {
        /*-------------------------------
        BOOTSTARP SCROLLLSPY
        ---------------------------------*/
        $('body').scrollspy({
                target: '.navbar-collapse',
                offset: 95
            })
        /*-------------------------------
        STICKY NAVIGATION
        ---------------------------------*/
        $(".main-menu-area").sticky({
            topSpacing: 0
        });
        /*-------------------------------
        SMOOTH SCROLLING
        ---------------------------------*/
        $('li.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '50';
            $('html,body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        /*-------------------------------
        SCROLL TO TOP
        ---------------------------------*/
        $.scrollUp({
            scrollText: "<i class='fa fa-angle-up'></i>",
            animation: 'fade'
        });
		
			
		/* ----------------------------------------- */
		/* GOOGLE MAP
		/* ----------------------------------------- */

		var googleMap = $('#googlemap');

		if(googleMap.length) // CHECK IF ELEMENT EXIST
		{
			googleMap.CustomMap();
		}
        
        /*-------------------------------
        WOW INIT
        ---------------------------------*/
        new WOW().init();
        /*-------------------------------
        /*-------------------------------
        CONTACT FORM
        ---------------------------------*/
        $('.field-input').on('focus',function() {
            $(this).parent().addClass('is-focused has-label');
        });
        $('.field-input').on('blur',function() {
            if ($(this).val() == '') {
                $(this).parent().removeClass('has-label');
            }
            $(this).parent().removeClass('is-focused');
        });
		
        /*-------------------------------
        HOME-2 CAROUSEL
        ---------------------------------*/
        $('.home-2-wrap').owlCarousel({
            items: 3,
            center: true,
            autoPlay: true,
            pagination: false,
            margin: true,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsMobile: [479, 1],
            afterAction: function(el) {
                //remove class active
                this.$owlItems.removeClass('active')
                    //add class active
                this.$owlItems //owl internal $ object containing items
                    .eq(this.currentItem + 1).addClass('active')
            },
        });
        /*-------------------------------
        HOME-3 CAROUSEL
        ---------------------------------*/
        $('.home-3-wrap').owlCarousel({
            pagination: false,
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            singleItem: true,
            autoPlay: true,
            navigationText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        });
        /*-------------------------------
        POST THUMB CAROUSEL
        ---------------------------------*/
        $('.post-thumb-carousel').owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            pagination: false,
            singleItem: true,
            autoPlay: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
        /*-------------------------------
        REVIEW CAROUSEL
        ---------------------------------*/
        $('.review-content').owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoPlay: true
        });

        /*-------------------------------
        MORE POST SINGLE PAGE
        ---------------------------------*/
        $('.m-post-wrap').owlCarousel({
            items: 3,
            center: true,
            autoPlay: true,
            pagination: false,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
        });
        /*-------------------------------
        MOBILE MENU
        ---------------------------------*/
        $('.mobile-menu nav').meanmenu({
            meanScreenWidth: "981",
            meanMenuContainer: ".mobile-menu"
        });
        /*-------------------------------
        FUN COUNTER
        ---------------------------------*/
        $('.funcounter').counterUp({
            delay: 50,
            time: 3000
        });
        /*-------------------------------
        PARALLAX EFFECT
        ---------------------------------*/
        $('.home-3-area').parallax("40%", 0.3);
        $('.parallux-bg').parallax("40%", -1);
        $('.review-parallax').parallax("50%", .1);
        $('.fun-area').parallax("50%", .1);
        /*-------------------------------
        LIGHTBOX
        ---------------------------------*/
        $("a.mypop").prettyPhoto({
            social_tools: false
        });
		
		// Vimeo Video overlay
         $(".btn-vimeo").simpleOverlay({
            "insertBy": "embed",
            "attribute": "data-vimeo"
        });
    });

    jQuery(window).load(function() {
        /*-------------------------------
        NIVO SLIDER
        ---------------------------------*/
        $('#slider').nivoSlider({
            prevText: '<i class="fa fa-angle-left"></i>',
            nextText: '<i class="fa fa-angle-right"></i>',
            controlNav: false,

        });
    });

}(jQuery));