<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetilPesanan extends Model
{
    use HasFactory;

    protected $table = 'detil_pesanan';
    protected $primaryKey = 'id_detail_pesanan';
    public $timestamps = false;

    protected $fillable = [
        'id_pesanan',
        'nama_produk',
        'gambar_produk',
        'harga_produk',
        'kuantitas_produk',
        'total'
    ];
}
