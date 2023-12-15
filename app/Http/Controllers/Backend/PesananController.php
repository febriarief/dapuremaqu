<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Pesanan;
use App\Models\DetilPesanan;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PesananController extends Controller
{
    public function index(Request $request)
    {
        $orders = Pesanan::orderBy('tanggal_pesanan', 'desc')->with('detail')->get();
        return response()->json($orders);
    }

    public function checkout(Request $request)
    {
        $input = $request->all();
        $rules = [
            'nama_pelanggan'        => 'required',
            'alamat'                => 'required',
            'nomor_hp'              => 'required',
            'email'                 => 'required',
            'products.*.id_produk'  => 'required'
        ];
        $errorMessages = [
            'nama_pelanggan.required'       => 'Kolom isian nama tidak boleh kosong.',
            'alamat.required'               => 'Kolom isian alamat tidak boleh kosong.',
            'nomor_hp.required'             => 'Kolom isian nomor hp tidak boleh kosong.',
            'email.required'                => 'Kolom isian email tidak boleh kosong.',
            'products.*.id_produk.required' => 'Minimal harus ada 1 data produk.',
        ];

        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }

        try {
            DB::beginTransaction();
            
            $total = 0;
            $details = [];
            foreach($input['products'] as $k => $v) {
                $product = Produk::find($v['id_produk']);
                
                $details[$k]['nama_produk']         = $product->nama_produk ?? null;
                $details[$k]['gambar_produk']       = $product->gambar ?? null;
                $details[$k]['harga_produk']        = $product->harga ?? null;
                $details[$k]['kuantitas_produk']    = $v['qty'] ?? null;
                $details[$k]['total']               = $product->harga * $v['qty'];

                $total += $details[$k]['total'];
            }

            $id = Pesanan::generateId();
            $order = Pesanan::create([
                'id_pesanan'        => $id,
                'tanggal_pesanan'   => now(),
                'nama_pelanggan'    => $input['nama_pelanggan'],
                'alamat'            => $input['alamat'],
                'nomor_hp'          => $input['nomor_hp'],
                'email'             => $input['email'],
                'total'             => $total,
                'status'            => 'PENDING'
            ]);

            $order->detail()->createMany($details);

            DB::commit();

            return response()->json([
                'order_id' => $order->id_pesanan,
                'message' => 'Pesanan berhasil di buat'
            ], 200);

        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function process(Request $request, Pesanan $pesanan)
    {
        try {
            DB::beginTransaction();
            $pesanan->status = 'PROCESS';
            $pesanan->save();

            DB::commit();

            return response()->json([
                'message' => 'Pesanan berhasil diperbarui'
            ], 200);
            
        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function finish(Request $request, Pesanan $pesanan)
    {
        try {
            DB::beginTransaction();
            $pesanan->status = 'FINISH';
            $pesanan->save();

            DB::commit();

            return response()->json([
                'message' => 'Pesanan berhasil diperbarui'
            ], 200);

        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
