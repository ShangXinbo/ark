
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import { accAdd } from 'services/functions'

//console.log(accAdd(0.34343434343436,23.2323424234))


Vue.use(vueResource)

new Vue({
    el: '#warp-page',
    router,
    template: '<App/>',
    components: { App },
})