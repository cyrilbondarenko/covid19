$(document).ready(function(){
    $('.login').click(function(e){
        e.preventDefault();
        $('.popup, .auth').css('display', 'flex');
    });
    $('.answer').click(function(e){
        e.preventDefault();
        $('.popup, .error').css('display', 'flex');
    });
    $('.close').click(function(e){
        e.preventDefault();
        $('.popup, .auth, .error').css('display', 'none');
    });
    $('.stats > div div span:first-child').each(function(){
        $(this).prop('Counter',0).animate(
        {
            Counter:$(this).text()
        },
        {
            duration: 3000,
            easing: 'swing',
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        })
    });
});