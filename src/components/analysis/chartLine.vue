<style lang="less" scoped>
    @import '../../../static/less/result.less';
</style>
<template>
    <div class="line-chart">
        <div id="chart-line" class="chart-warp"></div>
        <div class="line-legend">
            <div class="select-warp">
                <p>客户量</p>
                <ul>
                    <li data-group="default">客户量</li>
                    <li data-group="sex">性别比例</li>
                    <li data-group="age">年龄分布</li>
                    <li data-group="area">地域分布</li>
                    <li data-group="mobile">手机品牌</li>
                </ul>
            </div>
            <ul class="line-legend-item">
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            data:{}
        }
    },
}

</script>