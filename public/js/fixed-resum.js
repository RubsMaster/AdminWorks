$(document).ready(function () { 
    
    var altura = $('.caja-sinfix').offset().top;
    
    $(window).on('scroll', function(){
      if ( $(window).scrollTop() > altura ){
        $('.caja-sinfix').addClass('caja-fixed');
        $('.caja-sinfix').addClass('white');
        $('.caja-sinfix').removeClass('card');
      } else {
        $('.caja-sinfix').removeClass('caja-fixed');
        $('.caja-sinfix').removeClass('white');
        $('.caja-sinfix').addClass('card');
      }
    });
});