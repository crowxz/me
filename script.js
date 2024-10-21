$(document).ready(function() {
    $(document).on('click', function() {
        if ($('#black-screen').is(':visible')) {
            $('#black-screen').fadeOut(500, function() {
                $('#main-content').css('visibility', 'visible').animate({ opacity: 1 }, 500);
                $('#background-music')[0].play();
            });
        }
    });
});
