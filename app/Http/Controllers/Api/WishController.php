<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Wish;

class WishController extends Controller
{
    public function wish($wish_id)
    {
        $wish = Wish::findOrFail($wish_id);

        return $wish;
    }

    public function fulfillers($wish_id)
    {
        $user_wish = Wish::findOrFail($wish_id);

        return $user_wish->fulfillers()->get();
    }
};