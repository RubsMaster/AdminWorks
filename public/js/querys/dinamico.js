/////////////
var MaxInputs       = 8; //Número Maximo de Campos
var mtoken      = $('input[name="_token"]').val();
var myajax = {
    init : function(settings) {
        myajax.settings = settings;
        myajax.fnajax();
    },
    tomadatos : function() {
        console.log(myajax.settings.datos);
    },
    fnajax : function(){
        $.ajax({
            url   : myajax.settings.url,
            headers : {'X-CSRF-TOKEN' : mtoken},
            type  : 'POST', 
            dataType: 'json',
            data  : myajax.settings.datos.val,
        })
        .done(function ( data, textStatus, jqXHR ) {
            //myajax.settings.box.lastins(myajax.settings.json);
            if( data.message == null ){
                if (myajax.settings.datos.obj == 'single') {
                    myajax.single(data);
                } else if (myajax.settings.datos.obj == 'singleformal') {
                    myajax.singleformal(data);
                } else if (myajax.settings.datos.obj == 'double') {
                    myajax.double(data);
                } else if(myajax.settings.datos.obj == 'triple'){
                    myajax.triple(data);
                }else {
                    myajax.experience(data);
                }
            }
                Materialize.toast(data.message, 40000);

         })
        .fail(function( jqXHR ) {
            //mostrar Cuadro de error Materialize
            Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 40000);

        });
    },
    single: function (argument) {
        myajax.settings.box.prepend(`<div data-id="${argument[myajax.settings.datos.names.a]}" class="chip del-chip green lighten-4">
                                      ${argument[myajax.settings.datos.names.b]}
                                      <i class="material-icons ${myajax.settings.datos.del}">close</i>
                                  </div>`).slideDown(600);
    },
    double: function (argument) {
        myajax.settings.box.prepend(`<article data-id="${argument[myajax.settings.datos.names.a]}" class="col s12 m8 offset-m2 arti-aca-ex">
                                    <div class="col s10 borde-bottom ">
                                        <h6 class="grey-text">${argument[myajax.settings.datos.names.b]} - ${argument[myajax.settings.datos.names.c]}</h6>
                                    </div>
                                    <div class="col s2 center">
                                        <a href="#!" class="btn-floating waves-effect waves-light white btn ${myajax.settings.datos.del}">
                                            <i class="material-icons red-text">delete</i>
                                        </a>
                                    </div>
                                </article>`).slideDown(600);
    },
    triple: function (argument) {
        myajax.settings.box.prepend(`<article data-id="${argument[myajax.settings.datos.names.a]}" id="expedesc" class="col s12 m10 offset-m1 valign-wrapper">
                              <div class="col s10 borde-bottom">
                                  <div class="col s12 m5 valign">
                                      <p class="grey-text text-darken-1 center valign">${argument[myajax.settings.datos.names.b]}</p>
                                  </div>
                                  <div class="col s4 m3 ">
                                      <p class="grey-text text-darken-1 center valign">${argument[myajax.settings.datos.names.c]}</p>
                                  </div>
                                  <div class="col s4 m2 ">
                                      <p class="grey-text text-darken-1 center valign">${argument[myajax.settings.datos.names.d]}</p>
                                  </div>
                              </div>
                              <div class="col s2 center valign">
                                  <a href="#!" class="btn-floating waves-effect waves-light white btn ${myajax.settings.datos.del}"><i class="material-icons red-text">delete</i></a>
                              </div>
                          </article>`).slideDown(600);
    },
    singleformal: function(argument){
        myajax.settings.box.prepend(`<article data-id="${argument[myajax.settings.datos.names.a]}" class="col s10 m7 offset-m3 borde-bottom">
                                        <div class="col s10 m9">
                                            <p>${argument[myajax.settings.datos.names.b]}</p>
                                        </div>
                                        <div class="col s2 m3 right-align">
                                            <a href="#!" class="btn btn-floating red waves-effect waves-light  ${myajax.settings.datos.del}">
                                                <i class="material-icons white-text">delete</i>
                                            </a>
                                        </div>
                                    </article>`);
    },
    experience: function (argument) {
        if (argument[myajax.settings.datos.names.e] == 1) {
            var periodo =  'A la Fecha.';
        } else {
            var periodo = argument[myajax.settings.datos.names.h]+' '+argument[myajax.settings.datos.names.i];
        }
        myajax.settings.box.prepend(`<article data-id="${argument[myajax.settings.datos.names.a]}" class="col s12 valign-wrapper expedesc green lighten-4 ">
                  <div class="col s11 m11">
                     <ul class="experien">
                        <li><strong>Puesto: </strong>${argument[myajax.settings.datos.names.c]}</li>
                        <li><strong>Periodo: </strong>${argument[myajax.settings.datos.names.f]+' '+argument[myajax.settings.datos.names.g]} - ${periodo}</li>
                        <li><strong>Empresa: </strong>${argument[myajax.settings.datos.names.b]}</li>
                        <li><strong>Referencia: </strong>${argument[myajax.settings.datos.names.j]} &nbsp;&nbsp; ${argument[myajax.settings.datos.names.k]} &nbsp;&nbsp; ${argument[myajax.settings.datos.names.l]}</li>
                     </ul>
                     <div class="div-experien">
                        <h6 class="orange-text">Descripción de Actividades que Realizaba </h6>
                        <p>${argument[myajax.settings.datos.names.d]}</p>
                     </div>
                  </div>
                  <div class="col s1 m1 right-align">
                      <a href="#!" class="btn-floating waves-effect waves-light white btn ${myajax.settings.datos.del}"><i class="material-icons red-text">delete</i></a>
                  </div>
              </article>`).slideDown(600);
    }

};


