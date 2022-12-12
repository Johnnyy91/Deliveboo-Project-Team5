<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            // $table->decimal('total_price',5,2)->unsigned(); IL PREZZO TOTALE DOVREBBE ESSERE DATO DALLA SOMMA DEI PIATTI ORDINATI
            $table->string('address_client')->unique();
            $table->string('email_client')->unique();
            $table->timestamps('date_order');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
