/////////////
$(function () {
	var MaxInputs       = 8; //Número Maximo de Campos
	var contenedor       = $("#box-academy-ext"); //ID del contenedor
	var AddButton       = $("#addAcademyEx"); //ID del Botón Agregar

	//var x = número de campos existentes en el contenedor
    var x = $("#box-academy-ext article").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    function codhtml (type_tit,type_tit_val, name_tit) {
    	return '<article class="col s12 m8 offset-m2 arti-aca-ex">'
					+'<div class="col s10 borde-bottom ">'
						+'<input type="text" name="type_acex[]" value="'+ type_tit_val +'"/><input type="text" name="acaext_tit[]" class="hide" value="'+ name_tit +'"/><h6 class="grey-text">'+type_tit+' - '+name_tit+'</h6>'
					+'</div>'
					+'<div class="col s2 center">'
						+'<a href="#!" class="btn-floating waves-effect waves-light white btn eliminar">'
						+'<i class="material-icons red-text">delete</i></a>'
					+'</div>'
				+'</article>';
    }

    $(AddButton).click(function (e) {
    	e.preventDefault();
    	var type_acex = $('select[name="type_acext"]').val();
    	var type_acex_tex = $('select[name="type_acext"] option:selected').text();
    	var acaext_tit = $('input[name="acaext_tit"]').val();

    	$(".error").remove();
        if( type_acex == "" ){
            $($('select[name="type_acext"]')).focus();
			Materialize.toast('Selecciona una Opción', 4000);
            return false;
        }else if( acaext_tit == ""){
            $('input[name="acaext_tit"]').focus();
			Materialize.toast('Completa este Campo', 4000);
            return false;
        }

        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append(codhtml(type_acex_tex,type_acex ,acaext_tit)).fadeIn();
            //$(contenedor).append('<div><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="Texto '+ FieldCount +'"/><a href="#" class="eliminar">&times;</a></div>');
            x++; //text box increment
            $('select[name="type_acext"]').val($('select[name="type_acext"] option:first').val());
            $('input[name="acaext_tit"]').val('');
            return false;
        }
        return false;
    });

   $("body").on("click",".eliminar", function(e){ //click en eliminar campo
    	console.log('click');
    	var row = $(this).parents('article');
        row.remove().fadeOut(); //eliminar el campo
        x--;
        return false;
    });

});


$(function () {
	var MaxInputs       = 8; //Número Maximo de Campos
	var contenedor       = $("#box-idiooma"); //ID del contenedor
	var AddButton       = $("#addIdioma"); //ID del Botón Agregar

	//var x = número de campos existentes en el contenedor
    var x = $("#box-idiooma article").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    function codhtmlIdioma (type_tit,type_tit_val, nivel_text, nivel_val) {
    	return '<article class="col s12 m8 offset-m2 arti-aca-ex">'
					+'<div class="col s10 borde-bottom ">'
						+'<input type="text" name="idioma[]" class="hide" value="'+ type_tit_val +'"/><input type="text" name="idioma_nivel[]" class="hide" value="'+ nivel_val +'"/><h6 class="grey-text">'+type_tit+' - '+nivel_text+'</h6>'
					+'</div>'
					+'<div class="col s2 center">'
						+'<a href="#!" class="btn-floating waves-effect waves-light white btn eliminar">'
						+'<i class="material-icons red-text">delete</i></a>'
					+'</div>'
				+'</article>';
    }

	function agregarIdioma () {
		var type_idioma = $('select[name="idioma"]').val();
    	var type_idioma_tex = $('select[name="idioma"] option:selected').text();
    	var type_nivel = $('select[name="idioma_nivel"]').val();
    	var type_nivel_tex = $('select[name="idioma_nivel"] option:selected').text();
    	

    	$(".error").remove();
        if( type_idioma == "" ){
            $($('select[name="idioma"]')).focus();
			       Materialize.toast('Selecciona una Opción', 4000);
            return false;
        }else if( type_nivel == ""){
            $($('select[name="idioma_nivel"]')).focus();
			       Materialize.toast('Selecciona una Opción', 4000);
            return false;
        }

        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append(codhtmlIdioma(type_idioma_tex, type_idioma , type_nivel_tex, type_nivel)).fadeIn();
            //$(contenedor).append('<div><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="Texto '+ FieldCount +'"/><a href="#" class="eliminar">&times;</a></div>');
            x++; //text box increment
            $('select[name="idioma"]').val($('select[name="idioma"] option:first').val());
            $('select[name="idioma_nivel"]').val($('select[name="idioma_nivel"] option:first').val());
            return false;
        }
        return false;
	}    

    $(AddButton).click(function (e) {
    	e.preventDefault();
    	agregarIdioma();
    });
});

