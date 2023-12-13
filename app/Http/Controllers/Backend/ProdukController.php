<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Produk;

class ProdukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Produk::orderBy('id_produk', 'desc')->get();
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $rules = [
            'nama_produk' => 'required',
            'keterangan'  => 'required',
            'harga'       => 'required',
            'gambar'      => 'required'
        ];
        $errorMessages = [
            'nama_produk.required' => 'Kolom isian nama produk tidak boleh kosong.',
            'keterangan.required'  => 'Kolom isian keterangan tidak boleh kosong.',
            'harga.required'       => 'Kolom isian harga tidak boleh kosong.',
            'gambar.required'      => 'Kolom isian gambar tidak boleh kosong.'
        ];

        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }

        try {
            DB::beginTransaction();

            $file = $request->file('gambar');
            $filename = $file->getClientOriginalName();

            $input['gambar'] = $filename;
            Produk::create($input);

            $file->move(storage_path('app/public'), $filename);

            DB::commit();

            return response()->json([
                'message' => 'Data berhasil disimpan'
            ], 200);

        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $rules = [
            'nama_produk' => 'required',
            'keterangan'  => 'required',
            'harga'       => 'required',
            'gambar'      => 'nullable'
        ];
        $errorMessages = [
            'nama_produk.required' => 'Kolom isian nama produk tidak boleh kosong.',
            'keterangan.required'  => 'Kolom isian keterangan tidak boleh kosong.',
            'harga.required'       => 'Kolom isian harga tidak boleh kosong.',
        ];

        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }

        try {
            DB::beginTransaction();

            if (!is_string($request->gambar)) {
                $file = $request->file('gambar');
                $filename = $file->getClientOriginalName();
                $file->move(storage_path('app/public'), $filename);

                $input['gambar'] = $filename;
            }

            $produk = Produk::find($id);
            $produk->update($input);
            DB::commit();

            return response()->json([
                'message' => 'Data berhasil disimpan'
            ], 200);

        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            DB::beginTransaction();
            Produk::where('id_produk', $id)->delete();
            DB::commit();

            return response()->json([
                'message' => 'Data berhasil dihapus'
            ], 200);

        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
