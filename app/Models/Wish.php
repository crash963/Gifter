<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wish extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        "link",
        "photo",
        'description',
        'resolve_date',
        'is_resolved'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function fulfillers()
    {
        return $this->belongsToMany(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}