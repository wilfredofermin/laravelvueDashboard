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
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addnew"><i class="fas fa-user-plus ta-fw"></i></button>
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
            <div class="modal fade" id="addnew" tabindex="-1" role="dialog" aria-labelledby="addnewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addnewLabel">Nuevo Usuario</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Guardar</button>
                </div>
                </div>
            </div>
            </div>
             <!-- fin modal -->
        </div>           
     </div>    
 </div>
               
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
