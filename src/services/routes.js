/**
 * NAME 2016/10/12
 * DATE 2016/10/12
 * AUTHOR shangxinbo
 */

import VueRouter from 'vue-router';
import {getCookie} from 'src/services/functions';


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

const router = new VueRouter({
    routes: [
        {
            path: '/login', name: 'login', component: login
        },
        {
            path: '/', component: common, children: [
                {path: 'index', name:'index', component: index},
                {path: 'models', name:'models', component: models},
                {path: 'report', name:'report', component: report},
                {path: 'filter', name:'filter', component: filter}
            ]
        },
        {
            path: '*', redirect: '/index'
        }
    ]
});
router.beforeEach(function(to,from,next){
    let user = JSON.parse(getCookie('user'));
    let path = to.path;
    if(!user&&path!='/login'){
        next({path: '/login'});
    }else if(path=='/'){
        next({path:'/index'});
    }else{
        next();
    }
})
export default router;