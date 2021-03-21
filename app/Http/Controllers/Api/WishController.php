<?php

namespace App\Http\Controllers\Api;

use Facades\App\Services\MetaScraperService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Wish;
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

    public function scrapeUrl()
    {

        $url = "https://www.alza.cz/65-lg-65nano91-d6251417.htm";
        
        $posts = MetaScraperService::scrape($url);
        // dd($posts);
        $posts["link"] = $url;


        return $posts;
    }
};