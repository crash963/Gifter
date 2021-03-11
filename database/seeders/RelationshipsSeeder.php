<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Comment;
use App\Models\Wish;
use App\Models\User;

class RelationshipsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_wish = [
            [
                'wish_id'=> 1,
                'user_id'=> 2,
            ],
            [
                'wish_id'=> 4,
                'user_id'=> 2,
            ],
        ];

        foreach($user_wish as $relationship){
            $user = User::find($relationship["user_id"]);
            $wish = Wish::find($relationship["wish_id"]);
            $user->fulfilling_wishes()->attach($wish);
        }

        $friendships = [
            [
                'user_id'=> 1,
                'friend_id'=> 2,
            ],
            [
                "user_id" => 2,
                "friend_id" => 1,
            ],
            [
                'user_id'=> 1,
                'friend_id'=> 3,
            ],
        ];

        foreach($friendships as $relationship){
            $user = User::find($relationship["user_id"]);
            $friend = Wish::find($relationship["friend_id"]);
            $user->friends()->attach($friend);
        }
    }
}