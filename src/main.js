
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.use(vueResource)

new Vue({
    el: '#warp-page',
    router,
    template: '<App/>',
    components: { App },
})