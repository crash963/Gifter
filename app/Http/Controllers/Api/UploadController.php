<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Wish;

class UploadController extends Controller
{
    public function uploadProfilePic(Request $request){

        if(!$request->file("picture")){
            return;
        }

        $user = Auth::user();
        
        //    $filename = $request->file('picture')->store('profile_pictures', 'uploads');
        
        //    return [
        //        $request->file('picture')->getClientOriginalName(),
        //        $request->file('picture')->getClientOriginalExtension(),
        //        $request->file('picture')->getClientMimeType()
        //    ];
        
        
            $filename = $request->file('picture')->storeAs('profile_pictures',
                $user->nickname . '-profile-pic.jpg',
                'uploads'
            );
        
            return $filename;
        
        }

        public function uploadWishPic(Request $request){

                       
                $filename = $request->file('picture')->storeAs('wish_pictures',
                $request->file('picture')->getClientOriginalName(),
                    'uploads'
                );
            
                return $filename;
            
            }
}