

import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from 'src/App';
import index from 'components/index.vue';

Vue.use(VueRouter);
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
