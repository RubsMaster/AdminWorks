@extends('layouts.principal')

@section('title')
	Registro Candidato
@stop

@section('content')
	<div class="getbackCuenta valign-wrapper"> 

		<div class="container valign">
                    <h3 class="blue-text text-darken-2" align="center">Registro Aspirante Personal <i class="material-icons small ico-aling">person</i></h3>
			<div class="row">
                                <div class="card col s12 m8 offset-m2">
                                 
				@include('errors.message')
				
				{!! Form::open(['route'=>'auth.register-data','method'=> 'POST']) !!}
                                  <br>
		        <div class="input-field col s12 m4 darken-2-text text-darken-2">
		            {!! Form::text('name', old("name"), ['class' => 'validate', 'required' => 'required'])  !!}
		            <label for="name">Nombre<span class="red-text">*</span></label>
		        </div>
		        <div class="input-field col s6 m4 darken-2-text text-darken-2">
		             {!! Form::text('a_paterno', null, ['class' => 'validate', 'required' => 'required'])  !!}
		             <label for="a_paterno">Apellido Paterno<span class="red-text">*</span></label>
		        </div>
		        <div class="input-field col s6 m4 darken-2-text text-darken-2">
		             {!! Form::text('a_materno', null, ['class' => 'validate', 'required' => 'required'])  !!}
		             <label for="a_materno">Apellido Materno<span class="red-text">*</span></label>
		        </div>
        			<div class="input-field col s12 m6 darken-2-text text-darken-2">
        				{!! Form::email('email', null, ['class' => 'validate', 'required' => 'required'])	!!}
        				<label for="email">Correo Electronico<span class="red-text">*</span></label>
        			</div>
        			<div class="input-field col s12 m6 darken-2-text text-darken-2">
        				{!! Form::email('email_confirmation', null, ['class' => 'validate','required' => 'required'])	!!}
        				<label for="email_confirmation">Confirmar Correo Electronico<span class="red-text">*</span></label>
        			</div>
        			<div class="input-field  col s6  darken-2-text text-darken-2 ">
        				{!! Form::password('password', null, ['class' => 'validate','required' => 'required'])	!!}
        				<label for="password">Contraseña<span class="red-text">*</span></label>
        			</div>
        			<div class="input-field  col s6 darken-2-text-text text-darken-2">
        				{!! Form::password('password_confirmation', null, ['class' => 'validate', 'required' => 'required'])	!!}
        				<label for="password_confirmation">Confirmar Contraseña<span class="red-text">*</span></label>
        			</div>
				<label class="label-select blue-text">Fecha de Nacimiento<span class="red-text">*</span></label>
					<div class="row">
						<div class="input-field  col s4 darken-2-text text-darken-2">
							{!! Form::select('date_birth', config('options.date'),old(),['placeholder' => 'Día','required' => 'required','class' =>'browser-default']) !!}
						</div>
						<div class="input-field col s4 darken-2-text text-darken-2">
							{!! Form::select('month_birth', config('options.month'),null,['placeholder' => 'Mes','class' =>'browser-default','required' => 'required']) !!}
						</div>
						<div class="input-field col s4 darken-2-text text-darken-2">
							{!! Form::selectYear('year_birth', date('Y'),1930 ,null,['placeholder' => 'Año','class' =>'browser-default','required' => 'required']) !!}
						</div>
					</div>
					<div class="input-field col s12 darken-2-text text-darken-2">
						<label class="label-select blue-text" for="genero">Genero<span class="red-text">*</span></label>
						{!!Form::select('genero',trans('empleados.genero'), null,['placeholder' => 'Genero','class'=>'browser-default','required' => 'required'])!!}
					</div>
					<div class="row">
							
							<div class="input-field col s12 grey-text text-darken-2 right-align">
                                                            
                                                            <input type ='submit' class="btn waves-effect waves-light black darken-2 "  value = 'REGISTRARME AHORA' onclick="location.href = '{{ route('auth.register') }}'"/>
								
                                                               
			</p>
							</button>
			</div>
                                                            
                                                            
                                                                <p class="grey-text text-darken-2" align="center">**Recuerda**: Completa todos los datos del registro, si no podras postularte a las vacantes y sin uso de la plataforma**
                                                                    
							</div>
						</div>

					</div>


				{!! Form::close() !!}
			</div>
				</div>
			
		</div>
		
	</div>
@stop