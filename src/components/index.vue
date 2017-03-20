<style lang="less" scoped>
    @import '../../static/less/index.less';
</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="index-button">
                <a v-on:click="newCustomerDialog" href="javascript:void(0);">新客获取向导</a>
                <a v-on:click="crowdUpDialog" href="javascript:void(0);">存量营销向导</a>
            </div>
            <ul class="index-content">
                <li v-on:click="crowdUpDialog">
                    <a href="javascript:void(0);">
                        <i class="index-icon uc"></i>
                        <h2>上传人群</h2>
                        <h3>Upload Crowd</h3>
                        <p>上传您的客户数据，匹配我们的数据，
                            <br/>对您的客户群体进行深度分析和应用
                        </p>
                    </a>
                </li>
                <li class="clearStorage" data-key="tags">
                    <router-link to="/filter">
                        <i class="index-icon ts"></i>
                        <h2>标签筛选</h2>
                        <h3>Tags Screening</h3>
                        <p>通过我们的海量标签和特征属性库,
                            <br/>筛选出您想要的目标客户群体
                        </p>
                    </router-link>
                </li>
                <li class="clearStorage">
                    <router-link to="/models">
                        <i class="index-icon ms"></i>
                        <h2>建模筛选</h2>
                        <h3>Modeling Screening</h3>
                        <p>使用我们成熟高效的建模模型,
                            <br/>筛选出您想要的目标客户群体
                        </p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/report">
                        <i class="index-icon sa"></i>
                        <h2>统计分析</h2>
                        <h3>Statistical Analysis</h3>
                        <p>多维度分析统计客户群体特征,
                            <br/>为您的决策和应用提供最直观有效的依据
                        </p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/project">
                        <i class="index-icon la"></i>
                        <h2>标签应用</h2>
                        <h3>Label Application</h3>
                        <p>
                            营销应用筛选出来的目标客户群体,
                            <br/>并对营销反馈阶段进行管理
                        </p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/crowd/filter">
                        <i class="index-icon cm"></i>
                        <h2>人群管理</h2>
                        <h3>Crowd Management</h3>
                        <p>对本账号历史上传人群,
                            <br/>和以往筛选记录的相关管理与应用
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="dialog" id="new_customer" v-bind:style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
            <a href="javascript:void(0);" class="dialog-close" v-on:click="closeDialog" title="关闭"></a>
            <div class="dialog-body">
                <div class="dialog-bugButton">
                    <a href="/filter/index.html">
                        <i class="icon01"></i>
                        <span>标签筛选</span>
                    </a>
                    <router-link to="models">
                        <i class="icon02"></i>
                        <span>建模筛选</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import store from 'src/vuex/store'
import router from 'src/router'
export default {
    data: function () {
        return {
            visual: 'none',
            offsetLeft: 0,
            offsetTop: 0
        }
    },
    methods: {
        closeDialog: function () {
            this.$data.visual = 'none'
        },
        crowdUpDialog: function () {
            store.commit('CLOSE_DIALOG')
            store.commit('SHOW_UPLOAD_INIT_DIALOG')
        },
        newCustomerDialog: function () {
            this.$data.visual = 'block'
        }
    },
    mounted: function () {
        var _this = this

        var centerDialog = function (el) {
            var dialog = document.querySelector(el)
            var dh = dialog.offsetHeight,
                dw = dialog.offsetWidth
            _this.offsetLeft = -dw / 2 + 'px'
            _this.offsetTop = -dh / 2 + 'px'
        }

        this.$watch('visual', function (newVal, oldVal) {
            centerDialog('#new_customer')
        })
    }
}
</script>