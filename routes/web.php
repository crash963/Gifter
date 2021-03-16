<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Mail\TestEmail;
use App\Models\User;
use App\Notifications\TestNotification;
use PhpParser\Node\Expr\FuncCall;

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

Route::get("/send-email", function ( ){
    $name = "Slavo";

    Mail::to("mail@example.com")->send(new TestEmail($name));
});

Route::get("/send-notification", function(){
    
    $user = User::first();

    $name = "John";

    $user->notify(new TestNotification($name));

});