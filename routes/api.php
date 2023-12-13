<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Backend\AuthController;
use App\Http\Controllers\Backend\ProdukController;
use App\Http\Controllers\Backend\PesananController as AdminPesananController;

use App\Http\Controllers\Frontend\PesananController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('admin/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('admin/auth/logout', [AuthController::class, 'logout']);
    Route::get('admin/order', [AdminPesananController::class, 'index']);
    Route::post('admin/order/process/{pesanan}', [AdminPesananController::class, 'process']);
    Route::post('admin/order/finish/{pesanan}', [AdminPesananController::class, 'finish']);

    Route::resource('admin/products', ProdukController::class);
});

Route::get('products', [ProdukController::class, 'index']);
Route::post('checkout', [PesananController::class, 'checkout']);
Route::get('order', [PesananController::class, 'index']);