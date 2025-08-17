<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('admin', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->id();
            $table->string('EmployeeId')->unique()->index();
            $table->string('Role');
            $table->string('EmailAddress');
            $table->string('Password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
     
    public function down(): void
    {
        Schema::dropIfExists('admin');
    }
};
