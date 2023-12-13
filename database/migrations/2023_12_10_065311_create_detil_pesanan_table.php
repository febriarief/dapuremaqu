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
        Schema::create('detil_pesanan', function (Blueprint $table) {
            $table->bigIncrements('id_detail_pesanan');
            $table->string('id_pesanan', 50);
            $table->foreign('id_pesanan')->references('id_pesanan')->on('pesanan');
            $table->string('nama_produk', 255);
            $table->string('gambar_produk', 255);
            $table->integer('harga_produk');
            $table->integer('kuantitas_produk');
            $table->integer('total');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detil_pesanan');
    }
};
