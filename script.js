$(function(){
    $('#changeButton')
        .css({
            'margin-left': '20px',
            'margin-bottom': '20px'
        });
    $('.news-time').click(function(){
        $(this).parents(".news-item").css('border', '1px solid red');
    });        
});