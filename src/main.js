
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import store from './vuex/store'

Vue.use(vueResource)

new Vue({
    el: '#warp-page',
    router,
    store,
    template: '<App/>',
    components: { App },
})