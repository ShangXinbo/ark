<style lang="less" scoped>
    @import '../../../static/less/result.less';
</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="center-button">
                <p class="number"><span>已选客户</span><em></em></p>
                <a><i class="add"></i><span>筛选人群</span></a>
            </div>
            <line-chart></line-chart>
            <div id="loading" style="width: 100%;">
                <img style="display: block;margin: 60px auto;" src="/static/img/load.gif"/>
            </div>
            <div class="two-charts-alter" style="display: none;">
                <sex-chart></sex-chart>
                <area-chart></area-chart>
            </div>
            <div class="two-charts" style="display: none;">
                <age-chart></age-chart>
                <mobile-chart></mobile-chart>
            </div>
        </div>
    </div>
</template>
<script>
import lineChart from 'components/analysis/chartLine.vue';
import ageChart from 'components/analysis/age.vue';
import areaChart from 'components/analysis/area.vue';
import mobileChart from 'components/analysis/mobile.vue';
import sexChart from 'components/analysis/sex.vue';

export default {
    components:{
        'line-chart': lineChart,
        'age-chart': ageChart,
        'area-chart': areaChart,
        'mobile-chart':mobileChart,
        'sex-chart':sexChart
    },
    data: function () {
        return {
            filterConditions: false,
            crowd: {},
            tags: [],
            model: {}
        }
    },
    method:function(){

    }
}
</script>