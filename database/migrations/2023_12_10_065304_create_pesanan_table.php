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
        Schema::create('pesanan', function (Blueprint $table) {
            $table->string('id_pesanan', 50)->primary();
            $table->datetime('tanggal_pesanan');
            $table->string('nama_pelanggan', 255);
            $table->text('alamat');
            $table->string('nomor_hp', 50);
            $table->string('email', 255);
            $table->integer('total');
            $table->enum('status', ['PENDING', 'PROCESS', 'FINISH']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesanan');
    }
};
