<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class UserController extends Controller
{
    public function user()
    {
        $user = Auth::user();

        dd($user);

        return [
            'user' => $user
        ];
    }
}