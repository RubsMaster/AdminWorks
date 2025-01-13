var indicador = 0;
function defineSizes(){
  $('.form_container .slide').each(function(i,el){
      $(el).css({
          'background-image':"url("+$(el).data("background")+")",
          'height':($('.form_container').width() * 0.38)+'px',
          'width': ($('.form_container').width())+'px'
      });
  });
  $('.form_container .slideContainer').css({
      'margin-left': -(indicador * $('.form_container').width())+'px'
  });
}

function moveSlider(direccion){
  var limite = $('.form_container .slide').length;
  indicador = (direccion == 'right') ? indicador + 1 : indicador -1;
  indicador = (indicador >= limite) ? 0: indicador;
  indicador = (indicador < 0) ? limite - 1 : indicador;

  $('.form_container .slideContainer').animate({
      'margin-left': -(indicador * $('.form_container').width())+'px'
  });

}

$(document).ready(function () { 
    $('.left-slide').on('click', function(e){
        e.preventDefault();
        moveSlider('left');
    });
    $('.right-slide').on('click', function(e){
        e.preventDefault();
        moveSlider('right');
    });
    defineSizes();

});
$(window).on('resize',defineSizes);


$(document).ready(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
  });
