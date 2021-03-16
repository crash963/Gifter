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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user/{user_id}/friends', 'Api\UserController@friends');
Route::get('/user/{user_id}/wishes', 'Api\UserController@wishes');

Route::get('/current-user', 'Api\UserController@currentUser');

Route::get('/comment/{comment_id}', 'Api\CommentController@comment');