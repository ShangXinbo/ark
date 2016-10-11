import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from 'src/App';
import common from 'src/common.vue';
import store from 'src/vuex/store.js';

// 懒加载组件
const login = function (resolve) {
    require(['components/login.vue'], resolve);
};
const index = function (resolve) {
    require(['components/index.vue'], resolve);
};

Vue.use(VueRouter);
Vue.use(vueResource);

const router = new VueRouter({
    routes: [
        {path: '/login', name: 'login', component: login},
        {
            path: '/', component: common, children: [
            {path: 'index', component: index}
        ]
        },
        {path: '*', redirect: '/index'}
    ]
});

new Vue({
    el: 'body',
    router: router,
    render: h => h(App)
});
