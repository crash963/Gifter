<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Comment;
use App\Models\User;
use App\Models\Wish;

class TestController extends Controller
{
    public function index()
    {
        $comments = Comment::get();
        $users = User::get();
        $wishes = User::get();

        return view("tests.main", compact(["comments", "users", "wishes"]));
    }
}