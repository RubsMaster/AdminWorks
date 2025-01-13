(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#res-log').click(function (e) {
    	$('#form-login').each(function(){       
		this.reset();
    	});
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {
    var $myMessage = $('.message'),
        $btnclmesse = $('.btn-close-mensaje'),
        $myMessaDanger = $('.message-danger'),
        $myMessaBecareful = $('.message-becareful');
    if ($myMessage.length) {
        $myMessage.slideDown(500).delay(5000).slideUp(600);
    }

    if ($myMessaDanger.length) {
        $myMessaDanger.slideDown(500).delay(5500).slideUp(600);
    }
    if ($myMessaBecareful.length) {
        $myMessaBecareful.slideDown(500).delay(5500).slideUp(600);
    }

    $btnclmesse.on('click',function(e){
        e.preventDefault();
        var box = $(this).parent('div');
        box.stop().slideUp(600);
    });
});