<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/login-test', function () {
    return view('welcome');
});

Route::get('/', function () {
    return view('react.app');
});

Route::get("/home", "TestController@index");

Route::view('/profile', 'react/app')->name('profile');