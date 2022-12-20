<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::resource('restaurant', 'api\FrontendController'); // abilito il controller api
Route::get('menu/{slug}', 'api\DishController@show');
Route::post('process-payment', 'api\BraintreeController@createTransaction');
//Route::get('/restaurants/{id}','api\FrontendController@show');
Route::get('test', function(){return response('ciao');});
