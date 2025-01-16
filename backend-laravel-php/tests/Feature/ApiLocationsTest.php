<?php

namespace Tests\Feature;

use Tests\TestCase;

class ApiLocationsTest extends TestCase
{
    public function test_get_with_api_token(): void
    {
        $response = $this->withHeader('x-api-key', config('api.key'))->get(route('locations.index'));

        $response->assertStatus(200);
        $response->assertJson([
            'data' => [],
        ]);
        
    }

    public function test_get_without_api_token(): void
    {
        $response = $this->get(route('locations.index'));

        $response->assertStatus(401);
    }

    public function test_get_with_invalid_api_token(): void
    {
        $response = $this->withHeader('x-api-key', 'invalid')->get(route('locations.index'));

        $response->assertStatus(401);
    }

}
