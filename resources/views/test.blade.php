<?php

public function wishesRun()
{

    $wishes = [
        [
            'user_id' => 1,
            'name'=> "Lego Millenium Falcon",
            'description'=> "Really awesome Lego with the most bricks in the world"
        ],
        [
            'user_id' => 2,
            'name'=> "Big Mac",
            'description'=> "The best burger I have ever had"
        ],
        [
            "user_id"=> 2,
            'name'=> 'Twister'
            'description'=> "Because KFC is simply better"
        ],

        [
            "user_id"=> 3,
            'name'=> 'Burger Kiiiing'
            'description'=> "Burger King rulezzz"
        ]
    ];

}

public function userWishRun()
{
    $user_wish = [
        [
            'wish_id'=> 1,
            'user_id'=> 2
        ],

        [
            'wish_id'=> 4,
            'user_id'=> 2
        ],
    ];
}


public function friendshipsRun()
{
    $friendships = [
        [
            'user_id'=> 1,
            'friend_id'=> 2
        ],

        [
            'user_id'=> 1,
            'friend_id'=> 3
        ],
    ];
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
        'email' => 't.pokorny@gmail.com',
        'password' => 'abcd1234'
    ]
];