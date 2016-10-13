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
const models = function (resolve) {
    require(['components/model/index.vue'], resolve);
};
const report = function (resolve) {
    require(['components/analysis/index.vue'], resolve);
};

const router = new VueRouter({
    routes: [
        {
            path: '/login', name: 'login', component: login
        },
        {
            path: '/', component: common, children: [
                {path: 'index', name:'index', component: index},
                {path: 'models', name:'models', component: models},
                {path: 'report', name:'report', component: report}
            ]
        },
        {
            path: '*', redirect: '/index'
        }
    ]
});
export default router;