@extends('company.admin_layout')

@section('title')Crear Un Servicio @stop
@section('titleHeader')Crear Un Servicio  @stop

@section('content')
    @include('company.services.create')
@stop



@section('script')
    {!! Html::script('js/querys/pluemplea2.js') !!}
    {!!Html::script('js/querys/servi.js')!!}
    {!! Html::script('js/querys/script-localidades.js') !!}
    {!! Html::script('js/querys/dinamico.js') !!}
    {!!Html::script('vendors/ckeditor/ckeditor.js')!!}
@stop


