$(function(){
    $('i.hamMenu').click(function(){
        $('nav').stop().slideToggle();
        $('i.hamMenu').toggleClass('fa-times');
    })
    $('.linkFake:first').click(function(){
        $('#sub1').stop().slideToggle();
        $('.fa-chevron-down:first').toggleClass('fa-chevron-up');
    })
    $('.linkFake:last').click(function(){
        $('#sub2').stop().slideToggle();
        $('.fa-chevron-down:last').toggleClass('fa-chevron-up');
    })
//    $('.linkFake:first').hover(function(){
//        $('#sub1').stop().slideToggle();
//    })
//    $('.linkFake:last').hover(function(){
//        $('#sub2').stop().slideToggle();
//    })
})