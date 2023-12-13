<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    use HasFactory;

    protected $table = 'pesanan';
    protected $primaryKey = 'id_pesanan';
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'id_pesanan',
        'tanggal_pesanan',
        'nama_pelanggan',
        'alamat',
        'nomor_hp',
        'email',
        'total',
        'status'
    ];

    public static function generateId()
    {
        $currentDate = Carbon::now();
        $currentYearMonth = $currentDate->format('Ym');
        
        $lastRequest = self::where('id_pesanan', 'like', "ORDER{$currentYearMonth}%")
            ->orderBy('id_pesanan', 'desc')
            ->first();
    
        $increment = $lastRequest ? intval(substr($lastRequest->id_pesanan, -5)) + 1 : 1;
        
        $incrementFormatted = str_pad($increment, 5, '0', STR_PAD_LEFT);
        $purchaseRequestId = "ORDER{$currentYearMonth}{$incrementFormatted}";
    
        return $purchaseRequestId;
    }

    public function detail()
    {
        return $this->hasMany(\App\Models\DetilPesanan::class, 'id_pesanan', 'id_pesanan');
    }
}
