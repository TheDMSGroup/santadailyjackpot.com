$(function() {
    window.setInterval(function () {
        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]')
            .tooltip()
            .on('click tap', function(e) {
                e.preventDefault();
            })
        ;
    }, 500);
});