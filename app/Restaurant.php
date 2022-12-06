<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Restaurant extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }

    protected $fillable = [
        'name', 'slug', 'img', 'address', 'piva', 'lunch_time_slot', 'dinner_time_slot', 'user_id'
    ];



}
