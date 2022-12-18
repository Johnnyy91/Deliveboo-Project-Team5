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


//DISH1
            $dish1 = new Dish();

            $dish1->name='Carbonara';

            $slug = Str::slug($dish1->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish1->slug = $slug;

            $dish1->description='Piatto buono e tipico italiano';
            $dish1->price=8.50;
            $dish1->ingredients='Uova , guanciale , pecorino';
            $dish1->visible=$faker->boolean();

            $dish1->restaurant_id=1;
            $dish1->save();

//DISH2
             $dish1 = new Dish();

            $dish1->name=$faker->text(10);

            $slug = Str::slug($dish1->name);
            $slug_base = $slug;
            $existingslug = Dish::where('slug', $slug)->first();
            $counter = 1;
            while ($existingslug) {
                $slug = $slug_base . '_' . $counter;
                $existingslug = Dish ::where('slug', $slug)->first();
                $counter++;
            }
            $dish1->slug = $slug;

            $dish1->description=$faker->text(20);
            $dish1->price=$faker->randomFloat(2, 10,200);
            $dish1->ingredients=$faker->text(50);
            $dish1->visible=$faker->boolean();
            $dish1->img = $faker->imageUrl(640, 480);

            $dish1->save();

    }
}
