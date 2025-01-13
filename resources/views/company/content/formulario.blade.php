<section>
    <div class="row">
        <div class="col s10 offset-s1">
            <h5 class="center">Datos de la Empresa</h5>
            <div class="row">
                <div class="input-field col s12 grey-text text-darken-2">
                    {!! Form::text('nombre_company', null, ['class' => 'validate'])	!!}
                    <label for="nombre_company">Nombre de la Empresa<span class="red-text">*</span></label>
                </div>
                <div class="input-field col s12 grey-text text-darken-2">
                    {!! Form::text('razon_social', null, ['class' => 'validate'])	!!}
                    <label for="razon_social">Raz�n Social<span class="red-text">*</span></label>
                </div>
            </div>
            <div class="row">
                <div class="input-field  col s12 m6  grey-text text-darken-2 ">
                    {!! Form::text('rfc', null, ['class' => 'validate'])	!!}
                    <label for="rfc">RFC<span class="red-text">*</span></label>
                </div>
                <div class="col s12 m6 grey-text text-darken-2">
                    <label class="label-select green-text" for="giro_empresa">Giro Empresarial<span class="red-text">*</span></label>
                    {!!Form::select('giro_empresa',array('1'=>'Alimentos y Bebidas','2'=>'Construci�n e Inmobiliaria','3'=>'Explotaci�n de Recursos Forestales'), null, ['placeholder' => 'Giro Empresarial', 'class' => 'validate browser-default'])!!}
                </div>
            </div>
            <div class="row">
                <div class="col s6 m4  grey-text text-darken-2 ">
                    <label class="label-select green-text" for="pais_id">Pa�s<span class="red-text">*</span></label>
                    {!!Form::select('pais_id',$pais, null, ['class'=>'browser-default','placeholder' => 'Selecciona una opci�n','id'=>'pais_id','required' => 'required'])!!}
                </div>
                <div class="col s6 m4  grey-text text-darken-2 ">
                    <label class="label-select green-text" for="state_id">Estado<span class="red-text">*</span></label>
                    {!!Form::select('state_id',[], null, ['class'=>'browser-default ','placeholder' => 'Selecciona una opci�n','id'=>'state_id','required' => 'required'])!!}
                </div>
                <div class="col s12 m4 grey-text text-darken-2">
                    <label class="label-select green-text" for="mpio_id">Municipio<span class="red-text">*</span></label>
                    {!!Form::select('mpio_id',[], null, ['class'=>'browser-default ','placeholder' => 'Selecciona una opci�n','id'=>'mpio_id','required' => 'required'] )!!}
                </div>
            </div>
            <div class="row">
                <div class="input-field  col s12 grey-text text-darken-2">
                    {!! Form::text('direccion', null, ['class' => 'validate'])	!!}
                    <label for="direccion">Direcci�n<span class="red-text">*</span></label>
                </div>
                <div class="input-field  col s12 grey-text text-darken-2">
                    <textarea id="descripcion" class="materialize-textarea" length="150"></textarea>
                    <label for="descripcion">Descripci�n</label>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="col s12 center " id="selogocom">
                        <img class=" responsive-img" src="{!!asset('img/logo-repuesto.png')!!}">
                    </div>
                    <div class="file-field input-field">
                        <div class="btn lime green-text">
                            <span>Logo</span>
                            <input name="logo_company" id="res_logo_com" type="file">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="input-field  col s12 grey-text text-darken-2">
                        {!! Form::text('pagina_web', null,array('lenght' => '120'))	!!}
                        {!!	Form::label('pagina_web','P�gina Web de la Empresa')	!!}
                    </div>
                    <div class="col s12">
                        <label for="tipo_empresa">Tipo de Empresa</label>
                        <p>
                            <input name="group1" type="radio" id="check1" checked="checked" />
                            <label for="check1">Empleado Directo</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="check2"  />
                            <label for="check2">Servicios Temporales</label>
                        </p>
                        <p>
                            <input name="group1" type="radio" id="check3"  />
                            <label for="check3">De Reclutamiento</label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="divider"></div>