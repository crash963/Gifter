<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Wish;

class UploadController extends Controller
{
    public function uploadProfilePic(Request $request, $user_id){

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
        $current_time = date("H-i-s");
        
            $filename = $request->file('picture')->storeAs('profile_pictures',
                $current_time . $user->nickname . '-profile-pic.jpg',
                'uploads'
            );
        
            return $filename;
        
        }

        public function uploadWishPic(Request $request){

            if(!$request->file("picture")){
                return;
            }    
            
                $filename = $request->file('picture')->storeAs('wish_pictures',
                $request->file('picture')->getClientOriginalName(),
                    'uploads'
                );
            
                return $filename;
            
            }
}