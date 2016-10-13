<style lang="less" scoped>
    @import '../../../static/less/result.less';
</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="filters" v-show="filterConditions">
                <div class="filters-content">
                    <div class="filters-item first">
                        <h3>上传人群：</h3>
                        {{if crowd&&crowd.name}}
                        <span data-crowdid="{{crowd.id}}">{{crowd.name}}<i class="delete"></i></span><i data-dialog="upLoadCrowd" class="modify" data-href="upload"></i>
                        {{else}}
                        <a href="javascript:void(0);" data-dialog="upLoadCrowd">点击筛选</a>
                        {{/if}}
                    </div>
                    <div class="last-two">
                        <div class="filters-item second">
                            <h3>标签筛选：</h3>
                            {{each baskets as item i}}
                            <span data-basketid="{{index?index:0}}" title="{{item.title}}">{{item.text}}<i class="delete"></i></span>
                            {{/each}}
                            {{each filters as item i}}
                            {{each item as fi}}
                            <span data-tagid="{{fi.code}}">{{fi.text}}<i class="delete"></i></span>
                            {{/each}}
                            {{/each}}
                            {{if showFilterBtn}}
                            <a href="/filter/index.html">点击筛选</a>
                            {{else}}
                            <i class="modify" data-href="filter"></i>
                            {{/if}}
                        </div>
                        <div class="filters-item third">
                            <h3>建模筛选：</h3>
                            {{if ucmodel}}
                            <span data-model="{{ucmodel.id}}">{{ucmodel.name}}<i class="delete"></i></span>
                            <i class="modify" data-href="model"></i>
                            {{else}}
                            <a href="/modeling-screening.html">点击筛选</a>
                            {{/if}}
                        </div>
                    </div>
                </div>
                <div class="filters-history">
                    <a href="javascript:void(0);" data-dialog="filterHistory"><i></i><span>使用历史筛选</span></a>
                </div>
            </div>
            <div class="center-button">
                <p class="number"><span>已选客户</span><em></em></p>
                <a style="display: none;" data-save="1" href="javascript:void(0);"><i class="save"></i><span>保存</span></a>
                <a style="display: none;opacity: 0;filter:alpha(opacity=0);"><i class="add"></i><span>创建营销项目</span></a>
            </div>
            <div class="line-chart">
                <div id="chart-line" class="chart-warp">
                </div>
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
            <div id="loading" style="width: 100%;">
                <img style="display: block;margin: 60px auto;" src="/static/img/load.gif"/>
            </div>
            <div class="two-charts-alter" style="display: none;">
                <div class="chart-warp">
                    <h2>性别比例</h2>
                    <div id="genders" style="width: 100%;height: 100%;"></div>
                </div>
                <div class="chart-warp">
                    <h2>地域分布</h2>
                    <div id="areas" style="width: 100%;height: 100%;"></div>
                </div>
            </div>
            <div class="two-charts" style="display: none;">
                <div class="chart-warp">
                    <h2>年龄分布</h2>
                    <div class="age-distribution"></div>
                </div>
                <div class="chart-warp">
                    <h2>手机品牌</h2>
                    <div id="chart-mobile"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            filterConditions: false,
            crowd:{},
            tags:[],
            model:{}
        }
    }
}
</script>