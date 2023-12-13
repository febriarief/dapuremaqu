<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $input = $request->all();
        $rules = [
            'username' => 'required',
            'password' => 'required'
        ];
        $errorMessages = [
            'username.required' => 'Kolom isian nama pengguna tidak boleh kosong.',
            'password.required' => 'Kolom isian kata sandi tidak boleh kosong.'
        ];

        $validator = Validator::make($input, $rules, $errorMessages);
        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first()
            ], 422);
        }

        try {
            DB::beginTransaction();

            if (Auth::guard('admin')->attempt(['nama_pengguna' => $input['username'], 'password' => $input['password']])) {
                $user  = Auth::guard('admin')->user();
                $token = $user->createToken('dapueremaqu')->plainTextToken;

                DB::commit();

                return response()->json([
                    'user'  => $user,
                    'token' => $token,
                ], 200);
            }

            return response()->json([
                'message' => 'Kombinasi nama pengguna dan kata sandi tidak cocok'
            ], 400);

        } catch(\Exception $e) {
            DB::rollback();
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Revoke the authenticated user's access tokens, logging them out.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'success'
        ], 200);
    }
}
