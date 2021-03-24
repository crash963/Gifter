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

Route::get('/users/search/{search_string}', 'Api\UserController@searchUsersByName');
Route::get('/user/{user_id}/friends-wishes/{string}', 'Api\UserController@selectedfriendsWishes');
// Route::get('/user/{user_id}/friends-wishes', 'Api\UserController@friendsWishes');
Route::get('/user/{user_id}/friends', 'Api\UserController@friends');
Route::get('/user/{user_id}/wishes', 'Api\UserController@wishes');
Route::get('/user/{user_id}', 'Api\UserController@show');
Route::post('/user/{user_id}/update', 'Api\UserController@update');

Route::get('/current-user', 'Api\UserController@currentUser')->middleware('auth:sanctum');


Route::post('/comment/save', 'Api\CommentController@save');
Route::get('/comment/{comment_id}/children', 'Api\CommentController@children');
Route::get('/comment/{comment_id}', 'Api\CommentController@comment');
Route::get("/comments/{wish_id}", "Api\CommentController@comments");


Route::get('/wish/{wish_id}/author', 'Api\WishController@author');
Route::get('/wish/{wish_id}/fulfillers', 'Api\WishController@fulfillers');
Route::get('/wish/{wish_id}', 'Api\WishController@wish');
Route::get("/wish/{user_id}/fulfilled", "Api\WishController@fulfilledWishes");
Route::post("/wish/fulfillers/add/{wish_id}/{user_id}", "Api\WishController@addFulfiller");
Route::post('/add-wish', 'Api\WishController@addWish');

Route::post('/upload/profile-picture', 'Api\UploadController@uploadProfilePic');
Route::post('/upload/wish-picture', 'Api\UploadController@uploadWishPic');

Route::post('/scrape/url', 'Api\WishController@scrapeUrl');

Route::post('friendship/{friend_id}', 'Api\FriendshipController@friendship');