$(function () {
	var MaxInputs       = 8; //Número Maximo de Campos
	var contenedor       = $("#box-categoria"); //ID del contenedor
	var AddButton       = $("#addAsigCat"); //ID del Botón Agregar

	//var x = número de campos existentes en el contenedor
    var x = $("#box-categoria article").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    function codhtmlCat (type_tit,type_tit_val, nivel_text, nivel_val) {
    	return '<article class="col s12 m8 offset-m2 arti-aca-ex">'
					+'<div class="col s10 borde-bottom ">'
						+'<input type="text" name="catego[]" class="hide" value="'+ type_tit_val +'"/><input type="text" name="subcat[]" class="hide" value="'+ nivel_val +'"/><h6 class="grey-text">'+type_tit+' - '+nivel_text+'</h6>'
					+'</div>'
					+'<div class="col s2 center">'
						+'<a href="#!" class="btn-floating waves-effect waves-light white btn eliminar">'
						+'<i class="material-icons red-text">delete</i></a>'
					+'</div>'
				+'</article>';
    }

	function agregarCates () {
		var type_idioma = $('select[name="category_id"]').val();
    	var type_idioma_tex = $('select[name="category_id"] option:selected').text();
    	var type_nivel = $('select[name="subcategory_id"]').val();
    	var type_nivel_tex = $('select[name="subcategory_id"] option:selected').text();
    	

    	$(".error").remove();
        if( type_idioma == "" ){
            $($('select[name="category_id"]')).focus();
			Materialize.toast('Selecciona una Opción', 4000);
            return false;
        }else if( type_nivel == ""){
            $($('select[name="subcategory_id"]')).focus();
			Materialize.toast('Selecciona una Opción', 4000);
            return false;
        }

        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append(codhtmlCat(type_idioma_tex, type_idioma , type_nivel_tex, type_nivel)).fadeIn();
            //$(contenedor).append('<div><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="Texto '+ FieldCount +'"/><a href="#" class="eliminar">&times;</a></div>');
            x++; //text box increment
            $('select[name="category_id"]').val($('select[name="category_id"] option:first').val());
            $("#subcategory_id").empty();
			      $("#subcategory_id").append("<option value='' selected='selected'>Subcategoría</option>");
            return false;
        }
        return false;
	}    

    $(AddButton).click(function (e) {
    	e.preventDefault();
    	agregarCates();
    });
});



