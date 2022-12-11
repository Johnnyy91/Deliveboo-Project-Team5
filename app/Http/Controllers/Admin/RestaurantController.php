<?php


namespace App\Http\Controllers\Admin;
use App\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Typology;

class RestaurantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {


        $user = Auth::user();
        $restaurants = Restaurant::all();
        $typologies = Typology::all();
        return view('admin.restaurants.index', compact(['restaurants','user','typologies']));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $typologies=Typology::All();
        return view('admin.restaurants.create', compact('typologies'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $this->validateRestaurant($request);
        $form_data = $request->all();

        $restaurant = new Restaurant();
        $restaurant->fill($form_data);

        $slug = $this->getSlug($restaurant->name);
        $restaurant->slug = $slug;
        $user = Auth::user();
        $restaurant->user_id = $user->id;
        $restaurant->save();

        if(array_key_exists('typologies', $form_data)){
            $restaurant->typologies()->sync($form_data['typologies']);
        }

        return redirect()->route('admin.restaurants.index');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Restaurant  $restaurant
     * @return \Illuminate\Http\Response
     */
    public function show(Restaurant $restaurant)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Restaurant  $restaurant
     * @return \Illuminate\Http\Response
     */
    public function edit($slug)
    {
        //
        $restaurant = Restaurant::where('slug', $slug)->first();
        return view('admin.restaurants.edit', compact('restaurant'));



    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Restaurant  $restaurant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Restaurant $restaurant)
    {
        $this->validateRestaurant($request);
        $form_data = $request->all();
         //qui aggiorniamo lo slug se il nome è diverso
        if ($restaurant->name != $form_data['name']) {
            $slug = $this->getSlug($form_data['name']);
            $form_data['slug'] = $slug;
        }
        $restaurant->update($form_data);
        return redirect()->route('admin.restaurants.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Restaurant  $restaurant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Restaurant $restaurant)
    {
        $restaurant->delete();
        return redirect()->route('admin.restaurants.index');
    }
    private function getSlug($name)
    {
        $slug = Str::slug($name);
        $slug_base = $slug;
        // già pensato per più ristoranti
        $existingRestaurant = Restaurant::where('slug', $slug)->first();
        $counter = 1;
        while ($existingRestaurant) {
            $slug = $slug_base . '_' . $counter;
            $counter++;
            $existingRestaurant = Restaurant::where('slug', $slug)->first();
        }
        return $slug;
    }
    private function validateRestaurant(Request $request){
        $request->validate([
            'name' => 'required|min:2|max:255',
            'piva' => 'required',
            'address' => 'required',
            'img' => 'nullable|image|max:3072',
            'lunch_time_slot_open' => 'required',
            'lunch_time_slot_close' => 'required',
            'dinner_time_slot_open' => 'required',
            'dinner_time_slot_close' => 'required'
        ], [
            'name.min' => 'Una sola lettera non basta'
        ]);
    }
}
