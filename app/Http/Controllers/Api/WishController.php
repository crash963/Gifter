<?php

namespace App\Http\Controllers\Api;

use Facades\App\Services\MetaScraperService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Wish;
use App\Models\User;
use DiDom\Document;
use DiDom\Query;

class WishController extends Controller
{
    public function wish($wish_id)
    {
        $wish = Wish::with("comments")->findOrFail($wish_id);

        return $wish;
    }

    public function fulfillers($wish_id)
    {
        $user_wish = Wish::findOrFail($wish_id);

        return $user_wish->fulfillers()->get();
    }

    public function author($wish_id)
    {
        $wish = Wish::findOrFail($wish_id);

        return $wish->user;
    }

    public function addWish(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'resolve_date' => 'nullable'
        ]);

        $wish = Wish::create($request->all());

        return [
            'status' => 'success',
            'message' => 'Wish was successfully added'
        ];
    }

    public function scrapeUrl(Request $request)
    {
        $this->validate($request, [
            'link' => 'required',
            'resolve_date' => 'nullable'
        ]);

        $url = $request->input("link");
        
        $posts = MetaScraperService::scrape($url);
        // dd($posts);


        $new_wish = new Wish();
        
        $new_wish->user_id = $request->input("user_id");
        $new_wish->link = $url;
        $new_wish->resolve_date = $request->input("resolve_date");
        $new_wish->is_resolved = $request->input("is_resolved");
        $new_wish->name = $posts["name"];
        $new_wish->description = $posts["description"];
        $new_wish->photo = $posts["photo"];
        $new_wish->save();


        return [
            'status' => 'success',
            'message' => 'Wish was successfully added'
        ];
    }

    public function addFulfiller(Request $request ,$wish_id, $user_id){
        $wish = Wish::findOrFail($wish_id);

        $wish->fulfillers()->attach($user_id);
        $wish->resolve_date = $request->input("resolve_date");
        $wish->save();
        
        return "fulfiller added";
    }

    public function fulfilledWishes($user_id){
        
    }
};