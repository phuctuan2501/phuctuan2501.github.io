$(document).ready(function () {

    $(window).scroll(function () { 

        var VTw = window.pageYOffset;
            VT2 = $('.SERVICES111').offset().top;
            VT3 = $('.khoi-3').offset().top;
            VT4 = $('.caiket').offset().top;
            
          

       

        if (VTw < VT2) {
            $('.menu').removeClass('active');
            $('.item-1').addClass('active');
        } else if (VTw < VT3) {
            $('.menu').removeClass('active');
            $('.item-2').addClass('active');
        } else if (VTw < VT4) {
            $('.menu').removeClass('active');
            $('.item-3').addClass('active');
        } else {
            $('.menu').removeClass('active');
            $('.item-4').addClass('active');
        }

    });
    if ($('li.slide:last').hasClass('active')) {

        $('li.slide:last').removeClass('active');
        $('li.slide:last').addClass('deactive');
        $('li.slide:first').addClass('active');
        $('li.slide:first').removeClass('deactive');

    } else {

        var slide_active = $('li.active');
        $(slide_active).next().addClass('active');
        $(slide_active).removeClass('active');
        $(slide_active).addClass('deactive');
        $(slide_active).next().removeClass('deactive');

    }

}, 3000);

$('.icon-next').click(function (e) { 
    e.preventDefault();

    $('.carousel').removeClass('prev');

    if ($('li.slide:last').hasClass('active')) {

        $('li.slide:last').removeClass('active');
        $('li.slide:last').addClass('deactive');
        $('li.slide:first').addClass('active');
        $('li.slide:first').removeClass('deactive');

    } else {

        var slide_active = $('li.active');
        $(slide_active).next().addClass('active');
        $(slide_active).removeClass('active');
        $(slide_active).addClass('deactive');
        $(slide_active).next().removeClass('deactive');

    }

    clearInterval(time)
    
});

$('.icon-prev').click(function (e) { 
    e.preventDefault();

    $('.carousel').addClass('prev');

    if ($('li.slide:first').hasClass('active')) {

        $('li.slide:first').removeClass('active');
        $('li.slide:first').addClass('deactive');
        $('li.slide:last').addClass('active');
        $('li.slide:last').removeClass('deactive');

    } else {

        var slide_active = $('li.active');
        $(slide_active).prev().addClass('active');
        $(slide_active).removeClass('active');
        $(slide_active).addClass('deactive');
        $(slide_active).prev().removeClass('deactive');

    }

    clearInterval(time)
    
});


