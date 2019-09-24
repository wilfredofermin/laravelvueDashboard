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
</style>

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
            <h3 class="widget-user-username">Elizabeth Pierce</h3>
            <h5 class="widget-user-desc">Web Designer</h5>
          </div>
          <div class="widget-user-image">
            <img class="img-circle" src="/img/profile/wfermin.jpg" alt="User Avatar" />
          </div>
          <div class="box-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">3,200</h5>
                  <span class="description-text">SALES</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">35</h5>
                  <span class="description-text">PRODUCTS</span>
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
              <ul class="nav nav-pills mb-3 verdevida" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >Home</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link moradoviva"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >Profile</a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >Contact</a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >...</div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                <div class="form-group">
                    <input v-model="form.nombre" type="text" name="nombre" placeholder="Nombre" ref="nombre" 
                        class="form-control" :class="{ 'is-invalid': form.errors.has('nombre') }">
                    <has-error :form="form" field="nombre"></has-error>
                  </div>
                  <div class="form-group">
                    <input v-model="form.apellidos" type="text" name="apellidos" placeholder="Apellidos"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('apellidos') }">
                    <has-error :form="form" field="apellidos"></has-error>
                  </div>
                   <!-- <div class="form-group" v-show="!editmode"> -->
                   <div class="form-group" >
                    <input v-model="form.email" type="text" name="email" placeholder="Correo electronico"
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
                
                
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >...</div>
              </div>
            </div>
          </div>
          <!-- /.card -->
        </div>
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
  created() {
   
     axios.get('api/profile')
     .then (({data}) => (this.form.fill(data)));
   
    }
};
</script>
