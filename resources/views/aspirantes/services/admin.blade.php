@extends('aspirantes.admin_user')

@section('title')Administración de Servicios @stop
@section('titleHeader')Administración @stop

@section('content')
    {{-- @include('aspirantes.services.admin') --}}
    <p>hola</p>
@stop

@section('script')
    {!! Html::script('js/querys/pluemplea2.js') !!}
    {!!Html::script('js/querys/servi.js')!!}
@stop