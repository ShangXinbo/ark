<style lang="less" scoped>
    @import '../../../static/less/result.less';
</style>
<template>
    <div class="line-chart">
        <chart class="chart-warp" :options="options"></chart>
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
                <li v-for="item in legend" class="checked" data-id="0">
                    <i class="icon"></i>
                    <em v-bind:style="{'background-color':item.color}"></em>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import _ from 'lodash'
    import Vue from 'vue'
    import API from 'src/services/api'
    import {
        mAjax
    } from 'src/services/functions'

    Vue.component('chart', ECharts)

    export default {
        data: function () {
            let lineStyle = {
                color: '#60597C'
            }
            return {
                options: {
                    xAxis: {
                        name: "日期",
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        splitLine: {
                            show: true,
                            lineStyle: lineStyle
                        },
                        axisLine: {
                            lineStyle: lineStyle
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    yAxis: [{
                        name: "人数",
                        nameTextStyle: {
                            color: '#8E87A5',
                            fontSize: '14'
                        },
                        type: 'value',
                        splitLine: {
                            lineStyle: lineStyle
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(250,250,250,0)', '#3F3D66']
                            }
                        },
                        axisLine: {
                            lineStyle: lineStyle
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    }],
                    grid: {
                        left: '3%',
                        right: '5%',
                        containLabel: true
                    },
                    tooltip: {
                        show: true,
                        formatter: function (obj) {
                            return obj.seriesName + '<br />' + obj.name + ' : ' + formatBigNumber(obj.value)
                        }
                    },
                    series: []
                },
                legend: []
            }
        },
        mounted: function () {
            let _this = this
            mAjax(this, {
                url: API.filter_searchline,
                data: {
                    uploadId: store.state.filters.crowd.id,
                    tags: JSON.stringify({
                        tagcode: store.state.filters.filter.tagcode,
                        fixedpros: store.state.filters.filter.fixedpros,
                        file: store.state.filters.crowd,
                        cuModel: store.state.filters.model
                    })
                },
                success: function (data) {
                    if (data.code == 200 && !_.isEmpty(data.detail.group_res)) {
                        data = data.detail.group_res.slice(0, 5)
                        let lineColor = ['#E94D6A', '#09A88D', '#398AD6', '#B84BC8', '#CC855A']
                        let lineSybol = ['ring-red.png', 'ring-green.png', 'ring-blue.png', 'ring-violet.png', 'ring-brown.png']
                        var xArr = [],
                            itemArr = [],
                            legend = []

                        for (let i = 0; i < data.length; i++) {
                            var ob = {
                                type: 'line',
                                symbolSize: 9,
                                symbol: '/static/img/' + lineSybol[i],
                                smooth: true,
                                lineStyle: {
                                    normal: {
                                        color: lineColor[i]
                                    }
                                },
                                name: data[i]['label'],
                                connectNulls: false,
                                data: []
                            }
                            xArr = []
                            for (var j = 0; j < data[i]['vals'].length; j++) {
                                xArr.push(data[i]['vals'][j]['date'])
                                ob.data.push(data[i]['vals'][j]['val'])
                            }
                            itemArr.push(ob)
                            _this.legend.push({
                                id: i,
                                color: lineColor[i],
                                name: data[i]['label'].replace(/特别行政区|回族自治区|壮族自治区|自治区|省|市/, '')
                            })
                        }
                        _this.options.xAxis.data = xArr
                        _this.options.series = itemArr
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            })
        }
    }

    function formatBigNumber(num) {
        var str = num + ''
        return str.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('')
    }

</script>