$(function () {
	var MaxInputs       = 8; //Número Maximo de Campos
	var contenedor       = $("#boxExperiencia"); //ID del contenedor
	var AddButton       = $("#addExperiencia"); //ID del Botón Agregar

	//var x = número de campos existentes en el contenedor
    var x = $("#boxExperiencia article").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos
   
    function codhtmlExper (empresa, puesto, periodo, referen,puesto_ref, telefono,descrip) {
    	return '<article class="col s12 m10 offset-m1 valign-wrapper expedesc">'
      			+'<div class="col s5 m4">'
      				+'<p><strong>Empresa: </strong><span class="grey-text text-darken-1">'+empresa+'</span></p>'
      				+'<p><strong>Puesto: </strong><span class="grey-text text-darken-1">'+puesto+'</span></p>'
      				+'<p><strong>Periodo: </strong><span class="grey-text text-darken-1">'+periodo+'</span></p>'
      				+'<p><strong>Referencia: </strong><span class="grey-text text-darken-1">'+referen+'</span></p>'
      				+'<h6 class="grey-text text-darken-1">'+puesto_ref+' &nbsp;&nbsp; '+telefono+' </h6>'
      			+'</div>'
      			+'<div class="col s5 m6">'
      				+'<h6>Descripción de Actividades que Realizaba </h6>'
      				+'<p class="grey-text text-darken-1">'+descrip+'</p>'
      			+'</div>'
      			+'<div class="col s1 m2 center">'
      				+'<a href="#!" class="btn-floating waves-effect waves-light white btn eliminar"><i class="material-icons red-text">delete</i></a>'
      			+'</div>'
      		+'</article>';
    }

	function agregarExpe () {
		var emp = $('input[name="empresa_exp"]');
    	var puest = $('input[name="puesto_exp"]');
    	var desc = $('textarea[name="descrip_exp"]');
    	var refern = $('input[name="referencia"]');
    	var pue_ref = $('input[name="puesto"]');
    	var tel = $('input[name="tel_experien"]');
    	var mo_ini = $('select[name="mo__ini_exp"] option:selected');
    	var y_ini = $('select[name="y_ini_exp"] option:selected');
    	var mo_fin = $('select[name="mo_fin_exp"] option:selected');
    	var y_fin = $('select[name="y_fin_exp"] option:selected');

    	if ($('#to_date').is(':checked')) {
    		var perio = mo_ini.text()+' '+y_ini.text()+' - A la Fecha';
    	} else{
    		var perio = mo_ini.text()+' '+y_ini.text()+' - '+mo_fin.text()+' '+y_fin.text();
    		if( mo_fin.val() == ""){
				Materialize.toast('Selecciona una Opción', 4000);
				var mo = $('select[name="mo_fin_exp"]');
				mo.focus();
	            return false;
        }
    	};
    	
        if( emp.val() == "" ){
			Materialize.toast('Completa este Campo', 4000);
            emp.focus();
            return false;
        }else if( puest.val() == ""){
			Materialize.toast('Completa este Campo', 4000);
            puest.focus();
            return false;
        }
		else if( desc.val() == ""){
			Materialize.toast('Completa este Campo', 4000);
            desc.focus();
            return false;
        }else if( mo_ini.val() == ""){
			Materialize.toast('Selecciona una Opción', 4000);
			var prue = $('select[name="mo__ini_exp"]');
			prue.focus();
            return false;
        }
		else if( refern.val() == ""){
			Materialize.toast('Completa este Campo', 4000);
            refern.focus();
            return false;
        }
		else if( pue_ref.val() == ""){
			Materialize.toast('Completa este Campo', 4000);
            pue_ref.focus();
            return false;
        }
		else if( tel.val() == ""){
			Materialize.toast('Completa este Campo', 4000);
			tel.focus();
            return false;
        }

        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append(codhtmlExper(emp.val(), puest.val() , perio, refern.val(), pue_ref.val(), tel.val(), desc.val())).slideDown();

            x++; //text box increment
            emp.val('');
            puest.val('');
            desc.val('');
            refern.val('');
            pue_ref.val('');
            tel.val('');
            $('select[name="mo__ini_exp"]').val($('select[name="mo__ini_exp"] option:first').val());
            $('select[name="y_ini_exp"]').val($('select[name="y_ini_exp"] option:first').val());
            $('select[name="mo_fin_exp"]').val($('select[name="mo_fin_exp"] option:first').val());
            $('select[name="y_fin_exp"]').val($('select[name="y_fin_exp"] option:first').val());
            return false;
        }
        return false;
	}    

    $(AddButton).click(function (e) {
    	e.preventDefault();
    	agregarExpe();
    });
});

$(function () {
	var MaxInputs       = 8; //Número Maximo de Campos
	var contenedor       = $("#box-office"); //ID del contenedor
	var AddButton       = $("#addOffice"); //ID del Botón Agregar

	//var x = número de campos existentes en el contenedor
    var x = $("#box-office").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    function codhtmlOffi (valor) {
    	return '<div class="chip del-chip">'
						    +valor+
						    '<i class="material-icons">close</i>'
						+'</div>';
    }

	function agregarOffi () {
		var offi = $('select[name="ofimatica"]');
    	
    if( offi.val() == "" ){
			Materialize.toast('Selecciona una Opción', 4000);
      offi.focus();
      return false;
    }

    if(x <= MaxInputs) //max input box allowed
    {
        FieldCount++;
        //agregar campo
        $(contenedor).append(codhtmlOffi(offi.find(":selected").text())).fadeIn();
        //$(contenedor).append('<div><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="Texto '+ FieldCount +'"/><a href="#" class="eliminar">&times;</a></div>');
        x++; //text box increment
        offi.val($('select[name="ofimatica"] option:first').val());
  
        return false;
    }
    return false;
	}    

    $(AddButton).click(function (e) {
    	e.preventDefault();
    	agregarOffi();
    });
    var btnSoft       = $("#addSoft"); //ID del Botón Agregar
  	function agregaSoft () {
			var MaxInputs       = 8; //Número Maximo de Campos
			var contenedor       = $("#box-software"); //ID del contenedor
			

			//var x = número de campos existentes en el contenedor
	    var x = $("#box-software").length + 1;
	    var FieldCount = x-1; //para el seguimiento de los campos
  		
  		var soft = $('input[name="software"]');
      	
      if( soft.val() == ""){
  			Materialize.toast('Completa este Campo', 4000);
  			soft.focus();
        return false;
      }

      if(x <= MaxInputs) //max input box allowed
      {
          FieldCount++;
          //agregar campo
          $(contenedor).append(codhtmlOffi(soft.val())).fadeIn();
          x++; //text box increment
          soft.val("");
    
          return false;
      }
      return false;
  	}    

      $(btnSoft).click(function (e) {
      	e.preventDefault();
      	agregaSoft();
      });
});



