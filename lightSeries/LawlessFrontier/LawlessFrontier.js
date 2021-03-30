$(document).ready(function(){
    $('.menu_btn>a').on('click', function(){
        $('.menu_bg').show(); 
        $('.sidebar_menu').show().animate({
            right:0
        });  
    });
    
    $('.close_btn>a').on('click', function(){
        $('.menu_bg').hide(); 
        $('.sidebar_menu').animate({
            right: '-' + 50 + '%'
        }, function() {
            $('.sidebar_menu').hide(); 

            }); 
        });
    });
    
    $(document).ready(function() {
    var menu_offset = $('.nav').offset();

    $(window).scroll(function() {
        if($(document).scrollTop() > menu_offset.top) {
            $('.nav').addClass('nav-fixed')
        }else {
            $('.nav').removeClass('nav-fixed')
        }
    })
})