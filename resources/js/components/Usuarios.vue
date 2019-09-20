<template>
<div class="card card-primary card-outline">
    <div class="card-body">
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <h4>USUARIOS</h4>
                        </div>
                        <div class="card-tools">
                            <button type="button" class="btn btn-block btn-primary btn-md" data-toggle="modal" data-target="#addnew"><i class="fas fa-user-plus ta-fw"></i> Agregar</button>
                        </div>
                    </div>
                     <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tbody>
                            <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Status</th>
                            <th>Tipo</th>
                            <th>Email</th>
                            <th>Modificar</th>
                            </tr>
                            <tr>
                            <td>183</td>
                            <td>John Doe</td>
                            <td>11-7-2014</td>
                            <td><span class="label label-success">Approved</span></td>
                            <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                            <td>
                               <a href="#">
                                     <i class="fas fa-edit green"></i>
                               </a>
                               |
                               <a href="#">
                                     <i class="fas fa-trash rojo"></i>
                               </a>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
         </div>
    </div>
            <!-- Modal -->
        <form @submit.prevent="CrearUsuario" @keydown="form.onKeydown($event)">
            <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="addnewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered cl" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addnewLabel">NUEVO USUARIO</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                         
                <div class="modal-body">     
                  <div class="form-group">
                    <input v-model="form.nombre" type="text" name="nombre" placeholder="Nombre"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('nombre') }">
                    <has-error :form="form" field="nombre"></has-error>
                  </div>
                  <div class="form-group">
                    <input v-model="form.apellidos" type="text" name="apellidos" placeholder="Apellidos"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('apellidos') }">
                    <has-error :form="form" field="apellidos"></has-error>
                  </div>
                   <div class="form-group">
                    <input v-model="form.email" type="email" name="email" placeholder="Correo electronico"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                    <has-error :form="form" field="email"></has-error>
                  </div>
                   <div class="form-group">
                    <textarea v-model="form.bio" name="bio" id="bio" class="form-control" rows="5" placeholder="Descripcion del usuario (Opcional)">
                         class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }">
                    </textarea>
                      <has-error :form="form" field="bio"></has-error>
                    </div>
         
                   <div class="form-group">
                    <select name="tipo" v-model="form.tipo" id="tipo" class="form-control" :class="{ 'is-invalid':form.errors.has('tipo')}">
                        <option value="" selected disabled hidden>Indique un rol</option>
                        <option value="user">Usuario Estandar</option>
                        <option value="admin">Administrador</option>
                        <option value="gestion">Gestion</option>
                    </select>
                    <has-error :form="form" field="tipo"></has-error>
                  </div>
                    <div class="form-group">
                    <input v-model="form.password" type="password" name="password" placeholder="Contraseña"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                    <has-error :form="form" field="password"></has-error>
                  </div>

                  <!-- Fin contenido -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary"> Agregar</button>
                </div>
                </div>
            </div>
            </div> 
        </form>
             <!-- fin modal -->
        </div>           
     </div>    
 </div>
               
</template>

<script>

    export default {
         data() {
        return {
            // Create a new form instance
            form: new Form({
                activo: '',
                nombre: '',
                apellidos: '',
                foto: '',
                tipo: '',
                email: '',
                
                remember: false
            })
        }
    },
    methods: {
        CrearUsuario() {
            // Submit the form via a POST request
            this.form.post('/api/user')
                .then(({ data }) => { console.log(data) })
        }
    },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
