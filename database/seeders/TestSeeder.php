<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Comment;
use App\Models\Wish;
use App\Models\User;

use function Symfony\Component\String\b;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comments = [
            [
                "wish_id" => 1,
                "user_id" => 1,
                "comment_id" => 2,
                "text" => "hello 1"
            ],
            [
                "wish_id" => 2,
                "user_id" => 2,
                "comment_id" => 3,
                "text" => "hello 2"
            ],
            [
                "wish_id" => 1,
                "user_id" => 3,
                "comment_id" => 2, 
                "text" => "hello 3"
            ]
            ];

            foreach ($comments as $comment) {
            $new_comment = new Comment();
    
            $new_comment->wish_id = $comment["wish_id"];
            $new_comment->user_id = $comment["user_id"];
            $new_comment->comment_id = $comment["comment_id"];
            $new_comment->text = $comment["text"];

            $new_comment->save();
            }

            $wishes = [
                [
                    'user_id' => 1,
                    'name'=> "Lego Millenium Falcon",
                    'description'=> "Really awesome Lego with the most bricks in the world",
                    "is_resolved" => false,
                ],
                [
                    'user_id' => 2,
                    'name'=> "Big Mac",
                    'description'=> "The best burger I have ever had",
                    "is_resolved" => false,
                ],
                [
                    "user_id"=> 2,
                    'name'=> 'Twister',
                    'description'=> "Because KFC is simply better",
                    "is_resolved" => false,
                ],
                [
                    "user_id"=> 3,
                    'name'=> 'Burger Kiiiing',
                    'description'=> "Burger King rulezzz",
                    "is_resolved" => false,
                ]
            ];

            foreach($wishes as $wish){
                $new_wish = new Wish();

                $new_wish->user_id = $wish["user_id"];
                $new_wish->name = $wish["name"];
                $new_wish->description = $wish["description"];
                $new_wish->is_resolved = $wish["is_resolved"];

                $new_wish->save();
            }

            $users = [
                [
                    'nickname' => 'Teo15',
                    'email' => 'teo15sk@gmail.com',
                    'password' => 'abcd1234'
                ],
                [
                    'nickname' => '1n3dible',
                    'email' => 't.nejedly@gmail.com',
                    'password' => 'abcd1234'
                ],
                [
                    'nickname' => 'crash963',
                    'email' => 't-pokorny@seznam.cz',
                    'password' => 'abcd1234'
                ]
            ];

            foreach($users as $user){
                $new_user = new User();

                $new_user->nickname = $user["nickname"];
                $new_user->email = $user["email"];
                $new_user->password = $user["password"];

                $new_user->save();
            }
        }
        
    }