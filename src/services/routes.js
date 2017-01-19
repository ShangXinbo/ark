/**
 * NAME 2016/10/12
 * DATE 2016/10/12
 * AUTHOR shangxinbo
 */

import VueRouter from 'vue-router';
import { getCookie } from 'src/services/functions';

// 懒加载组件
const login = function (resolve) {
    require(['components/login.vue'], resolve);
};
const common = function (resolve) {
    require(['src/common.vue'], resolve);
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
const filter = function (resolve) {
    require(['components/filter/index.vue'], resolve);
};
const message = function (resolve) {
    require(['components/message/index.vue'], resolve);
};
const crowd = function (resolve) {
    require(['components/crowd/index.vue'], resolve);
};
const crowd_filter = function (resolve) {
    require(['components/crowd/filter.vue'], resolve);
};
const crowd_tag = function (resolve) {
    require(['components/crowd/tag.vue'], resolve);
};
const crowd_upload = function (resolve) {
    require(['components/crowd/upload.vue'], resolve);
};


const router = new VueRouter({
    routes: [
        {
            path: '/login', name: 'login', component: login
        },
        {
            path: '/', component: common, children: [
                { path: 'index', name: 'index', component: index },
                { path: 'models', name: 'models', component: models },
                { path: 'report', name: 'report', component: report },
                { path: 'filter', name: 'filter', component: filter },
                { path: 'message/:page?', name: 'message', component: message },
                {
                    path: 'crowd/', component: crowd, children: [
                        { path: 'filter/:page?', name: 'crowd_filter', component: crowd_filter },
                        { path: 'tag/:page?', name: 'crowd_tag', component: crowd_tag },
                        { path: 'upload/:page?', name: 'crowd_upload', component: crowd_upload },
                    ]
                }
            ]
        },
        {
            path: '*', redirect: '/index'
        }
    ]
});
router.beforeEach(function (to, from, next) {
    let user = JSON.parse(getCookie('user'));
    let path = to.path;
    if (!user && path != '/login') {
        next({ path: '/login' });
    } else if (path == '/') {
        next({ path: '/index' });
    } else {
        next();
    }
});
export default router;