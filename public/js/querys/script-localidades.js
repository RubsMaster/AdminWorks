$(function  () {

	$.fn.pupulateSelect = function (value) {
		var options = '';
		$.each(value, function (key, row) {
			options += `<option value="${ row.value }">${ row.text }</option>`;
		});
		$(this).html(options);
	}

	$("#pais_id").change(function() {
		$('#mpio_id').empty().append("<option value='' selected='selected'>Selecciona una opción</option>");
		var pais_id = $(this).val();

		if(pais_id == ''){
			$('#state_id').empty().change().append("<option value='' selected='selected'>Selecciona una opción</option>");
		}else{
			$.getJSON('/estados/'+pais_id, null, function(values){
				//console.log(JSON.stringify(data));
				$('#state_id').pupulateSelect(values);
			});
		}
	});

	$("#state_id").change(function() {
		var state_id = $(this).val();
		if(state_id == ''){
			$('#mpio_id').empty().append("<option value='' selected='selected'>Selecciona una opción</option>");
		}else{
			$.getJSON('/municipios/'+state_id, null, function(values){
				//console.log(JSON.stringify(data));
				$('#mpio_id').pupulateSelect(values);
			});
		}
	});

	$("#category_id").change(function() {
		var catego_id =  $(this).val();
		if(catego_id == ''){
			$("#subcategory_id").empty().change();
			$("#subcategory_id").append("<option value='' selected='selected'>Selecciona una opción</option>");
		}else{
			$.getJSON('/subcategoria/'+catego_id, null, function(values){
				//console.log(JSON.stringify(data));
				$('#subcategory_id').pupulateSelect(values);
			});
		}
	});
});
$(function () {
	$("#to_date").change(function() {
	    if ($('#to_date').is(':checked')) {
			$('select[name="mo_fin_exp"]').attr('disabled', 'disabled');
			$('select[name="y_fin_exp"]').attr('disabled', 'disabled');
			return false;
		}else{
			$('select[name="mo_fin_exp"]').removeAttr('disabled');
			$('select[name="y_fin_exp"]').removeAttr('disabled');
			return false;
		}
	});		
});

$(function () {
	if ($("#lic2").is(':checked')) {
		$('input[name="tipo_licencia"]').removeAttr("disabled");
	}
	$("#lic1").change(function() {
	    if ($('#lic1:checked')) {
			$('#lic2').removeAttr("checked");
			$('input[name="tipo_licencia"]').attr('disabled', 'disabled');
		}
	});
	$("#lic2").change(function() {
	    if ($('#lic2:checked')) {
			$('#lic1').removeAttr("checked");
			$('input[name="tipo_licencia"]').removeAttr("disabled");
		}
	});
});

$(function () {
	if ($('#estudiasi').is(':checked')) {
		$('select[name="mes_fin"]').attr('disabled', 'disabled');
		$('select[name="year_fin"]').attr('disabled', 'disabled');
	}
	$('#estudiano').change(function() {
		if ($('#estudiano:checked')) {
			$('select[name="mes_fin"]').removeAttr('disabled', 'disabled');
			$('select[name="year_fin"]').removeAttr('disabled', 'disabled');
		}
	});
	$("#estudiasi").change(function() {
		if ($('#estudiasi:checked')) {
			$('select[name="mes_fin"]').attr('disabled', 'disabled');
			$('select[name="year_fin"]').attr('disabled', 'disabled');
		}
	});
});


