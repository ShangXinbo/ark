<template>
    <div class="header">
        <h1>
            <router-link to="/index" title="集奥方舟">
                <img src="/static/img/logo.png" width="148" height="43" alt="集奥方舟" title="集奥方舟" />
            </router-link>
        </h1>
        <ul class="header-content">
            <li>
                <router-link class="icon news-icon" to="/message"></router-link>
            </li>
            <vaccount></vaccount>
            <li v-on:click.stop="showNav()" v-bind:class="{'li-hover': navToggle}">
                <i class="icon nav-icon"></i>
                <div class="nav" v-on:click.stop>
                    <a class="clearStorage" v-on:click="hideNav()" href="javascript:void(0)">
                        <i class="icon nav01"></i>
                        <span>人群上传</span>
                    </a>
                    <router-link to="/filter">
                        <i class="icon nav02"></i>
                        <span>标签筛选</span>
                    </router-link>
                    <router-link to="/models">
                        <i class="icon nav03"></i>
                        <span>建模筛选</span>
                    </router-link>
                    <router-link to="/report">
                        <i class="icon nav04"></i>
                        <span>统计分析</span>
                    </router-link>
                    <router-link to="/project">
                        <i class="icon nav05"></i>
                        <span>标签应用</span>
                    </router-link>
                    <router-link to="/crowd/filter">
                        <i class="icon nav06"></i>
                        <span>人群管理</span>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    import vaccount from 'components/common/account.vue'
    import router from 'src/router'

    export default {
        computed:{
            navToggle(){
                return this.$store.state.header.nav
            }
        },
        components: {
            vaccount
        },
        methods: {
            showNav: function () {
                this.$store.commit('SHOW_NAV')
            },
            hideNav: function () {
                this.$store.commit('HIDE_NAV')
            }
        },
        mounted: function () {
            let _this = this
            Vue.nextTick(function () {
                document.onclick = function () {
                    _this.hideNav()
                }
            })
            router.afterEach(route => {
                _this.hideNav()
            })
        }
    }

</script>