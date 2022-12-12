<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    public function dishes()  {
        return $this->belongsToMany('App\Dish');
    }

    protected $fillable = [ 'address_client', 'email_client', 'date_order'];
    //data_order verrà generato in automatico con un time() che restituirà l'ora corrente
}
