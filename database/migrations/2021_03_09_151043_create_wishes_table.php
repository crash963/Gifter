<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wishes', function (Blueprint $table) {
            $table->id();

            $table->foreignId("user_id");
            $table->string("name")->nullable();
            $table->string("link")->nullable();
            $table->string("photo")->nullable();
            $table->longText("description")->nullable();
            $table->date("resolve_date")->nullable();
            $table->boolean("is_resolved");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wishes');
    }
}