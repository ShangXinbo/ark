/**
 * NAME 2016/10/12
 * DATE 2016/10/12
 * AUTHOR shangxinbo
 */

import VueRouter from 'vue-router';
import common from 'src/common.vue';

// 懒加载组件
const login = function (resolve) {
    require(['components/login.vue'], resolve);
};
const index = function (resolve) {
    require(['components/index.vue'], resolve);
};

const router = new VueRouter({
    routes: [
        {path: '/login', name: 'login', component: login},
        {
            path: '/', component: common, children: [
                {path: 'index', name:'index', component: index}
            ]
        },
        {path: '*', redirect: '/index'}
    ]
});
export default router;