$("#addAcademyEx").click(function (e) {
    e.preventDefault();
    var ty = $('select[name="type_acex"]');
    var tl = $('input[name="acaext_tit"]'); 

    if( ty.val() == "" ){
        ty.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }else if( tl.val() == ""){
        tl.focus();
        Materialize.toast('Completa este Campo', 4000);
        return false;
    }
    var a ={obj:'double',
            del:'btn-acade-del',
            val:{type_acex:ty.val(), acaext_tit:tl.val()},
            names:{a:'id',b:'type_acex',c:'acaext_tit'}
            };
    var objData = {
        url     : '/academicDaExt/store',
        datos   : a,
        box     : $('#box-academy-ext'),
    };

    myajax.init(objData);
    ty.val($('select[name="type_acex"] option:first').val());
    tl.val('');
});

$("#addIdioma").click(function (e) {
     e.preventDefault();
    var im = $('select[name="idioma"]');
    var inl = $('select[name="idioma_nivel"]'); 

    if( im.val() == "" ){
        im.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }else if( inl.val() == ""){
        inl.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }
    var a ={obj:'double',
            del:'btn-lang-del',
            val:{idioma:im.val(), idioma_nivel:inl.val()},
            names:{a:'id',b:'idioma',c:'idioma_nivel'}
        };
    var objData = {
        url     : '/idiomas/store',
        datos   : a,
        box     : $('#box-idiooma')
    };

    myajax.init(objData);
    im.val($('select[name="idioma"] option:first').val());
    inl.val($('select[name="idioma_nivel"] option:first').val());
});

$("#addExperiencia").click(function (e) {
    e.preventDefault();
    var emp = $('input[name="empresa_exp"]');
    var puest = $('input[name="puesto_exp"]');
    var desc = $('textarea[name="descrip_exp"]');
    var refern = $('input[name="referencia"]');
    var pue_ref = $('input[name="puesto"]');
    var tel = $('input[name="tel_experien"]');
    var mo_ini = $('select[name="mo_ini_exp"]');
    var y_ini = $('select[name="y_ini_exp"]');
    var mo_fin = $('select[name="mo_fin_exp"]');
    var y_fin = $('select[name="y_fin_exp"]');

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
        mo_ini.focus();
        return false;
    }
    if (!$('#to_date').is(':checked')) {
        if( mo_fin.val() == ""){
            Materialize.toast('Selecciona una Opción', 4000);
            var mo = $('select[name="mo_fin_exp"]');
            mo.focus();
            return false;
        }
    }else if( refern.val() == ""){
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
    var perio = $('#to_date').is(':checked')? 1: 0; 

    var a ={obj:'experience',
            del:'btn-exper-del',
            val:{empresa_exp:emp.val(),puesto_exp:puest.val(),descrip_exp:desc.val(),
                to_date: perio, mo_ini_exp: mo_ini.val(), y_ini_exp:y_ini.val()
                ,mo_fin_exp:mo_fin.val(),y_fin_exp:y_fin.val(),referencia:refern.val(),
                puesto:pue_ref.val(), tel_experien: tel.val()},
            names:{a:'id',b:'empresa_exp',c:'puesto_exp',d:'descrip_exp',e:'to_date'
                    ,f:'mo_ini_exp',g:'y_ini_exp',h:'mo_fin_exp',i:'y_fin_exp',
                    j:'referencia',k:'puesto' , l:'tel_experien'}
        };
    var objData = {
        url     : '/experience/store',
        datos   : a,
        box     : $('#boxExperiencia')
    };

    myajax.init(objData);
    emp.val('');
    puest.val('');
    desc.val('');
    refern.val('');
    pue_ref.val('');
    tel.val('');
    mo_ini.val($('select[name="mo_ini_exp"] option:first').val());
    y_ini.val($('select[name="y_ini_exp"] option:first').val());
    mo_fin.val($('select[name="mo_fin_exp"] option:first').val());
    y_fin.val($('select[name="y_fin_exp"] option:first').val());
});

