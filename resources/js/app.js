
require('./bootstrap');

window.Vue = require('vue');

// Tuggle Button - Referencia : http://vue-js-toggle-button.yev.io/
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)


// import Dashboard from './components/Dashboard.vue';

// SISTEMA DE MENSAJES - SWEET ALERT 2 - REF : https://sweetalert2.github.io/#download
// Video Tutorial : https://www.youtube.com/watch?v=qJt6EfbQu6E&list=PL2GMR7k4bG4QOzLtn4WgMmLAjfKiAvRa1&index=19
import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;


//PROGRESS BAR - REFERENCIA : http://hilongjw.github.io/vue-progressbar/
// VIDEO TUTORIAL : https://www.youtube.com/watch?v=-Hl4A5cMH_I&list=PL2GMR7k4bG4QOzLtn4WgMmLAjfKiAvRa1&index=18
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
})


//VFORM - COMPONENTE QUE PERMITE TRABAJAR CON LOS FORMUNLARIO - REFERENCIA : https://github.com/wilfredofermin/vform
window.Form = Form;
import { Form, HasError, AlertError } from 'vform' ;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

//VUE ROUTER - REFERENCIA : https://router.vuejs.org/installation.html
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/developers', component: require('./components/Developers.vue').default },
    { path: '/users', component: require('./components/Usuarios.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default  }
]

const router = new VueRouter({
    routes ,// short for `routes: routes`,
    mode: 'history' // Esto evitar #/tusitio
})

// FORMATEO DE CONTENIDOS - 

//  TEXTOS A CAPITALIZE -  REFERENCIA : https://vuejs.org/v2/guide/filters.html 
Vue.filter('capitalize', function (text) {
    if (!text) return ''
    text = text.toString()
    return text.charAt(0).toUpperCase() + text.slice(1)
})

// TEXTOS A MAYUSCULAS
Vue.filter('mayusculas', function (text) {
    if (!text) return ''
    text = text.toString()
    return text.toUpperCase() 
})

// FORMATEO DE FECHAS - REFERENCIA : https://momentjs.com/
import moment from 'moment'
Vue.filter('fechas', function (created) {
    if (!created) return ''
    return moment(created).format("lll"); 
})

// FIN DE FORMATEO //////////////////////////////////////////////////////


// PASSPORT COMPONENT //////////////////////////////////
Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);


// RECARGAR DATOS -> Ref : https://vuejs.org/v2/guide/components-custom-events.html
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router
});
