
require('./bootstrap');

window.Vue = require('vue');

window.Form = Form;

// import Dashboard from './components/Dashboard.vue';

import { Form, HasError, AlertError } from 'vform' ;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)



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


//  Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router
});
