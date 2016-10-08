

import Vue from 'vue';
import Vuex from 'vuex';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from 'src/App';
import index from 'components/index.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(vueResource);

const router = new VueRouter({
    routes: [
        {path:'/index',component: index},
        {path:'*',redirect:'/index'}
    ]
});

new Vue({
    el: 'body',
    router: router,
    render: h => h(App)
});
