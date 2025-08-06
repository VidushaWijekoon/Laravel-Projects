<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hr_branches', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->increments('BranchId');
            $table->string('BranchName', 25);
            $table->string('BranchEmailAddress', 150);
            $table->string('BranchAddress', 200)->nullable();
            $table->string('ContactNo', 20)->nullable();
            $table->string('LandlineNo', 20)->nullable();
            $table->string('FaxNo', 20)->nullable();
            $table->string('City', 50)->nullable();
            $table->string('BranchCityCode', 10)->nullable();
            $table->string('BranchPostalCode', 20)->nullable();

            $table->integer('BranchLabourFileno')->nullable();
            $table->tinyInteger('BranchAreaManager')->nullable();
            $table->tinyInteger('BranchManager')->nullable();
            $table->tinyInteger('BranchAssistantManager')->nullable();

            $table->string('CreatedBy', 100)->default('Admin');
            $table->enum('BranchStatus', ['Active', 'Deactive']);
            $table->dateTime('CreatedAt', 6);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
