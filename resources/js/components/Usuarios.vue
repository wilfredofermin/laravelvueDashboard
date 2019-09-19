<template>
<div class="card card-primary card-outline">
    <div class="card-body">
        <div class="row mt-3">
            <div class="col-md-12">
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <h3 class="box-title">USUARIOS</h3>
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
