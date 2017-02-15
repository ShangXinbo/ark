<style lang="less">
    @import '../../../static/less/result.less';
</style>
<template>
    <div class="warp">
        <div class="main">
            <v-filter></v-filter>
            <div class="center-button">
                <p class="number">
                    <span>已选客户</span>
                    <em>{{scale}}</em>
                </p>
                <a>
                    <i class="add"></i>
                    <span>筛选人群</span>
                </a>
            </div>
            <line-chart></line-chart>
            <div id="loading" v-show="!scale">
                <img style="display: block;margin: 60px auto;" src="/static/img/load.gif" />
            </div>
            <div class="two-charts-alter" v-show="scale">
                <sex-chart :sex="sex"></sex-chart>
                <area-chart :area="area"></area-chart>
            </div>
            <div class="two-charts" v-show="scale">
                <age-chart :age="age"></age-chart>
                <mobile-chart :mobile="mobile"></mobile-chart>
            </div>
        </div>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    import { mAjax } from 'src/services/functions'
    import API from 'src/services/api'
    import filter from 'components/analysis/report.vue'
    import lineChart from 'components/analysis/chartLine.vue'
    import ageChart from 'components/analysis/age.vue'
    import areaChart from 'components/analysis/area.vue'
    import mobileChart from 'components/analysis/mobile.vue'
    import sexChart from 'components/analysis/sex.vue'

    export default {
        components: {
            'v-filter': filter,
            'line-chart': lineChart,
            'sex-chart': sexChart,
            'age-chart': ageChart,
            'area-chart': areaChart,
            'mobile-chart': mobileChart
        },
        data: function () {
            return {
                "dataReady": 0,
                "scale": '',
                "sex": '',
                "area": '',
                "age": '',
                "mobile": ''
            }
        },
        mounted: function () {
            var _this = this
            mAjax(this, {
                url: API.filter_searchdim,
                data: {
                    uploadId: store.state.filters.crowd.id,
                    tags: store.state.filters.filter
                },
                success: function (data) {
                    if (data.code == 200) {
                        _this.scale = data.detail.cus_total
                        _this.sex = data.detail.dim_res.sex
                        _this.area = data.detail.dim_res.area
                        _this.age = data.detail.dim_res.age
                        _this.mobile = data.detail.dim_res.mobile
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            })
        }
    }

</script>