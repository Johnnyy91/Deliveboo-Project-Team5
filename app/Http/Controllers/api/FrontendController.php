<?php


namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Error;
use App\Restaurant;
use App\Typology;

class FrontendController extends Controller{


    public function index () {
        try {
            $r = Restaurant::query()->get();
            for ($i=0; $i < count($r); $i++) {
                # code...
                $r[$i]->with(['dishes', 'typologies']);
            }
            $t = Typology::with(['restaurants'])->get();
            $data = [
                'results' => $r,
                'typologies' => $t,
                'success' => count($r) > 0
            ];
        }catch(Error $e){
            $data = [
                'results' => $e->message,
                'success' => false
            ];
        }

        return response($data);


    }


    public function show($slug) {
        $restaurants = Restaurant::with(['typologies'])->get();
        $data = [];

        foreach($restaurants as $restaurant){
            foreach($restaurant->typologies as $typology){
         if ($typology->slug == $slug){
            array_push($data, $restaurant);
            }
        }
    }


            return response($data);


    }
}







?>
