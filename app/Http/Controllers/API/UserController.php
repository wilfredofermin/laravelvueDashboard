<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return User::latest()->paginate(10);
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)

    {

         $this->validate($request, [
            'nombre' => 'required',
            'apellidos' => 'required',
            'email' => 'email|required|min:13|unique:users',
            'password' => 'required|min:8',
        ]);
        // return $request->all();

        // return User::create ($request->all());
       return User::create([
           'nombre'  =>$request->nombre,
           'apellidos'  =>$request->apellidos,
           'email' => $request->email,
           'bio'  =>$request->bio,
           'foto'  =>$request->foto,
           'tipo'  =>$request->tipo,
           'password'  =>Hash::make($request->password),    
       ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
