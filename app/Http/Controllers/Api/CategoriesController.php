<?php

namespace App\Http\Controllers\Api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class CategoriesController extends Controller
{

  public function store(Request $request)
  {
    $request->validate([
      'name' => 'required'
    ]);

    $category = Category::create([
      'name' => $request->input('name'),
      'description' => $request->input('description'),
    ]);

    return response()->json($category->toArray(), 201);

  }

}
