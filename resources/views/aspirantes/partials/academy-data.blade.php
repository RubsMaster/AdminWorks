<div class="row card-panel">
	@foreach($user->acadatas as $data)
        <h5 class="blue-text">Desarrollo Profesional y Academico<i class="material-icons left small">school</i>  </h5> 
		<div class="row">
			<div class="col s12 m6 grey-text text-darken-2 ">
				<label class="label-select black-text" for="max_studio">Máximo Nivel de Estudios<span class="red-text">*</span></label>
				{!!Form::select('max_studio',trans('empleados.max_academy'), $data->max_studio, ['class'=>'browser-default validate','placeholder' => 'Máximo Nivel de Estudios','required' => 'required'])!!}
			</div>
			<div class="col s12 m6">
				<div class="input-field col s12 grey-text text-darken-2">
					{!! Form::text('institucion', $data->institucion, ['class' => 'validate'])	!!}
					<label for="institucion">Nombre de Institución<span class="red-text">*</span></label>
				</div>
				<div class="input-field col s12 grey-text text-darken-2">
					{!! Form::text('title_study', $data->title_study, ['class' => 'validate'])	!!}
					<label for="title_study">¿Que estudiaste?<span class="red-text">*</span></label>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m4 l6 ">
				<div class="col s12 m12 l8">
							<h6 class="grey-text text-darken-2">¿Estudias Actualmente?</h6>
				</div>
				<div class="col s12 m12 l4">
					<div class="col s6">
					<input class="with-gap" name="ac_estudia" value="0" type="radio" id="estudiano" @if($data->ac_estudia == "0") checked @endif/>
						<label for="estudiano">NO</label>
					</div>
					<div class="col s6">
						<input class="with-gap" name="ac_estudia" value="1" type="radio" id="estudiasi" @if($data->ac_estudia == "1") checked @endif/>
						<label for="estudiasi">SI</label>
					</div>
				</div>
			</div>
			<div class="col s12 m6">
				<h6 class="black-text">Iniciaste en:</h6>
				<div class="col s6 grey-text text-darken-2 ">
					<label class="label-select black-text" for="mes_start">Mes de Inicio<span class="red-text">*</span></label>
					{!!Form::select('mes_start',trans('empleados.dates'), $data->mes_start , ['placeholder' => 'Elige Mes', 'class' => 'validate','class'=>'browser-default validate']) !!}
				</div>
				<div class="col s6 grey-text text-darken-2 ">
					<label class="label-select black-text" for="year_start">Año de Inicio<span class="red-text">*</span></label>
					{!! Form::selectYear('year_start', date('Y'),1930 ,$data->year_start ,['placeholder' => 'Elige Año','class' =>'browser-default']) !!}
				</div>
				<div id="box-estudiono">
				</br>
					<h6 class="black-text">Terminaste en:</h6>
					<div class="col s6 grey-text text-darken-2 ">
						<label class="label-select black-text" for="mes_fin">Mes de Inicio<span class="red-text">*</span></label>
						{!!Form::select('mes_fin',trans('empleados.dates'), $data->mes_fin, ['placeholder' => 'Elige Mes', 'class' => 'validate','class'=>'browser-default validate']) !!}
					</div>
					<div class="col s6 grey-text text-darken-2 ">
						<label class="label-select black-text" for="year_fin">Año de Termino<span class="red-text">*</span></label>
						{!! Form::selectYear('year_fin',date('Y'), 1930, $data->year_fin,['placeholder' => 'Elige Año','class' =>'browser-default']) !!}
					</div>
				</div>
			</div>
		</div>

	@endforeach
	<div id="sel-dataext" class="row">
		<div class="col s12">
			<h6 class="grey-text text-darken-2">Datos academicos Extras </h6>
		</div>
		<div class="col s12 m10 offset-m1">
			<div class="col s6 m3 grey-text text-darken-2">
				<label class="label-select black-text" for="type_acex">Tipo de Título</label>
				{!!Form::select('type_acex',trans('empleados.type_acext'), null, ['placeholder' => 'Tipo de Título','class' =>'browser-default','id'=>'acaext_tit'])!!}
			</div>
			<div class="input-field col s6 m5 grey-text text-darken-2">
				{!!Form::text('acaext_tit', null ,['id'=>'acaext_tit'])!!}
				<label for="acaext_tit">Nombre de Título</label>
			</div>
			<div class="input-field col s12 m4 center">
				 <a id="addAcademyEx" href="#!" class="waves-effect waves-light btn black"><i class="material-icons left">add_circle</i>Agregar</a>
			</div>
		</div>
	</div>
	<br>
	<div id="box-academy-ext" class="row">
		@foreach($user->acadatexts()->orderBy('id', 'DESC')->get()  as $adaex)
			<article data-id="{{$adaex->id}}" class="col s12 m8 offset-m2 arti-aca-ex">
				 <div class="col s10 borde-bottom ">
					 <h6 class="grey-text">{{ $adaex->type_acex }} - {{$adaex->acaext_tit}}</h6>
				 </div>
				 <div class="col s2 center">
					 <a href="#!" class="btn-floating waves-effect waves-light white btn btn-acade-del">
						 <i class="material-icons red-text">delete</i>
					 </a>
				 </div>
				</article>
				
			

		@endforeach
	</div>
</div>


<!-- #### Termina Datos Academicos #### -->