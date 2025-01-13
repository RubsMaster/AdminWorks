//Mostrar imagen
$(function (){
    $.fn.addboximage = function (options) {
        var $this = $(this),
            defaults = {
                box : $("#muestraimg"),
                size : 500000,
                clatri : ''
            },
            opts = $.extend({}, defaults, options);
        $this.on('change', function () {
            $(opts.box).html('');
            var imagen = this.files[0];
            var name =  imagen.name, sizze = imagen.size, type =  imagen.type,
                megas = opts.size / 1000000;

            if ( sizze > opts.size ) {
                $(opts.box).append($("<p>",{ html: "La imagen <span class='grey-text'> "+name+ "</span> supera el máximo tamaño permitido "+ megas+ "MB.",
                    'class' : 'row card-panel orange white-text'} ));
                resetImage(opts.box);
            }else if(type != 'image/jpeg' && type !='image/jpg' && type != 'image/png'){
                $(opts.box).append($("<p>",{ html: "El archivo <span class='grey-text'>" +name+ "</span> no es un tipo de imagen Permitido.",
                    'class' : 'row card-panel orange white-text'} ));
                resetImage();
            }else{
                var reader = new FileReader();
                reader.onload =  function(e){
                    $(opts.box).append("<img src='"+e.target.result+"' class='responsive-img "+ opts.clatri +" '/>");
                };
                reader.readAsDataURL(imagen);
            }
        });

        function getInput(){
            var file_field = $($this).closest('.file-myaddreqben');
            var path_input = file_field.find('input.file-path');
        }
        function resetImage(){
            $this.val('');
            var file_field = $this.closest('.file-field');
            var path_input = file_field.find('input.file-path');
            path_input.val('');
        }
    }

});

$(function () {
    $.fn.clsModalbtn = function (options) {
        var $this = $(this),
            defaults = {
                box : $("#modal1"),
            },
            opts = $.extend({}, defaults, options);

        $($this).click(function (e) {
            e.preventDefault();
            $(opts.box).closeModal();
        });
    }
});

//Subir imagen y mostrar barra de progreso
$(function () {
    $('#myimg').addboximage({box: $("#messimgdes"), size : 1000000});
    var progressFn = function (prog, value) {
        $('#progr_img div').css('width', value+'%');
    }

    $('#unload_form').on('submit', function (e) {
        e.preventDefault();
        var form  = document.getElementById("unload_form"),
            token = $("input[name='_token']").val(),
            route = form.getAttribute('action'),
            host =   $(location).attr('host'),
            form_data = new FormData(form);

        $.ajax({
            url: route,
            type: 'POST',
            dataType: 'json',
            headers	: {'X-CSRF-TOKEN' : token},
            xhr: function() {
                myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload && progressFn){
                    myXhr.upload.addEventListener("progress", function(prog) {
                        var value = ~~((prog.loaded / prog.total) * 100);

                        // if we passed a progress function
                        if (typeof progressFn === "function") {
                            progressFn(prog, value);

                            // if we passed a progress element
                        } else if (progressFn) {
                            $(progressFn).val(value);
                        }
                    }, false);
                }
                return myXhr;
            },
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            beforeSend: function(){
                $('#progr_img ').slideDown();
            }
        }).done(function ( data, textStatus, jqXHR ) {
            $('#unload_form').each(function(){
                this.reset();
            });
            $('#progr_img ').delay().slideUp();
            $('#progr_img div').css('width', '0%');

            $('#showupimg').prepend(`<img src="${ '../../'+data.url }" class="responsive-img" alt="${ data.img }">
									<p>La Url de tu imagen es : http://${host}/${data.url}</p>`).slideDown();


        }).fail(function( jqXHR ) {
            //mostrar Cuadro de error Materialize
            $('#progr_img ').delay().slideUp();
            $('#progr_img div').css('width', '0%');


        });

    });

    $('#clsbtnmodal').on('click', function (e) {
        e.preventDefault();
        $('#modal_img').closeModal();
        $('#unload_form').each(function(){
            this.reset();
        });
        $('#showupimg').empty().slideUp();
        $('#parrupimg').empty().slideUp();


    })
});

//Boton para eliminar elementos
var MYBtnDelete = {
    onReady : function(btn,options) {
        var obj = btn,
            defaults = {
                url : 'miruta',
                _token : 500000,
                _method : 'DELETE'
            },
            opts = $.extend({}, defaults, options);

        MYBtnDelete.appRun(obj);
    },
    appRun : function(obj) {
        var row = obj.parents('article'),
            id  = row.data('id');
        if(id == null){
            row.remove().fadeOut();
            return false;
        }else{
            MYBtnDelete.fundelete();
            return false;
        }
    },
    fundelete : function() {
        var data = {id: actDelete.settings.id, _token: mtoken, _method:'DELETE'};
        var ruta = '/'+ actDelete.settings.url +'/'+actDelete.settings.id+'/delete';
        $.post(ruta, data, function(dtos) {
        })
            .fail(function  (argument) {
                Materialize.toast('La solicitud a fallado. Intentelo m�s Tarde.', 4000);
                actDelete.settings.row.show();
            });
    }
};

$(function () {
    $.fn.addRequiBen = function (options) {
        var $this = $(this),
            defaults = {
                box : $("#mybox"),
                inpname : $("#myreqben"),
                MaxInputs : 11,
                clatri : '',
                data_type:'',
            },
            opts = $.extend({}, defaults, options),
            x = $(opts.box).length + 1,
            FieldCount = x-1;

        $($this).click(function (e) {
            e.preventDefault();

            var box = $($this).closest('.myaddreqben'),
                path_input = box.find('input[type="text"]'),
                valor = $(path_input).val(),
                nombre = path_input.attr('name');

            if(valor == ''){
                path_input.focus();
                Materialize.toast('Completa este Campo', 4000);
                return false;
            }else{
                if(x <= opts.MaxInputs) //max input box allowed
                {
                    FieldCount++;
                    //agregar campo
                    $(opts.box).prepend(cod_html(nombre, valor)).fadeIn();
                    x++; //text box increment
                    path_input.val('');
                    return false;
                }else{
                    var cuenta = FieldCount-1;
                    Materialize.toast('Solo puedes agregar '+cuenta+' elementos.', 4000);
                    path_input.val('');
                }
                return false;
            }

        });

        function cod_html (name_in,value_in) {
            return `<article data-type="${opts.data_type}" class="col s10 m7 offset-m3 borde-bottom">
						<div class="col s10 m9">
							<input type="hidden" name="${name_in}[]" value="${value_in}"/>
							<p>${value_in}</p>
						</div>
						<div class="col s2 m3 right-align">
							<a href="#!" class="btn btn-floating red waves-effect waves-light  my-btn-delete">
								<i class="material-icons white-text">delete</i>
							</a>
						</div>
					</article>`;
        }
    }
});