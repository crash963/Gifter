<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UploadController extends Controller
{
    public function uploadProfilePic(Request $request){

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
}