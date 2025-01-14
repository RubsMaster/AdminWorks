<?php

use Illuminate\Support\Facades\Route;

Route::get('logout', ['as' => 'auth.logout', 'uses' => 'Auth\AuthController@getLogout']);
Route::put('auth/updatepass', ['as' => 'auth.updatepass', 'uses' => 'Auth\AuthController@updatepass']);

// Route::get('/servicies/admin', ['as' => 'services.index', 'uses' => 'ServiciosController@index']);
Route::get('/servicies/create', ['as' => 'services.create', 'uses' => 'ServiciosController@create']);
Route::post('/servicies/store', ['as' => 'services.store', 'uses' => 'ServiciosController@store']);
Route::get('/servicies/{id}/showajax', ['as' => 'services.showajax', 'uses' => 'ServiciosController@showajax']);
Route::get('/servicies/{id}/show', ['as' => 'services.show', 'uses' => 'ServiciosController@show']);
Route::delete('/servicies/{id}/delete', ['as' => 'services.delete', 'uses' => 'ServiciosController@destroy']);
Route::get('/servicies/{id}/edit', ['as' => 'services.edit', 'uses' => 'ServiciosController@edit']);
Route::put('/servicies/update/{id}', ['as' => 'services.update', 'uses' => 'ServiciosController@update']);



// Registration routes...checar el registo de aspirante
Route::get('/registro/candidate', ['as' => 'auth.register', 'uses' => 'Auth\AuthController@getRegister']);

// Registration routes - Aqui va el registro de empresa...




Route::get('/Aspirantes/Servicios', ['as' => 'aspirantes.services.list', 'uses' => 'ServiciosController@list2']);
Route::get('/servicios/{id}/show', ['as' => 'aspirantes.services.show', 'uses' => 'ServiciosController@show2']);

Route::post('/servicios/img/store', ['as' => 'services.imgup', 'uses' => 'MyimgController@store']);
Route::get('/servicios/img/index', ['as' => 'services.index_img', 'uses' => 'MyimgController@index']);
Route::delete('/imagedescrip/{id}/delete', 'MyimgController@destroy');

Route::get('/getCategorias', 'CurriculumController@getCatego');
Route::get('/getOfimatica', 'CurriculumController@getOfimatica');
Route::get('/getSoftware', 'CurriculumController@getSoftware');
Route::get('/getHabilidades', 'CurriculumController@getHabilidad');
Route::get('/getExperiencia', 'CurriculumController@getExperiencia');
Route::get('/getExperiencia', 'CurriculumController@getExperiencia');
