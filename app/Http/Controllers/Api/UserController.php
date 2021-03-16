<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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

        return $user->wishes;
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
}