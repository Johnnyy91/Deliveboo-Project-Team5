<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::middleware('auth')  //si collega alla cartella middleware
    ->namespace('Admin')  //controller inseriti in sottocartella Admin
    ->name('admin.')      //name delle rotte che iniziano con admin.  //cartella admin dove dentro ci sono i file
    ->prefix('admin')
    ->group(function () {
        Route::get('/', 'HomeController@index')->name('index'); // rotta se utente autenticato
    });

    Route::get('{any?}', function() {  // per qualsiasi altra rotta mandami in guest.home
    return view("guest.home");
})->where("any", ".*");