$(function () {
	$('#addIdioma').click(function (e) {
		e.preventDefault();
		var $this = $(this),
			MaxInputs = 5,
			caja = $('#lenguajeagre');
		x = $("#lenguajeagre article").length + 1,
			FieldCount = x-1,
			prope = '',
			myinput = caja.find('.clanguage'),
			myarrayin =$.makeArray(myinput);

		var type_idioma = $('select[name="idioma"]').val(),
			type_idioma_tex = $('select[name="idioma"] option:selected').text(),
			type_nivel = $('select[name="idioma_nivel"]').val(),
			type_nivel_tex = $('select[name="idioma_nivel"] option:selected').text();

		if( type_idioma == "" ){
			$($('select[name="idioma"]')).focus();
			Materialize.toast('Selecciona una Opción', 4000);
			return false;
		}else if( type_nivel == ""){
			$($('select[name="idioma_nivel"]')).focus();
			Materialize.toast('Selecciona una Opción', 4000);
			return false;
		}
		var mylen = $('#lenguajeagre input[name="language[]"]')
		if(mylen.length){
			for(var i = 0;myarrayin.length;i++){
				var prope =$(myarrayin[i]).val();
				if(type_idioma_tex == prope){
					Materialize.toast('El Idioma ya ha sido seleccionado.', 4000);
					$('select[name="idioma"]').val($('select[name="idioma"] option:first').val());
					$('select[name="idioma_nivel"]').val($('select[name="idioma_nivel"] option:first').val());
					return false;
				}else{
					if(i == myarrayin.length){
						if(x <= MaxInputs) //max input box allowed
						{
							FieldCount++;
							//agregar campo
							$(caja).prepend(cod_html(type_idioma_tex, type_nivel_tex)).fadeIn();
							x++; //text box increment
							$('select[name="idioma"]').val($('select[name="idioma"] option:first').val());
							$('select[name="idioma_nivel"]').val($('select[name="idioma_nivel"] option:first').val());
							return false;
						}else{
							Materialize.toast('Solo puedes agregar '+MaxInputs+' elementos.', 4000);
							$('select[name="idioma"]').val($('select[name="idioma"] option:first').val());
							$('select[name="idioma_nivel"]').val($('select[name="idioma_nivel"] option:first').val());
							break;
						}
					}
					continue
				}
			}
		}else{
			if(x <= MaxInputs) //max input box allowed
			{
				FieldCount++;
				//agregar campo
				$(caja).prepend(cod_html(type_idioma_tex, type_nivel_tex)).fadeIn();
				x++; //text box increment
				$('select[name="idioma"]').val($('select[name="idioma"] option:first').val());
				$('select[name="idioma_nivel"]').val($('select[name="idioma_nivel"] option:first').val());
				return false;
			}else{
				Materialize.toast('Solo puedes agregar '+MaxInputs+' elementos.', 4000);
				$('select[name="idioma"]').val($('select[name="idioma"] option:first').val());
				$('select[name="idioma_nivel"]').val($('select[name="idioma_nivel"] option:first').val());
				return false;
			}
		}


		function cod_html (value_sel1,value_sel2) {
			return `<article data-type="vacante-idioma" class="col s10 m7 offset-m3 borde-bottom">
						<div class="col s10 m9">
							<input type="hidden" class="clanguage" name="language[]" value="${value_sel1}"/>
							<input type="hidden" name="type_language[]" value="${value_sel2}"/>
							<p>${value_sel1} - ${value_sel2}</p>
						</div>
						<div class="col s2 m3 right-align">
							<a href="#!" class="btn btn-floating red waves-effect waves-light  my-btn-delete">
								<i class="material-icons white-text">delete</i>
							</a>
						</div>
					</article>`;
		}
	});
});

$(function () {
	$('#addRequisito').addRequiBen({box: $('#requisitosagre'),data_type:'requisitos'});
	$('#addBenificio').addRequiBen({box: $('#beneficiosagre'),data_type:'beneficios'});
	$('body').on('click',".my-btn-delete", function (e) {
		e.preventDefault();
		MYBtnDelete.onReady($(this));
	});

	$('#public_min_pay').change(function() {
		if (!$('#public_min_pay').is(':checked')) {
			$('input[name="min_salary"]').attr('disabled', 'disabled');
		}else{
			$('input[name="min_salary"]').removeAttr('disabled', 'disabled');
		}
	});
	if ($('#public_min_pay').is(':checked')) {
		$('input[name="min_salary"]').removeAttr('disabled', 'disabled');
	}
	$('#public_max_pay').change(function() {
		if (!$('#public_max_pay').is(':checked')) {
			$('input[name="max_salary"]').attr('disabled', 'disabled');
		}else{
			$('input[name="max_salary"]').removeAttr('disabled', 'disabled');
		}
	});
	if ($('#public_max_pay').is(':checked')) {
		$('input[name="max_salary"]').removeAttr('disabled', 'disabled');
	}
});
