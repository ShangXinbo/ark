<template>
        <div class="line-chart">
            <chart class="chart-warp" :style="{width:'100%',height:'100%'}" ref='line' :options="option" auto-resize></chart>
            <div class="line-legend">
                <ul class="line-legend-item">
                    <li v-for="item in legend" :data-id="item.id" :title="item.title"><em :style="{'background-color':item.color}"></em><span>{{item.name}}</span></li>
                </ul>
            </div>
        </div>
</template>
<script>
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import _ from 'lodash'
    import Vue from 'vue'
    import API from 'src/services/api'
    import { mAjax } from 'src/services/functions'
    import 'echarts'

    Vue.component('chart', ECharts)
    let lineStyle = {
        color: '#60597C'
    }
    export default{
        data:() => {
            return {
                option: {
                    xAxis: {
                        name: "周期",
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#60597C'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#60597C'
                            }
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
                    tooltip : {
                        show: true,
                        formatter: '{b0}<br />{a0}：{c0}%'
                    },
                    yAxis: [
                        {
                            name: "转化率",
                            nameTextStyle: {
                                color: '#8E87A5',
                                fontSize: '14'
                            },
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    color: '#60597C'
                                }
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['rgba(250,250,250,0)', '#3F3D66']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#60597C'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                },
                                formatter: '{value} %'
                            }
                        }
                    ],
                    grid: {
                        left: '3%',
                        right: '5%',
                        containLabel: true
                    },
                    series: []
                },
                legend: []
            }
        },
        props:['projectId'],
        beforeMount: function(){
            var _this = this
            // console.log(_this.projectId)
            mAjax(this,{
                url:API.project_detail_linechart,
                data:{
                    project_id: _this.projectId
                },
                success:function(data){
                    if (data.code == 200) {
                        if (data.detail.change_score) {
                            lineChart(data.detail)
                        }
                    }
                },
                error:function(err){

                }
            })
            function lineChart(data) {
                if (!data) return false
                var itemArr = [], legend = []
                var lineColor = ['#E94D6A', '#09A88D', '#398AD6', '#B84BC8', '#CC855A']
                var lineSybol = ['ring-red.png', 'ring-green.png', 'ring-blue.png', 'ring-violet.png', 'ring-brown.png']

                for (var i = 0; i < data.ciclyName.length; i++) {
                    var ob = {
                        type: 'line',
                        symbolSize: 9,
                        // symbol: 'image://' + STATIC + '../img/' + lineSybol[i],
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: lineColor[i]
                            }
                        },
                        name: data.ciclyName[i],
                        connectNulls: false,
                        data: []
                    }
                    for (var j = 0; j < data.change_score.length; j++) {
                        ob.data.push(data.change_score[j][i])
                    }
                    itemArr.push(ob)
                    legend.push({
                        id: i,
                        color: lineColor[i],
                        name: data.ciclyName[i].slice(0, 5),
                        title: data.ciclyName[i]
                    })
                }
                _this.legend = legend
                // $('.line-legend-item').replaceWith(template('legend', {legend: legend}))

                // var myChart = echarts.init(document.getElementById('cutline'))
                // console.log('itemArr')
                // console.log(itemArr)
                var option = {
                    xAxis: {
                        name: "周期",
                        type: 'category',
                        boundaryGap: false,
                        data: data.date,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#60597C'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#60597C'
                            }
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
                    tooltip : {
                        show: true,
                        formatter: '{b0}<br />{a0}：{c0}%'
                    },
                    yAxis: [
                        {
                            name: "转化率",
                            nameTextStyle: {
                                color: '#8E87A5',
                                fontSize: '14'
                            },
                            type: 'value',
                            splitLine: {
                                lineStyle: {
                                    color: '#60597C'
                                }
                            },
                            splitArea: {
                                show: true,
                                areaStyle: {
                                    color: ['rgba(250,250,250,0)', '#3F3D66']
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#60597C'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#fff'
                                },
                                formatter: '{value} %'
                            }
                        }
                    ],
                    grid: {
                        left: '3%',
                        right: '5%',
                        containLabel: true
                    },
                    series: itemArr
                }
                _this.option = option
                console.log(JSON.parse(JSON.stringify(itemArr)))
            }


        },
        mounted:function(){
            this.$nextTick(function(){
                console.log(this.$refs.line)
                console.log(this.$el.offsetWidth)
                this.$refs.line.resize(this.$el.offsetWidth, this.$el.offsetHeight)
            })
        }
    }
    function formatBigNumber(num) {
        var str = num + ''
        return str.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('')
    }
</script>