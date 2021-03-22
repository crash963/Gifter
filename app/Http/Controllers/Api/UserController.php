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

        return [
            'user' => $user
        ];
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

        return $user->wishes()->orderBy('created_at', 'desc')->get();
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


        $wishes = Wish::whereIn('user_id', $friends_ids)->orderBy('created_at', 'desc')->limit(30)->get();

        return $wishes;
    }

    public function searchUsersByName($string) {

        // dd($string);

        // $users = User::where('nickname', 'like', "%{$string}%")->orderByRaw("nickname LIKE '$string' asc")->orderByRaw("nickname LIKE '$string%' asc")->get();

        /* $current_user = Auth::user();

        $current_user_id = $current_user->id;

        
        $current_user_friends = $current_user->friends;
        $current_user_friends_ids = [];

        foreach ($current_user_friends as $friend) {
            array_push($current_user_friends_ids, $friend->id);
        }
        
        dd($current_user_friends_ids); */


        $users = User::where('nickname', 'like', "%{$string}%")->whereNotNull('first_name')->whereNotNull('last_name')->whereNotNull('birthday')->orderByRaw("CASE WHEN nickname LIKE '$string' THEN 1 WHEN nickname LIKE '$string%' THEN 2 ELSE 3 END")->get();

        // dd($users);

        // $users = User::where('nickname', 'like', '%$string%')->orderBy('nickname', '$string', 'desc')->orderBy('nickname', '$string%', 'desc')->get();
        
        return $users;
    }
}