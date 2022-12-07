<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    public function restaurant(){
        return $this->belongsTo('App\Restaurant');
    }

    protected $fillable = [ 'name', 'slug', 'description', 'ingredients', 'img', 'price', 'restaurant_id'];

}
