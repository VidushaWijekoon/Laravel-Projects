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
            $table->string('BranchName', 50);
            $table->string('BranchEmailAddress', 150);
            $table->string('BranchAddress', 200)->nullable();
            $table->string('ContactNo', 20)->nullable();
            $table->string('LandlineNo', 20)->nullable();
            $table->string('FaxNo', 20)->nullable();
            $table->string('City', 50)->nullable();
            $table->string('BranchCityCode', 25)->nullable();
            $table->string('BranchPostalCode', 20)->nullable();
            $table->string('BranchLabourFileno', 20)->nullable();
            $table->string('BranchAreaManager', 50)->nullable();
            $table->string('BranchManager', 50)->nullable();
            $table->string('BranchAssistantManager', 50)->nullable();
            $table->unsignedBigInteger('CreatedBy')->default(1);
            $table->enum('BranchStatus', ['Active', 'Deactive'])->default('Active');
            $table->dateTime('CreatedAt')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hr_branches');
    }
};
