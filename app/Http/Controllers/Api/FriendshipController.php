<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class FriendshipController extends Controller
{
    public function friendship($friend_id)
    {
        $user = Auth::user();
        $friend = User::find($friend_id);
        // dd($friend);
        
        $user->friends()->attach($friend_id);
        $friend->friends()->attach($user->id);

        return [
            'status' => 'success',
            'message' => 'Friend was successfully added'
        ];
    }
}