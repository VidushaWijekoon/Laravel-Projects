<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BranchFactory extends Factory
{
    public function definition(): array
    {
        return [
            'BranchName' => $this->faker->company,
            'BranchEmailAddress' => $this->faker->unique()->companyEmail,
            'BranchAddress' => $this->faker->address,
            'ContactNo' => $this->faker->numerify('050#######'),
            'LandlineNo' => $this->faker->numerify('04#######'),
            'FaxNo' => $this->faker->numerify('04#######'),
            'City' => $this->faker->randomElement(['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah']),
            'BranchCityCode' => $this->faker->postcode,
            'BranchPostalCode' => $this->faker->postcode,
            'BranchLabourFileno' => $this->faker->numerify('####'),
            'BranchAreaManager' => $this->faker->name,
            'BranchManager' => $this->faker->name,
            'BranchAssistantManager' => $this->faker->name,
            'CreatedBy' => 1,
            'BranchStatus' => 'Active',
            'CreatedAt' => now(),
        ];
    }
}
