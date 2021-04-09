$(document).ready(function() {
    $('#check1').click(function(){
        if($(this).prop("checked") == true){
            $('body').addClass('darkmode');
            $('header').addClass('darkmode');
            $('p').addClass('darkmode');
            $('.card').addClass('darkmode');
            $('.acc').addClass('darkmode');
            $('.dark-mode-toggle').addClass('darkmode');
            $('.sec2').addClass('darkmode');
            $('.hr').addClass('darkmode');
        }
        else if($(this).prop("checked") == false){
            $('body').removeClass('darkmode');
            $('header').removeClass('darkmode');
            $('p').removeClass('darkmode');
            $('.card').removeClass('darkmode');
            $('.acc').removeClass('darkmode');
            $('.dark-mode-toggle').removeClass('darkmode');
            $('.sec2').removeClass('darkmode');
            $('.hr').removeClass('darkmode');
        }
    });
})