(function($) {
  $.fn.reloadingdata = function(options) {
  		var $this = $(this);
    	var config = $.extend({},$.fn.reloadingdata.defaultOptions, options);

    	return this.each(function() {
    		if (options.obj == 'single') {
 				$.ajax({
 			   	url   :  options.url,
 			    	type  : 'GET', 
 			    	dataType: 'json',
 				})
 				.done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
 			    	for (var val in data) {
 			        	$this.append(`<div data-id="${data[val][options.names.a]}" class="chip del-chip">
                                    ${data[val][options.names.b]}
                                    <i class="material-icons">close</i>
                                </div>`)
 			    	}
 			 	})
 				.fail(function( jqXHR) {
 			    	//mostrar Cuadro de error Materialize
 			    	Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
 			    	//llamar a funcion /Reset 
 				});
 				return false;
    		}else if (options.obj == 'double') {
 				$.ajax({
 			   	url   :  options.url,
 			    	type  : 'GET', 
 			    	dataType: 'json',
 				})
 				.done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
 			    	for (var val in data) {
 			        	$this.append(`<article class="col s12 m8 offset-m2 arti-aca-ex">
 			                            <div class="col s10 borde-bottom ">
 			                                <h6 data-id="${data[val][options.names.a]}" class="grey-text">${data[val][options.names.b]} - ${data[val][options.names.c]}</h6>
 			                            </div>
 			                            <div class="col s2 center">
 			                                <a href="#!" class="btn-floating waves-effect waves-light white btn eliminar">
 			                                    <i class="material-icons red-text">delete</i>
 			                                </a>
 			                            </div>
 			                        </article>`)
 			    	}
 			 	})
 				.fail(function( jqXHR) {
 			    	//mostrar Cuadro de error Materialize
 			    	Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
 			    	//llamar a funcion /Reset 
 				});
 				return false;
    		} else if (options.obj == 'triple') {
 				$.ajax({
 			   	url   :  options.url,
 			    	type  : 'GET', 
 			    	dataType: 'json',
 				})
 				.done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
 			    	for (var val in data) {
 			        	$this.append(`<article data-id="${data[val][options.names.a]}" id="expedesc" class="col s12 m10 offset-m1 valign-wrapper">
                                    <div class="col s10 borde-bottom">
                                        <div class="col s12 m5 valign">
                                            <p class="grey-text text-darken-1 center valign">${data[val][options.names.b]}</p>
                                        </div>
                                        <div class="col s4 m3 ">
                                            <p class="grey-text text-darken-1 center valign">${data[val][options.names.c]}</p>
                                        </div>
                                        <div class="col s4 m2 ">
                                            <p class="grey-text text-darken-1 center valign">${data[val][options.names.d]}</p>
                                        </div>
                                    </div>
                                    <div class="col s2 center valign">
                                        <a href="#!" class="btn-floating waves-effect waves-light white btn tooltipped eliminar"><i class="material-icons red-text">delete</i></a>
                                    </div>
                                </article>`)
 			    	}
 			 	})
 				.fail(function( jqXHR) {
 			    	//mostrar Cuadro de error Materialize
 			    	Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
 			    	//llamar a funcion /Reset 
 				});
    			return false;
    		} else {
    			$.error( 'Error, Falto pasar el parametro obj!!' );
    		}
      	
    	});
    	// Parametros del plugin.
    	$.fn.reloadingdata.defaultOptions = {
    		obj: null,
    	   url: "Sin texto",
         names: null
    	}
   };
})(jQuery);

// $(function () {
//     $('#box-academy-ext').reloadingdata(jsacextras);   
//     //$('#box-idiooma').reloadingdata(jsidiomas);   
//     $('#box-categoria').reloadingdata(objasigCat);   
//     $('#box-office').reloadingdata(objofimati);   
//     $('#boxHabilidad').reloadingdata(objhabilis);   
//     $('#box-software').reloadingdata(jssofware);   
// });

// /////////////////////////////////////////////////////////////////////////////////////////////////
// (function($) {
//   $.fn.lastins = function(options) {
//   		var $this = $(this);
//     	var config = $.extend({},$.fn.lastins.defaultOptions, options);

//     	return this.each(function() {
//     		if (options.obj == 'single') {
//  				$.ajax({
//  			   	url   :  options.url,
//  			    	type  : 'GET', 
//  			    	dataType: 'json',
//  				})
//  				.done(function ( data, textStatus, jqXHR ) {
// 		        	$this.prepend(`<div data-id="${data[options.names.a]}" class="chip del-chip">
//                               ${data[options.names.b]}
//                               <i class="material-icons">close</i>
//                           </div>`).slideDown(600)
 	
//  			 	})
//  				.fail(function( jqXHR) {
//  			    	//mostrar Cuadro de error Materialize
//  			    	Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
//  			    	//llamar a funcion /Reset 
//  				});
//  				return false;
//     		}else if (options.obj == 'double') {
//  				$.ajax({
//  			   	url   :  options.url,
//  			    	type  : 'GET', 
//  			    	dataType: 'json',
//  				})
//  				.done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
// 		        	$this.prepend(`<article class="col s12 m8 offset-m2 arti-aca-ex">
// 		                            <div class="col s10 borde-bottom ">
// 		                                <h6 data-id="${data[options.names.a]}" class="grey-text">${data[options.names.b]} - ${data[options.names.c]}</h6>
// 		                            </div>
// 		                            <div class="col s2 center">
// 		                                <a href="#!" class="btn-floating waves-effect waves-light white btn eliminar">
// 		                                    <i class="material-icons red-text">delete</i>
// 		                                </a>
// 		                            </div>
// 		                        </article>`).slideDown(600)
 		
//  			 	})
//  				.fail(function( jqXHR) {
//  			    	//mostrar Cuadro de error Materialize
//  			    	Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
//  			    	//llamar a funcion /Reset 
//  				});
//  				return false;
//     		} else if (options.obj == 'triple') {
//  				$.ajax({
//  			   	url   :  options.url,
//  			    	type  : 'GET', 
//  			    	dataType: 'json',
//  				})
//  				.done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
// 		        	$this.prepend(`<article data-id="${data[options.names.a]}" id="expedesc" class="col s12 m10 offset-m1 valign-wrapper">
//                               <div class="col s10 borde-bottom">
//                                   <div class="col s12 m5 valign">
//                                       <p class="grey-text text-darken-1 center valign">${data[options.names.b]}</p>
//                                   </div>
//                                   <div class="col s4 m3 ">
//                                       <p class="grey-text text-darken-1 center valign">${data[options.names.c]}</p>
//                                   </div>
//                                   <div class="col s4 m2 ">
//                                       <p class="grey-text text-darken-1 center valign">${data[options.names.d]}</p>
//                                   </div>
//                               </div>
//                               <div class="col s2 center valign">
//                                   <a href="#!" class="btn-floating waves-effect waves-light white btn tooltipped eliminar"><i class="material-icons red-text">delete</i></a>
//                               </div>
//                           </article>`).slideDown(600)

//  			 	})
//  				.fail(function( jqXHR) {
//  			    	//mostrar Cuadro de error Materialize
//  			    	Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
//  			    	//llamar a funcion /Reset 
//  				});
//     			return false;
//     		} else {
//     			$.error( 'Error, Falto pasar el parametro obj!!' );
//     		}
      	
//     	});
//     	// Parametros del plugin.
//     	$.fn.lastins.defaultOptions = {
//     		obj: null,
//     	   url: "Sin texto",
//          names: null
//     	}
//    };
// })(jQuery);
