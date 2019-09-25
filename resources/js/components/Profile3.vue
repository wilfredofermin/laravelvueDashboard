<style >
.container {
  max-width: 1600px;
}
.widget-user .widget-user-image > img {
  width: 114px;
  height: auto;
  border: 2px solid #99cf16;
}
.widget-user .widget-user-header {
  padding: 6rem;
  height: 134px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.img-circle {
  border-radius: 35%;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #8778b2;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #f4f4f5;
  background-color: #8778b2;
  border-color: #728e1d #dee2e6 #98c61b;
}
</style>

// Login informacion tutorial :https://www.youtube.com/watch?v=5j2VZLkVCVA&list=PLB4AdipoHpxaHDLIaMdtro1eXnQtl_UvE&index=30
<template>
  <div class="container">
    <div class="row card card-primary card-outline">
      <div class="col-md-12 mt-2">
        <!-- Widget: user widget style 1 -->
        <div class="box box-widget widget-user">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div
            class="widget-user-header bg-black"
            style="background: url('https://ak9.picdn.net/shutterstock/videos/11211479/thumb/1.jpg') center center;"
          >
            <h2 class="widget-user-username">{{form.nombre + ' '+ form.apellidos | capitalize}}</h2>
            <h5 class="widget-user-desc">{{form.tipo | capitalize}}</h5>
          </div>
          <div class="widget-user-image">
            <img class="img-circle" src="/img/profile/wfermin.jpg" alt="User Avatar" />
          </div>
          <div class="box-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">26</h5>
                  <span class="description-text">SOLICITUDES PENDIENTES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">120</h5>
                  <span class="description-text">SOLICITUDES CERRADAS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">3</h5>
                  <span class="description-text">SOLICITUDES VENCIDAS</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>
        <br />
        <!-- /.widget-user -->
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >Detalles</a>
                </li>

                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="actividad-tab"
                    data-toggle="tab"
                    href="#actividad"
                    role="tab"
                    aria-controls="actividad"
                    aria-selected="true"
                  >Actividad</a>
                </li>
              </ul>
              <br />
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <!-- Inicio aqui -->

                  <div class="form-group">
                    <input
                      v-model="form.nombre"
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      ref="nombre"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('nombre') }"
                    />
                    <has-error :form="form" field="nombre"></has-error>
                  </div>
                  <div class="form-group">
                    <input
                      v-model="form.apellidos"
                      type="text"
                      name="apellidos"
                      placeholder="Apellidos"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('apellidos') }"
                    />
                    <has-error :form="form" field="apellidos"></has-error>
                  </div>
                  <!-- <div class="form-group" v-show="!editmode"> -->
                  <div class="form-group">
                    <input
                      v-model="form.email"
                      type="text"
                      name="email"
                      
                      placeholder="Correo electronico"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('email') }"
                    />
                    <has-error :form="form" field="email"></has-error>
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="form.bio"
                      name="bio"
                      id="bio"
                      class="form-control"
                      rows="5"
                      placeholder="Descripcion del usuario (Opcional)"
                    >
                         class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }">
                    </textarea>
                    <has-error :form="form" field="bio"></has-error>
                  </div>

                  <div class="form-group">
                    <select
                      name="tipo"
                      v-model="form.tipo"
                      id="tipo"
                      class="form-control"
                      :class="{ 'is-invalid':form.errors.has('tipo')}"
                    >
                      <option value selected disabled hidden>Indique un rol</option>
                      <option value="user">Usuario Estandar</option>
                      <option value="admin">Administrador</option>
                      <option value="gestion">Gestion</option>
                    </select>
                    <has-error :form="form" field="tipo"></has-error>
                  </div>
                  <form>
                    <div class="form-group">
                      <label for="Foto">
                        <i class="fas fa-edit"></i>Cambiar imagen
                      </label>
                      <input
                        type="file"
                        @change="ActualizarFoto"
                        class="form-control-file"
                        id="foto"
                      />
                    </div>
                  </form>
                  <small>
                    <b>Contraseña</b>(Dejar vacio de no cambiar)
                  </small>
                  <div class="form-group">
                    <input
                      v-model="form.password"
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('password') }"
                    />
                    <has-error :form="form" field="password"></has-error>
                  </div>

                  <!-- Finaliza aqui -->
                </div>
                <div
                  class="tab-pane fade"
                  id="actividad"
                  role="tabpanel"
                  aria-labelledby="actividad-tab"
                >...</div>
              </div>
            </div>
          </div>
          <div class="center-block">
              <center>
              <button type="button" class="btn btn-outline-success" mb-3><i class="fas fa-refresh "></i> Actualizar Info</button>
              </center>
          </div>
          <br>
        </div>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        id: "",
        activo: "",
        nombre: "",
        apellidos: "",
        foto: "",
        tipo: "",
        email: "",
        remember: false
      })
    };
  },

  methods: {
    ActualizarFoto(e) {
      // console.log('Tengo la imagen')
      let file = e.target.files[0];

      let reader = new FileReader();

      reader.onloadend = (file) => {
        // console.log("RESULT", reader.result);
        this.form.foto = reader.result;
      }
      reader.readAsDataURL(file);
    }
  },

  created() {
    axios.get("api/profile").then(({ data }) => this.form.fill(data));
  }
};
</script>
