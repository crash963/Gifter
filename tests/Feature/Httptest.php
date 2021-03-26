<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class Httptest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_homepage()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_mainpage()
    {
        $response = $this->get('/profile');

        $response->assertStatus(200);
    }
}