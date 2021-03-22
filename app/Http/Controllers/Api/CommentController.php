<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function comment($comment_id)
    {
        $comment = Comment::with('user')->findOrFail($comment_id);

        return $comment;
    }

    public function children($comment_id)
    {
        $comment = Comment::findOrFail($comment_id);

        return $comment->children()->get();
    }

    public function save(Request $request)
    {
        $this->validate($request, [
            'wish_id' => 'required',
            'user_id' => 'required',
            'text' => 'required',
            "comment_id" => "nullable",
        ]);
        
        $comment = Comment::create($request->all());

        return [
            'status' => 'success',
            'message' => 'Comment was successfully added'
        ];
    }
}