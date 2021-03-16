<?php

use GuzzleHttp\Middleware;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user/{user_id}/friends', 'Api\UserController@friends');
Route::get('/user/{user_id}/wishes', 'Api\UserController@wishes');
Route::post('/user/{user_id}/update', 'Api\UserController@update');

Route::get('/current-user', 'Api\UserController@currentUser')->middleware('auth:sanctum');


Route::post('/comment/save', 'Api\CommentController@save');
Route::get('/comment/{comment_id}/children', 'Api\CommentController@children');
Route::get('/comment/{comment_id}', 'Api\CommentController@comment');

Route::get('/wish/{wish_id}', 'Api\WishController@wish');
Route::get('/wish/{wish_id}/fulfillers', 'Api\WishController@fulfillers');