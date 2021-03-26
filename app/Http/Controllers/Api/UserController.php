<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Wish;

class UserController extends Controller
{
    public function currentUser()
    {
        $user = Auth::user();

        if($user){
            return [
                'user' => $user
            ];
        } else {
            return null;
        }
    }

    public function show($user_id)
    {
        $user = User::findOrFail($user_id);

        return $user;
    }

    public function friends($user_id)
    {
        $user = User::findOrFail($user_id);

        return $user->friends;
    }

    public function wishes($user_id)
    {
        $user = User::findOrFail($user_id);
        $current_date = date("Y-m-d");

       if($user->resolve_date)
       { return $user->wishes()->where("resolve_date", ">", $current_date)->with("fulfillers")->orderBy('created_at', 'desc')->get();
        } else {
            return $user->wishes()->with("fulfillers")->orderBy('created_at', 'desc')->get();
        }   
    }

    public function update(Request $request, $user_id)
    {
        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'birthday' => 'required'
        ]);

        $user = User::findOrFail($user_id);
        $user->update($request->all());

        return [
            'status' => 'success',
            'message' => 'User info was successfully updated'
        ];
    }

    public function friendsWishes($user_id)
    {
        $user = User::findOrFail($user_id);
        $friends = $user->friends()->get();

        $friends_ids = [];

        foreach ($friends as $friend) {
            array_push($friends_ids, $friend->id);
        }


        $wishes = Wish::whereIn('user_id', $friends_ids)->with("fulfillers")->orderBy('created_at', 'desc')->limit(30)->get();

        return $wishes;
    }

    public function searchUsersByName($string)
    {

        $users_to_exclude = [];
        $current_user = Auth::user();

        if ($current_user)  {
            
        array_push($users_to_exclude, $current_user->id);
        $current_user_id = $current_user->id;
        $current_user_friends = $current_user->friends;

        foreach ($current_user_friends as $friend) {
            array_push($users_to_exclude, $friend->id);
        }}

        // dd($users_to_exclude);


        $users = User::where('nickname', 'like', "%{$string}%")->whereNotNull('first_name')->whereNotNull('last_name')->whereNotNull('birthday')->whereNotIn('id', $users_to_exclude)->orderByRaw("CASE WHEN nickname LIKE '$string' THEN 1 WHEN nickname LIKE '$string%' THEN 2 ELSE 3 END")->get();

        // dd($users);
        
        return $users;
    }

    public function selectedfriendsWishes($user_id, $string = "all-friends")
    {

        $user = User::findOrFail($user_id);
        $friends_ids = [];
        $limit = 500;

        if ($string === "all-friends") {
        $friends = $user->friends()->get();
        $limit = 30;
        } else
        $friends = $user->friends()->where('nickname', 'like', "%{$string}%")->get();
        

        foreach ($friends as $friend) {
            array_push($friends_ids, $friend->id);
        }


        $wishes = Wish::whereIn('user_id', $friends_ids)->with("fulfillers")->orderBy('created_at', 'desc')->limit($limit)->get();

        return $wishes;
    }
}