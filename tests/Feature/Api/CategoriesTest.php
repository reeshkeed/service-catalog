<?php

namespace Tests\Feature\Api;

use App\Category;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;



class CategoriesTest extends TestCase
{
  use RefreshDatabase;

  /** @test **/
  public function a_user_can_create_a_category()
  {
    $user = _test_user();

    $attributes = [
      'name' => 'Network Equipements',
      'description' => 'Lorem ipsum dolor sit amet',
    ];

    $this->post(route('api.categories.store'), array_merge($attributes, [
      'auth_token' => $user->auth_token
    ]))

      ->assertStatus(201)
      ->assertJson($attributes);
  }
}
