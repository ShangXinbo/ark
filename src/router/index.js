import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from 'src/services/functions'

Vue.use(Router)

// 懒加载组件
const login = resolve => System.import('components/login.vue')
const common = resolve => System.import('src/common.vue')
const index = resolve => System.import('components/index.vue')
const models = resolve => System.import('components/model/index.vue')
const report = resolve => System.import('components/analysis/index.vue')
const filter = resolve => System.import('components/filter/index.vue')
const message = resolve => System.import('components/message/index.vue')
const crowd = resolve => System.import('components/crowd/index.vue')
const crowd_filter = resolve => System.import('components/crowd/filter.vue')
const crowd_tag = resolve => System.import('components/crowd/tag.vue')
const crowd_upload = resolve => System.import('components/crowd/upload.vue')
const project_index = resolve => System.import('components/project/index.vue')
const project_create = resolve => System.import('components/project/create.vue')
const project_detail = resolve => System.import('components/project/detail/index.vue')

let mRouter = new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/',
        component: common,
        children: [
            { path: 'index', name: 'index', component: index },
            { path: 'models', name: 'models', component: models },
            { path: 'report', name: 'report', component: report },
            { path: 'filter', name: 'filter', component: filter },
            { path: 'message/:page?', name: 'message', component: message },
            {
                path: 'crowd/',
                component: crowd,
                children: [
                    { path: 'filter/:page?', name: 'crowd_filter', component: crowd_filter },
                    { path: 'tag/:page?', name: 'crowd_tag', component: crowd_tag },
                    { path: 'upload/:page?', name: 'crowd_upload', component: crowd_upload },
                ]
            },
            { path: 'project/create', name: 'project_create', component: project_create },
            { path: 'project/detail', name: 'project_detail', component: project_detail },            
            { path: 'project/:page?', name: 'project_index', component: project_index }
        ]
    },
    {
        path: '*',
        redirect: '/index'
    }
    ]
})

mRouter.beforeEach(function (to, from, next) {
    let user = JSON.parse(getCookie('user'))
    let path = to.path
    if (!user && path != '/login') {
        next({ path: '/login' })
    } else if (path == '/') {
        next({ path: '/index' })
    } else {
        next()
    }
})
export default mRouter
