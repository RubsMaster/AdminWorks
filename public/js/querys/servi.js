;$(function (){
	$(document).on('click','.des-model', function (e) {
		e.preventDefault();
		var opt = $(this).data('descti'),
			id = opt.id;
		$('#mytitle').empty();
		$('#mytitle').text(opt.title);
		$('#myIdVac').text(id);
	});

	$(document).on('click','.subDesactive', function (e) {
		e.preventDefault();
		var id = $('#myIdVac').text();
		var form = $('#formDesactive'),
			url = form.attr('action').replace(':VACANT_ID',id),
			data = form.serialize();
		$.post(url,data, function (res) {
			location.reload();
		});
	});

	;$(function (){
	$(document).on('click','.rea-model', function (e) {
		e.preventDefault();
		var opt = $(this).data('reacti'),
			id = opt.id;
		$('#mytitle').empty();
		$('#mytitle').text(opt.title);
		$('#myIdVac').text(id);
	});
	$(document).on('click','.subActive', function (e) {
		e.preventDefault();
		var id = $('#myIdVac').text();
		var form = $('#formActive'),
			url = form.attr('action').replace(':VACANT_ID',id),
			data = form.serialize();
		$.post(url,data, function (res) {
			location.reload();
		});
	});
});

$(function () {
	$(document).on('click','.pagination a', function (e) {
		e.preventDefault();
		var page = $(this).attr('href').split('page=')[1];
		getImages(page);
	});

	function getImages(pages){
		$.ajax({
			url: '/servicios/img/index?page='+pages
		})
		.done(function (data) {
			$('#contenImgDescrip').html(data);
		});
	}

	$('#clsbtnmodal2').clsModalbtn({box:'#imagenAdmdes'});
	$('#clsmodalservi').clsModalbtn({box:'#deletmodelservice'});

});

$(function () {
	$('.deleteservice').on('click', function (e) {
		e.preventDefault();
		var row = $(this).parents('article'),
			id = $(this).data('id'),
			text = $(this).data('title-ser');
		DeleteServi(id,text,row);
		$('#deletmodelservice').openModal();
	});

	$('#btn-delete-servi').click(function (e) {
		e.preventDefault();
		var id = $('#inputid').val(),
			form = $('#form-servi-delete'),
			ruta =  form.attr('action').replace(':CAT_ID', id),
			data = form.serialize();

		$.post(ruta, data, function  (data) {
			//
		})
			.done(function (data) {
				$('#myarti'+id).fadeOut();
			})
			.fail(function  (argument) {
				Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000);
			});
	});
});

var DeleteServi = function (id , text) {
	$('#id-servis-name').empty().append('<h5 class="white-text center">'+text+'</h5>');
	$('#inputid').val("");
	$('#inputid').val(id);
};




