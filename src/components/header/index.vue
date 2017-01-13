<template>
    <div class="header">
        <h1>
            <router-link to="index" title="集奥方舟">
                <img src="/static/img/logo.png" width="148" height="43" alt="集奥方舟" title="集奥方舟"/>
            </router-link>
        </h1>
        <ul class="header-content">
            <li>
                <router-link class="icon news-icon" to="message"></router-link>
            </li>
            <vaccount></vaccount>
            <li v-on:click.stop="nav()" v-bind:class="{'li-hover': headerNav}">
                <i class="icon nav-icon"></i>
                <div class="nav">
                    <a href="javascript:void(0);" data-dialog="upLoadCrowd" class="clearStorage">
                        <!--[if IE 8 ]><em class="icon"></em><![endif]-->
                        <i class="icon nav01"></i><span>人群上传</span>
                    </a>
                    <a href="/filter/index.html" class="clearStorage">
                        <!--[if IE 8 ]><em class="icon"></em><![endif]-->
                        <i class="icon nav02"></i><span>标签筛选</span>
                    </a>
                    <a href="/modeling-screening.html" class="clearStorage">
                        <!--[if IE 8 ]><em class="icon"></em><![endif]-->
                        <i class="icon nav03"></i><span>建模筛选</span>
                    </a>
                    <a href="/report.html?ana=1">
                        <!--[if IE 8 ]><em class="icon"></em><![endif]-->
                        <i class="icon nav04"></i><span>统计分析</span>
                    </a>
                    <a data-href="datause" href="/project/list.html">
                        <!--[if IE 8 ]><em class="icon"></em><![endif]-->
                        <i class="icon nav05"></i><span>标签应用</span>
                    </a>
                    <a href="/upload/history/index.html">
                        <!--[if IE 8 ]><em class="icon"></em><![endif]-->
                        <i class="icon nav06"></i><span>人群管理</span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue';
import vaccount from 'components/header/account.vue';
import store from 'src/vuex/store';
export default {
    computed: {
        headerNav: function () {
            return store.state.header.nav;
        }
    },
    components: {
        vaccount: vaccount
    },
    methods: {
        nav: function (str) {
            store.commit('SHOW_NAV');
        }
    },
    mounted: function () {
        var _this = this;
        Vue.nextTick(function () {
            document.onclick = function () {
                store.commit('HIDE_NAV');
            };
        });
    }
};
</script>