$("#addAsigCat").click(function (e) {
     e.preventDefault();
    var cat = $('select[name="category_id"]');
    var sub = $('select[name="subcategory_id"]'); 

    if( cat.val() == "" ){
        cat.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }else if( sub.val() == ""){
        sub.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }
    var a ={obj:'double',
            del:'btn-asigcat-del',
            val:{category_id:cat.val(), subcategory_id:sub.val()},
            names:{a:'id',b:'category',c:'subcategory'}
        };
    var objData = {
        url     : '/asignacioncatego/store',
        datos   : a,
        box     : $('#box-categoria')
    };

    myajax.init(objData);
    cat.val($('select[name="category_id"] option:first').val());
    sub.empty();;
    sub.append("<option value='' selected='selected'>Subcategoría</option>");
});


$("#addOffice").click(function (e) {
     e.preventDefault();
    var ab = $('select[name="ofimatica"]');

    if( ab.val() == "" ){
        ab.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }
    var a ={obj:'single',
            del:'btn-offim-del' ,
            val:{ofimatica:ab.val()},
            names:{a:'id',b:'ofimatica'}
        };
    var objData = {
        url     : '/ofimatica/store',
        datos   : a,
        box     : $('#box-office')
    };

    myajax.init(objData);
    ab.val($('select[name="ofimatica"] option:first').val());

});
$("#addSoft").click(function (e) {
     e.preventDefault();
    var ab = $('input[name="software"]');

    if( ab.val() == "" ){
        ab.focus();
        Materialize.toast('Completa este Campo', 4000);
        return false;
    }
    var a ={obj:'single',
            del:'btn-soft-del',
            val:{software:ab.val()},
            names:{a:'id',b:'software'}
        };
    var objData = {
        url     : '/software/store',
        datos   : a,
        box     : $('#box-software')
    };

    myajax.init(objData);
    ab.val('');

});
$("#addHabilidad").click(function (e) {
    e.preventDefault();
    var ab = $('input[name="ability"]');
    var ni = $('select[name="nivel"]');
    var ye = $('select[name="year_exp"]');

    if( ab.val() == "" ){
        ab.focus();
        Materialize.toast('Completa este Campo', 4000);
        return false;
    }else if( ni.val() == ""){
        ni.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }
    else if( ye.val() == ""){
        ye.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }

    var a ={obj:'triple',
            del:'btn-ability-del',
            val:{ability:ab.val(),nivel:ni.val(),year_exp:ye.val()},
            names:{a:'id',b:'ability',c:'nivel',d:'year_exp'}
        };
    var objData = {
        url     : '/ability/store',
        datos   : a,
        box     : $('#boxHabilidad')
    };

    myajax.init(objData);
    ab.val('');
    ni.val($('select[name="nivel"] option:first').val());
    ye.val($('select[name="year_exp"] option:first').val());

});

