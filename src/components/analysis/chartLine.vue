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
            <li v-for="item in lengends" class="checked" data-id="0">
                <i class="icon"></i>
                <em style="background-color:#E94D6A"></em>
                <span>客户量</span>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import store from 'src/vuex/store';
import echarts from 'echarts';
import {mAjax} from 'src/services/functions';
import API from 'src/services/api';
import $ from 'jquery';

export default {
    data: function () {
        return {
            data: {}
        };
    },
    mounted: function () {
        var _this = this;
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
                if (data.code == 200) {
                    if (data.detail.group_res && data.detail.group_res.length > 0) {
                        line(data.detail.group_res);
                    } else {
                        $('.line-chart').html('<div class="data-null">暂无数据</div>');
                    }
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
};

function line(data){
    data = data.slice(0, 5);
    var xArr = [], itemArr = [], legend = [];
    var lineColor = ['#E94D6A', '#09A88D', '#398AD6', '#B84BC8', '#CC855A'];
    var lineSybol = ['ring-red.png', 'ring-green.png', 'ring-blue.png', 'ring-violet.png', 'ring-brown.png'];
    for (var i = 0; i < data.length; i++) {
        var ob = {
            type: 'line',
            symbolSize: 9,
            symbol: 'static/img/' + lineSybol[i],
            smooth: true,
            lineStyle: {
                normal: {
                    color: lineColor[i]
                }
            },
            name: data[i]['label'],
            connectNulls: false,
            data: []
        };
        xArr = [];
        for (var j = 0; j < data[0]['vals'].length; j++) {
            xArr.push(data[0]['vals'][j]['date']);
            ob.data.push(data[i]['vals'][j]['val']);
        }
        itemArr.push(ob);
        legend.push({
            id: i,
            color: lineColor[i],
            name: data[i]['label'].replace(/特别行政区|回族自治区|壮族自治区|自治区|省|市/, '')
        });
    }
    //$('.line-legend-item').replaceWith(template('legend', {legend: legend}));

    var myChart = echarts.init(document.getElementById('chart-line'));
    var option = {
        xAxis: {
            name:"日期",
            type: 'category',
            boundaryGap: false,
            data: xArr,
            splitLine: {
                show:true,
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
        yAxis: [
            {
                name: "人数",
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
                    }
                }
            }
        ],
        grid: {
            left: '3%',
            right: '5%',
            containLabel: true
        },
        tooltip : {
            show: true,
            formatter: function(obj){
                console.log(obj);
                return obj.seriesName + '<br />' + obj.name + ' : ' + formatBigNumber(obj.value);
            }
        },
        series: itemArr
    };
    myChart.setOption(option);
}

function formatBigNumber(num) {
    var str = num + '';
    return str.split('').reverse().join('').replace(/(\d{3})/g, '$1,').replace(/\,$/, '').split('').reverse().join('');
}

</script>