<template>
    <li v-on:click.stop="show" v-bind:class="{'li-hover': down}">
        <i class="icon login-icon"></i>
        <div id="quit" class="quit">
            <p>{{ username }}</p>
            <a href="/users/index.html">
                <i class="icon icon01"></i>
                <span v-if="type>0">账号管理</span>
                <span v-else>我的账号</span>
            </a>
            <a v-on:click="logout" href="javascript:void(0)">
                <i class="icon icon02"></i>
                <span>退 出</span>
            </a>
        </div>
    </li>
</template>
<script>
    import store from 'src/vuex/store.js'
    import { getCookie, delCookie } from 'src/services/functions'
    import router from 'src/router'
    let user = JSON.parse(getCookie('user'))

    export default {
        data: function () {
            return {
                type: user ? user.type : '',
                username: user.username ? user.username : ''
            }
        },
        computed: {
            down: function () {
                return store.state.header.account
            }
        },
        methods: {
            show: function () {
                store.commit('SHOW_ACCOUNT_TAB')
            },
            logout: function () {
                delCookie('user')
                router.push('login')
            }
        }
    }

</script>