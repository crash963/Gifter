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


        return view("react.app");
    }
}