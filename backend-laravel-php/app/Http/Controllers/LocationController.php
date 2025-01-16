<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function index()
    {
        $data = include(storage_path('app/data.php'));
        if (empty($data)) {
            return response()->json(['error' => 'Data not found'], 404);
        }
        return response()->json(['data' => $data]);
    }
}
