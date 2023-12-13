<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens, HasFactory;

    protected $table = 'admin';
    protected $primaryKey = 'id_admin';
    public $timestamps = false;

    protected $fillable = [
        'nama_pengguna',
        'kata_sandi'
    ];

    protected $hidden = [
        'kata_sandi'
    ];

    protected $casts = [
        'kata_sandi' => 'hashed'
    ];

    public function getAuthPassword() {
        return $this->kata_sandi;
    }
}
