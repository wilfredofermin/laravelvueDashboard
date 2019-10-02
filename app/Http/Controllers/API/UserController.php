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
       public function __construct()
    {
        // Video referencia : https://www.youtube.com/watch?v=GdLz5BRSjQY&list=PLB4AdipoHpxaHDLIaMdtro1eXnQtl_UvE&index=26
        $this->middleware('auth:api');
    }


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

    public function profile()
    {
       return auth('api')->user();
    }

    public function updateProfile(Request $request)
    {
                $this->validate($request, [
                'nombre' => 'required',
                'apellidos' => 'required',
                // 'email' => 'email|required|min:13|unique:users,'.$user->id,
                'password' => 'sometime|min:8',
                ]);

                //dd($request);
                $user = auth('api') ->user();
                // return ['messege' => 'Profile actualizado !'];
                if($request->foto){

                    $name = preg_match_all('/data\:image\/([a-zA-Z]+)\;base64/',$request->foto,$matched);
                    // $name = time().'.'.explode('/',explode(':',substr($request ->foto, 0, strpos($request->foto, ';')))[1])[1];
                    \Image::make($request->foto)->resize(300, 200)->save(public_path('img/profile/').$name);

                }
       
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
           

         $user = User::findOrFail($id);
            $this->validate($request, [
                'nombre' => 'required',
                'apellidos' => 'required',
                // 'email' => 'email|required|min:13|unique:users,'.$user->id,
                'password' => 'sometime|min:8',
                ]);
                $user->update($request->all());

                return ['messege' => 'Usuario actualizado !'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
                $user = User::findOrFail($id);
                $user->delete();

                return ['messege' => 'Usuario eliminado !'];
    }
}
