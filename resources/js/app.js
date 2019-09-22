
require('./bootstrap');

window.Vue = require('vue');

// import Dashboard from './components/Dashboard.vue';


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
    return moment(created).format("MMM Do YY");  
})

// FIN DE FORMATEO //////////////////////////////////////////////////////

const app = new Vue({
    el: '#app',
    router
});