$(function () {
	var MaxInputs       = 12; //Número Maximo de Campos
	var contenedor       = $("#boxExperiencia"); //ID del contenedor
	var AddButton       = $("#addHabilidad"); //ID del Botón Agregar

	//var x = número de campos existentes en el contenedor
    var x = $("#boxExperiencia article").length + 1;
    var FieldCount = x-1; //para el seguimiento de los campos

    function codhtmlabili (habi,nivel, year) {
    	return '<article id="expedesc" class="col s12 m10 offset-m1 valign-wrapper">'
      			+'<div class="col s12 m5 valign">'
      				+'<p>'+habi+'</p>'
      			+'</div>'
      			+'<div class="col s4 m3 ">'
      				+'<p class="grey-text text-darken-1 center valign">'+nivel+'</p>'
      			+'</div>' 
      			+'<div class="col s4 m2 ">'
      				+'<p class="grey-text text-darken-1 center valign">'+year+'</p>'
      			+'</div>'
      			+'<div class="col s4 m2 center valign">'
      				+'<a href="#!" class="btn-floating waves-effect waves-light white btn tooltipped eliminar"><i class="material-icons red-text">delete</i></a>'
      			+'</div>' 
      		+'</article>';
    }

	function agregarAbility () {
		var ability = $('input[name="name_habili"]');
		var nivel = $('select[name="nive_habili"]');
		var year_ex = $('select[name="year_exp"]');

    	$(".error").remove();
        if( ability.val() == "" ){
				Materialize.toast('Completa este Campo', 4000);
            ability.focus();
            return false;
        }else if( nivel.val() == ""){
				Materialize.toast('Selecciona una Opción', 4000);
            nivel.focus();
            return false;
        }
		   else if( year_ex.val() == ""){
            year_ex.focus();
				Materialize.toast('Selecciona una Opción', 4000);
            return false;
        }

        if(x <= MaxInputs) //max input box allowed
        {
            FieldCount++;
            //agregar campo
            $(contenedor).append(codhtmlabili(ability.val(), nivel.find(":selected").text() , year_ex.find(":selected").text())).fadeIn();
            //$(contenedor).append('<div><input type="text" name="mitexto[]" id="campo_'+ FieldCount +'" placeholder="Texto '+ FieldCount +'"/><a href="#" class="eliminar">&times;</a></div>');
            x++; //text box increment
            ability.val('');
            nivel.val($('select[name="nive_habili"] option:first').val());
            year_ex.val($('select[name="year_exp"] option:first').val());
            return false;
        }
        return false;
	}    

   $(AddButton).click(function (e) {
    	e.preventDefault();
    	agregarAbility();
   });
});



