<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Restaurant;
use App\User;
use App\Dish;

class DishSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

        for ($i = 0; $i < 10; $i++) {

            $dish = new Dish();

            $dish->name=$faker->text(10);

            $slug = Str::slug($dish->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish->slug = $slug;

            $dish->description=$faker->text(20);
            $dish->price=$faker->randomFloat(2, 10,200);
            $dish->ingredients=$faker->text(50);
            $dish->visible=$faker->boolean();
            $dish->img = $faker->imageUrl(640, 480);

            $dish->save();
        }
    }
}
