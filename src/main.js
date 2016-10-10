

import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from 'src/App';
import index from 'components/index.vue';
import login from 'components/login.vue';
import store from 'src/vuex/store.js';

Vue.use(VueRouter);
Vue.use(vueResource);


const router = new VueRouter({
    routes: [
        {path:'/index',name:'index',component: index},
        {path:'/login',name:'login',component: login},
        {path:'*',redirect:'/index'}
    ]
});


new Vue({
    el: 'body',
    router: router,
    render: h => h(App)
});
