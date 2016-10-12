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
            <a data-quit="1" href="javascript:void(0)">
                <i class="icon icon02"></i>
                <span>退 出</span>
            </a>
        </div>
    </li>
</template>
<script>
import store from 'src/vuex/store.js';

export default {
    data: function () {
        return {
            type: store.state.user ? store.state.user.type : '',
            username: store.state.user.username ? store.state.user.username : ''
        };
    },
    computed: {
        down: function () {
            return store.state.header.account;
        }
    },
    methods: {
        show: function () {
            store.commit('SHOW_ACCOUNT_TAB');
        }
    }
};
</script>