function getDatosDobles(array){
    $.ajax({
        url         : array[1],//ruta
        type        : 'GET',
        dataType    : 'json',
    })
    .done(function( data, textStatus, jqXHR ) {
        array[2].empty();
        $(data).each(function (key,value) {
            if (array[0] == 'sigle') {// typo de caja
                array[2].append(`<div data-id="${value[array[3]]}" class="chip del-chip">
                                    ${value[array[4]]}
                                    <i class="material-icons">close</i>
                                </div>`)
                return false;
            }else if(array[0] == 'doble'){
                array[2].append('<article class="col s12 m8 offset-m2 arti-aca-ex">'+
                                    '<div class="col s10 borde-bottom ">'+
                                        '<h6 data-id="'+ value[array[3]] +'" class="grey-text">'+ value[array[4]] +' - '+ value[array[5]] +'</h6>'+
                                    '</div>'+
                                    '<div class="col s2 center">'+
                                        '<a href="#!" class="btn-floating waves-effect waves-light white btn eliminar">'+
                                            '<i class="material-icons red-text">delete</i>'+
                                        '</a>'+
                                    '</div>'+
                                '</article>')
                return false;
            }else if(array[0] == 'triple'){
                array[2].append(`<article data-id="${value[array[3]]}" id="expedesc" class="col s12 m10 offset-m1 valign-wrapper">
                                    <div class="col s10 borde-bottom">
                                        <div class="col s12 m5 valign">
                                            <p class="grey-text text-darken-1 center valign">${value[array[4]]}</p>
                                        </div>
                                        <div class="col s4 m3 ">
                                            <p class="grey-text text-darken-1 center valign">${value[array[5]]}</p>
                                        </div>
                                        <div class="col s4 m2 ">
                                            <p class="grey-text text-darken-1 center valign">${value[array[6]]}</p>
                                        </div>
                                    </div>
                                    <div class="col s2 center valign">
                                        <a href="#!" class="btn-floating waves-effect waves-light white btn tooltipped eliminar"><i class="material-icons red-text">delete</i></a>
                                    </div>
                                </article>`)
                return false;
            } else {
                if (value[array[7]] == 1) {
                    var perio = value[array[8]]+' '+value[array[9]]+' - A la Fecha';
                } else {
                    var perio = value[array[8]]+' '+value[array[9]]+' - '+value[array[10]]+' '+value[array[11]];
                }
                array[2].append(`<article data-id="${value[array[3]]}" class="col s12 m10 offset-m1 valign-wrapper expedesc">
                    <div class="col s5 m4">
                        <p><strong>Empresa: </strong><span class="grey-text text-darken-1">${value[array[4]]}</span></p>
                        <p><strong>Puesto: </strong><span class="grey-text text-darken-1">${value[array[5]]}</span></p>
                        <p><strong>Periodo: </strong><span class="grey-text text-darken-1">${perio}</span></p>
                       <p><strong>Referencia: </strong><span class="grey-text text-darken-1">${value[array[12]]}</span></p>
                        <h6 class="grey-text text-darken-1">${value[array[13]]} &nbsp;&nbsp; ${value[array[14]]}</h6>
                    </div>
                    <div class="col s5 m6">
                        <h6>Descripción de Actividades que Realizaba </h6>
                        <p class="grey-text text-darken-1">${value[array[6]]}</p>
                    </div>
                    <div class="col s1 m2 center">
                        <a href="#!" class="btn-floating waves-effect waves-light white btn eliminar"><i class="material-icons red-text">delete</i></a>
                    </div>
                </article>`)
            }
            
        });  

     })
     .fail(function( jqXHR, textStatus, errorThrown ) {  
        Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
    });
}



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

var getDada = {
    init : function(settings) {
        getDada.config = {
            urlB : settings.url,
            $box : settings.box,
            names : settings.names,
            opc  : settings.opc,
        };
        if (getDada.config.opc == 'single') {
            getDada.single();
        } else {
            getDada.doble();
            console.log(getDada.config.opc);
        }
    },
    single : function() {
        $.ajax({
            url   : getDada.config.urlB,
            type  : 'GET', 
            dataType: 'json',
        })
        .done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
            for (var val in data) {
                $(getDada.config.$box).append(`<div data-id="${data[val][getDada.config.names.a]}" class="chip del-chip">
                                    ${data[val][getDada.config.names.b]}
                                    <i class="material-icons">close</i>
                                </div>`)
            }
         })
        .fail(function( jqXHR) {
            //mostrar Cuadro de error Materialize
            Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000); 
            //llamar a funcion /Reset 
        });
    },
    doble : function() {
        $.ajax({
            url   : getDada.config.urlB,
            type  : 'GET', 
            dataType: 'json',
        })
        .done(function ( data, textStatus, jqXHR ) {//getDada.config.names.a
            for (var val in data) {
                $(getDada.config.$box).append(`<article class="col s12 m8 offset-m2 arti-aca-ex">
                                    <div class="col s10 borde-bottom ">
                                        <h6 data-id="${data[val][getDada.config.names.a]}" class="grey-text">${data[val][getDada.config.names.b]} - ${data[val][getDada.config.names.c]}</h6>
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
    },
};
