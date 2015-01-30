$(document).ready(function() {

    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 2000
    }); // END text-rotator-----------------------

    $('.timer').countTo(); // CountTo END-----------

    var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            }
        }


    );
    wow.init(); // WOW END-------------------------

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,

        //Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 500,

        //Autoplay
        autoPlay: true,
        stopOnHover: true,

        // Navigation
        navigation: false,
        navigationText: ["prev", "next"],
        rewindNav: true,
        scrollPerPage: false,

        //Pagination
        pagination: true,
        paginationNumbers: false,

        // Responsive
        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window
    }); // OWLCAROUSEL END END END --------------
    //--------------Start form validater------------
    $('#contact_name').on('input', function() {});

    <!--Name cant be blank-->
    $('#contact_name').on('input', function() {
        var input = $(this);
        var is_name = input.val();
        if (is_name) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    <!--Email must be an email -->
    $('#contact_email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    <!--Message cant be blank -->
    $('#contact_message').keyup(function(event) {
        var input = $(this);
        var message = $(this).val();
        console.log(message);
        if (message) {
            input.removeClass("invalid").addClass("valid");
        } else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    $("#contact_submit button").click(function(event) {});

    <!-- After Form Submitted Validation-->
    $("#contact_submit button").click(function(event) {
        var form_data = $("#contact").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#contact_" + form_data[input]['name']);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid) {
                error_element.removeClass("error").addClass("error_show");
                error_free = false;
            } else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        if (!error_free) {
            event.preventDefault();
        } else {
            alert('No errors: Form will be submitted');
        }
    });









});