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
}