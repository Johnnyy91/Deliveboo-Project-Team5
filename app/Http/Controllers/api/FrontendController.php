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
            $r = Restaurant::all();
            $t = Typology::all();
            $data = [
                'results' => $r,
                'typologies' => $t,
                'success' => count($r) > 0
            ];
        }catch(Error $e){

        }

        return response()->json($data);


    }
}







?>
