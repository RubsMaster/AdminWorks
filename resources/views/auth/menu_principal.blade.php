

<div class="linea-header"></div>
@include('errors.mensaje')
<nav class="black">
	<ul id="slide-out" class="side-nav textoNavBar">
		@if (Auth::guest())
			<li><a class="modal-trigger" href="#modal1"><i class="small material-icons right">account_circle</i>Inicia Sesión</a></li>
		@else
		    <li class="no-padding">
		      <ul class="collapsible collapsible-accordion">
		        <li>
		          <a class="collapsible-header">{{ Auth::user()->FullName }}<i class="mdi-navigation-arrow-drop-down"></i></a>
		          <div class="collapsible-body">
		            <ul>
		              	<li><a href="{{ route('adminuser.home') }}">Mi Panel</a></li>

						<li><a href="{{ route('auth.logout') }}">Salir</a></li>
		            </ul>
		          </div>
		        </li>
		      </ul>
		    </li>
		    <li class="divider"></li>
		@endif
    <nav class="black">
	    <li><a href="{{ route('frontend.index')}} " class="brand-logo"><img src="{!! asset('img/adminworks.jpg') !!}"> ">Inicio </a></li>  
	    <li class="no-padding">
	      <ul class="collapsible collapsible-accordion">
	        <li>
	          <a class="collapsible-header">Aspirantes<i class="mdi-navigation-arrow-drop-down"></i></a>
	          <div class="collapsible-body">
	            <ul>
	              	<li><a href="{{ route('auth.register') }}">Registrarme </a></li>
					<li><a href="{{ route('password.getcuenta') }}">Recuperar Cuenta</a></li>
					<li class="divider"></li>
					<li><a href="">Paquetes(NA)</a></li>
	            </ul>
	          </div>
	        </li>
	      </ul>
	    </li>
	    <li class="no-padding">
	      <ul class="collapsible collapsible-accordion">
	        <li>
	          <a class="collapsible-header">Empresa<i class="mdi-navigation-arrow-drop-down"></i></a>
	          <div class="collapsible-body">
	            <ul>
					
					<li><a href="{{ route('auth.register-com') }}">Registrar Empresa</a></li>
					<li><a href="{{ route('frontend.company.anuncios') }}">Preguntas Frecuentes </a></li>
					<li class="divider"></li>
	            </ul>
	          </div>
	        </li>
	      </ul>
	    </li>
  	</ul>
  	<a href="{{ route('frontend.index') }}" class="brand-logo"><img src="{!! asset('img/adminworks.jpg') !!}"></a>

  	<ul class="right hide-on-med-and-down">
		<li>
			<a href="{{ route('frontend.index') }}">Inicio </a>
		</li>
	    <li>
	    	<a class="dropdown-button" href="#!" data-activates="dropdown1">Aspirante<i class="mdi-navigation-arrow-drop-down right"></i></a>
	    </li>
	    <li>
	    	<a class="dropdown-button" href="#!" data-activates="dropdown2">Empresa<i class="mdi-navigation-arrow-drop-down right"></i></a>
	    </li>
	    <li><a href="#!">Servicio </a></li>
		@if (Auth::guest())
			<li>
				<a class="modal-trigger" href="#modal1"><i class="small material-icons right">account_circle</i>Inicia Sesión</a>
			</li>
		@else
			<li>
				<a class="dropdown-button" href="#!" data-activates="dropdown3">{{ Auth::user()->FullName }}<i class="mdi-navigation-arrow-drop-down right"></i></a>
			</li>
		@endif
	    <ul id='dropdown1' class='dropdown-content2 dropdown-content'>
	      	<li><a href="{{ route('auth.register') }}">Registrarme </a></li>
			<li><a href="{{ route('auth.updatepass') }}">Recuperar Cuenta</a></li>
			<li class="divider"></li>
			<li><a href="{{ route('frontend.preguntas') }}">Preguntas Frecuentes</a></li>
	    </ul>
	    <ul id='dropdown2' class='dropdown-content2 dropdown-content'>
	      	<li><a href="{{ route('frontend.company.anuncios') }}">Preguntas Frecuentes</a></li>																																																																									</Informacion> </a></li>
			<li><a href="{{ route('auth.register-com') }}">Registrar Empresa</a></li>
			<li class="divider"></li>
	
	    </ul>
	    <ul id='dropdown3' class='dropdown-content2 dropdown-content'>
	      	<li><a href="{{ route('admin_user.home') }}">Mi Panel</a></li>
			<li class="divider"></li>
			<li><a href="{{ route('auth.logout') }}">Salir</a></li>
	    </ul>
  	</ul>
  	<a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu">
  </i></a>  
</nav>



