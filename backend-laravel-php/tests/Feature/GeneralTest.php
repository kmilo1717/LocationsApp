<?php

namespace Tests\Feature;

use Tests\TestCase;

class GeneralTest extends TestCase
{
    public function test_404_not_found(): void
    {
        $response = $this->get('/not-found');

        $response->assertStatus(404);
    }
}
