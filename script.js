$(document).ready(function () {
    $(window).scroll(function () {


        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');

        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');

        }
    });
});


$(document).ready(function () {
    // add smooth scrolls all
    $("a").on('click', function (event) {

        // value overloading
        if (this.hash !== "") {
            // anchor click behaviour

            event.preventDefault();
            // hash store
            var hash = this.hash;

            $('html, body').animate ({
                scrollTop: $(hash) .offset().top 
            }, 800, function () {
                    // default click behaviour
                  window.location.hash = hash;
                
            });
        }
    });
});