$("#updateRequisito").click(function (e) {
    e.preventDefault();
    var ab = $('input[name="requisito"]'),
        id = $(this).data('vac');

    if( ab.val() == "" ){
        ab.focus();
        Materialize.toast('Completa este Campo', 4000);
        return false;
    }
    var a ={obj:'singleformal',
        del:'btn-required-del' ,
        val:{demand:ab.val()},
        names:{a:'id',b:'demand'}
    };
    var objData = {
        url     : '/demands/' + id + '/store',
        datos   : a,
        box     : $('#requisitosagre')
    };

    myajax.init(objData);
    ab.val('');

});
$("#updateBeneficio").click(function (e) {
    e.preventDefault();
    var ab = $('input[name="beneficio"]'),
        id = $(this).data('vacbe');

    if( ab.val() == "" ){
        ab.focus();
        Materialize.toast('Completa este Campo', 4000);
        return false;
    }
    var a ={obj:'singleformal',
        del:'btn-benefits-del' ,
        val:{benefit:ab.val()},
        names:{a:'id',b:'benefit'}
    };
    var objData = {
        url     : '/benefits/' + id + '/store',
        datos   : a,
        box     : $('#beneficiosagre')
    };

    myajax.init(objData);
    ab.val('');

});
$("#addIdiomaVacant").click(function (e) {
    e.preventDefault();
    var im = $('select[name="idioma"]'),
        inl = $('select[name="idioma_nivel"]'),
        id = $(this).data('langvac');

    if( im.val() == "" ){
        im.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }else if( inl.val() == ""){
        inl.focus();
        Materialize.toast('Selecciona una Opción', 4000);
        return false;
    }
    var a ={obj:'double',
        del:'btn-langvac-del',
        val:{idioma:im.val(), idioma_nivel:inl.val()},
        names:{a:'id',b:'idioma',c:'idioma_nivel'}
    };
    var objData = {
        url     : '/idiomas-vacante/' + id + '/store',
        datos   : a,
        box     : $('#lenguajeagre')
    };

    myajax.init(objData);
    im.val($('select[name="idioma"] option:first').val());
    inl.val($('select[name="idioma_nivel"] option:first').val());
});

//Delete
var actDelete = {
    onReady : function(argument) {
        actDelete.settings = argument;
        actDelete.fundelete();
    },
 
    fundelete : function() {
        var data = {id: actDelete.settings.id, _token: mtoken,_method:'DELETE'};
        var ruta = '/'+ actDelete.settings.url +'/'+actDelete.settings.id+'/delete';
        $.post(ruta, data, function(dtos) {
        
        })
        .fail(function  (argument) {
            Materialize.toast('La solicitud a fallado. Intentelo más Tarde.', 4000);
            actDelete.settings.row.show(); 
        });
    },
};

$("#box-academy-ext").on("click",".btn-acade-del", function(e){ //click en eliminar campo
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'academicDaExt'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});

$("#box-idiooma").on("click",".btn-lang-del", function(e){
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'idiomas'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});
$("#box-categoria").on("click",".btn-asigcat-del", function(e){
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'asignacioncatego'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});
///boxExperiencia 
$("#boxExperiencia").on("click",".btn-exper-del", function(e){
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'experience'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});
$("#box-office").on("click",".btn-offim-del", function(e){
    e.preventDefault();
    var row = $(this).parent('div');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'ofimatica'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});

$("#box-software").on("click",".btn-soft-del", function(e){
    e.preventDefault();
    var row = $(this).parent('div');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'software'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});
$("#boxHabilidad").on("click",".btn-ability-del", function(e){
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'ability'};
    row.fadeOut();

    actDelete.onReady(obj);
    
    return false;
});
$("#upCurriculum").on("click",".btn-upcurriculum-del", function(e){
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'archive'};
    row.fadeOut();

    actDelete.onReady(obj);

    return false;
});

$('#contenImgDescrip').on("click",".btn-imgdesc-del", function(e){ //click en eliminar campo
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'imagedescrip'};
    row.fadeOut();

    actDelete.onReady(obj);

    return false;
});
$("#requisitosagre").on("click",".btn-required-del", function(e){ //click en eliminar campo
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'demands'};
    row.fadeOut();

    actDelete.onReady(obj);

    return false;
});

$("#requisitosagre").on("click",".btn-required-del", function(e){ //click en eliminar campo
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'demands'};
    row.fadeOut();

    actDelete.onReady(obj);

    return false;
});

$("#lenguajeagre").on("click",".btn-langvac-del", function(e){ //click en eliminar campo
    e.preventDefault();
    var row = $(this).parents('article');
    var id  = row.data('id');
    var obj = {row: row, id: id, url:'idiomas-vacante'};
    row.fadeOut();

    actDelete.onReady(obj);

    return false;
});