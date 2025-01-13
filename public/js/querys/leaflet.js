;$(function () {
    $('#inputFile').addboximage();
    $('#res_logo_com').addboximage({box: $("#selogocom")});
    $('#img-aspi').addboximage({clatri: 'circle'});
    $('#img_service').addboximage({size: 1000000});

    ///
    $('#closeModalDesactive').clsModalbtn({box: '#mimodal'});
    $('#clsmodalleaflet').clsModalbtn({box:'#delmodelleaflet'});
});

$(function () {
    $(document).on('click','.btn-get-prospect', function (e) {
        e.preventDefault();
        $('#preloader-pros').show();
        var id = $(this).data('idprosp');
        getProspect(id);
    });

    function getProspect(id){
        $.ajax({
            url: '/company/prospect/' + id + '/show'
        })
            .done(function (data) {
                $('#preloader-pros').hide();
                $('#boxprospect').empty();
                $('#boxprospect').html(data);
                $('#printProspect').attr( 'href','#!');
                console.log(id);
                $('#printProspect').attr( 'href','/cv/pdf/'+id);
            });
    }
    $('#closeModelProspect').on('click', function (e) {
        e.preventDefault();
        $('#mod-detalle-prospect').closeModal();
        $('#boxprospect').empty();
    })
});

$(function () {
    var mybtndel;
    var mybtn;
    $('.agreeLeafletUs').click(function (e) {
        e.preventDefault();
        var id = $(this).data('usid'),
            form = $('#formAgreeLeaflet'),
            ruta =  form.attr('action').replace(':CAT_ID', id),
            data = form.serialize();

        $.post(ruta, data, function  (data) {
            //
        })
            .done(function (data) {
                //console.log('si');
                mybtndel = $('<button>', {
                    'type' : 'button',
                    'class' : 'btn-floating waves-effect waves-light lime btn tooltipped deleteLeafletUs',
                    html : '<i class="material-icons green-text">thumb_down</i>',
                    'id' : 'mybtnleafletDel'+data.id,
                    /*'data-usiddel' : data.id,
                    'data-position' : 'top',
                    'data-delay' : '50',
                    'data-tooltip' : 'Eliminar de mis Prospectos',
                    */
                });
                $('#mybtnleaflet'+data.id).detach();
                $('#myspamcontbtnleaflet'+data.id).prepend(mybtndel);
                Materialize.toast('Prospecto Agregado', 4000);
                //$('#myspamcontbtnleaflet').append(mybtn);
            })
            .fail(function  (argument) {
                Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000);
            });
    });

    $('.deleteleaflet').on('click', function (e) {
        e.preventDefault();
        var row = $(this).parents('article'),
            id = $(this).data('id'),
            text = $(this).data('name');
        DeleteLeaflet(id,text,row);
        $('#delmodelleaflet').openModal();
    });

    $('#btn-delete-leaflet').click(function (e) {

        var id = $('#inputid').val(),
            form = $('#form-leaflet-delete'),
            ruta =  form.attr('action').replace(':CAT_ID', id),
            data = form.serialize();

        $.post(ruta, data, function  (data) {
            //
        })
            .done(function (data) {
                //$('#myleaflet'+id).slideUp();
                location.reload();
            })
            .fail(function  (argument) {
                Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000);
            });
    });

    $('.deleteLeafletUs').click(function (e) {
        e.preventDefault();
        var id = $(this).data('usiddel'),
            form = $('#formDeleteLeaflet'),
            ruta =  form.attr('action').replace(':CAT_ID', id),
            data = form.serialize();
        console.log(id);
        $.post(ruta, data, function  (data) {
            //
        })
            .done(function (data) {
                //console.log('si');
                mybtn = $('<button></button>', {
                    'class' : 'btn-floating waves-effect waves-light lime btn tooltipped agreeLeafletUs',
                    html : '<i class="material-icons">thumb_up</i>',
                    'type' : 'button',
                    'id' : 'mybtnleaflet'+data.id,
                    /*'data-usid' : data.id,
                    'data-position' : 'top',
                    'data-delay' : '50',
                    'data-tooltip' : 'Agregar a mis Prospectos',
                    */
                });
                $('#mybtnleafletDel'+data.id).detach();
                $('#myspamcontbtnleaflet'+data.id).prepend(mybtn);
                Materialize.toast('Prospecto Eliminado', 4000);
                //$('#myspamcontbtnleaflet').append(mybtn);
            })
            .fail(function  (argument) {
                Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000);
            });
    });

});

var DeleteLeaflet = function (id , text) {
    $('#id-servis-name').empty().append('<h5 class="white-text center">'+text+'</h5>');
    $('#inputid').val("");
    $('#inputid').val(id);
};