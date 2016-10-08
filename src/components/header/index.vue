<template>
    <div class="header">
        <h1>
            <a href="/index" title="集奥方舟">
                <img src="/static/img/logo.png" width="148" height="43" alt="集奥方舟" title="集奥方舟"/>
            </a>
        </h1>
        <ul class="header-content">
            <li>
                <a class="icon news-icon" href="/users/message.html"></a>
            </li>
            <vaccount v-on:click.stop="showTab('account')" v-bind:class="{'li-hover': showAccountTab}"></vaccount>
            <li v-on:click.stop="showTab('nav')" v-bind:class="{'li-hover': showHeaderNav}">
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
export default {
    data: function () {
        return {
            showAccountTab: 0,
            showHeaderNav: 0
        };
    },
    components: {
        vaccount: vaccount
    },
    methods: {
        showTab: function (str) {
            if (str == 'account') {
                this.showAccountTab = 1;
                this.showHeaderNav = 0;
            }
            if (str == 'nav') {
                this.showHeaderNav = 1;
                this.showAccountTab = 0;
            }
        }
    },
    mounted: function () {
        var _this = this;
        Vue.nextTick(function(){
            document.onclick = function () {
                _this.showAccountTab = 0;
                _this.showHeaderNav = 0;
            };
        });
    }
};
</script>
