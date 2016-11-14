<template>
    <div class="chart-warp">
        <h2>地域分布</h2>
        <div id="areas" style="width: 100%;height: 100%;"></div>
    </div>
</template>

<script>
import echarts from 'echarts';
require('echarts/map/js/china');
import store from 'src/vuex/store';
import $ from 'jquery';
import {mAjax,accAdd,accSub,accMul,accDiv} from 'src/services/functions';

function arrMerge(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        var item = arr1[i];
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j].name == item.name) {
                item.value = arr2[j].value;
            }
        }
    }
    return arr1;
}

export default {
    mounted: function () {
        $(function () {
            var myChart = echarts.init(document.getElementById('areas'));
            var data = store.state.charts.area;
            var arr_default = [
                {"name": "江西", "value": 0}, {"name": "云南", "value": 0}, {"name": "北京", "value": 0},
                {"name": "江苏", "value": 0}, {"name": "吉林", "value": 0}, {"name": "海南", "value": 0},
                {"name": "湖南", "value": 0}, {"name": "黑龙江", "value": 0}, {"name": "湖北", "value": 0},
                {"name": "福建", "value": 0}, {"name": "河南", "value": 0}, {"name": "河北", "value": 0},
                {"name": "内蒙古", "value": 0}, {"name": "辽宁", "value": 0}, {"name": "宁夏", "value": 0},
                {"name": "天津", "value": 0}, {"name": "甘肃", "value": 0}, {"name": "浙江", "value": 0},
                {"name": "安徽", "value": 0}, {"name": "贵州", "value": 0}, {"name": "广西", "value": 0},
                {"name": "西藏", "value": 0}, {"name": "广东", "value": 0}, {"name": "香港", "value": 0},
                {"name": "重庆", "value": 0}, {"name": "山西", "value": 0}, {"name": "上海", "value": 0},
                {"name": "陕西", "value": 0}, {"name": "四川", "value": 0}, {"name": "青海", "value": 0},
                {"name": "山东", "value": 0}, {"name": "台湾", "value": 0}, {"name": "南海诸岛", "value": 0},
                {"name": "新疆", "value": 0}];
            var arr = [];
            var max = 0;
            var min = 0;
            for (var i in data) {
                arr.push({
                    name: i.replace(/特别行政区|回族自治区|壮族自治区|自治区|省|市/, ''),
                    value: accDiv(Math.round(parseFloat(data[i]) * 100), 100)
                });

                if (max == 0) {
                    max = data[i];
                } else {
                    if (data[i] > max) {
                        max = data[i];
                    }
                }
                if (min == 0) {
                    min = data[i];
                } else {
                    if (data[i] < min) {
                        min = data[i];
                    }
                }
            }
            max = parseFloat(max);
            min = parseFloat(min);
            var diff = accDiv(accSub(max, min), 3);
            if (diff <= 0) {
                diff = 1;
            }
            var option = {
                visualMap: {
                    type: 'piecewise',
                    top: 'top',
                    left: 'center',
                    itemGap: 1,
                    itemHeight: 10,
                    hoverLink: false,
                    textStyle: {
                        color: '#FFF'
                    },
                    orient: 'horizontal',
                    text: ['高', '低'],
                    inRange: {
                        color: ['#313161', '#3E2649', '#5E2F53', '#8A365A', '#E94D6A'],
                        symbol: 'rect'
                    },
                    pieces: [
                        {gte: Math.max(max, accAdd(min, accMul(diff, 3)))},
                        {gte: accAdd(min, accMul(diff, 2)), lt: accAdd(min, accMul(diff, 3))},
                        {gte: accAdd(min, diff), lt: accAdd(min, accMul(diff, 2))},
                        {gte: min, lt: accAdd(min, diff)},
                        {lt: min}
                    ]
                },
                tooltip: {
                    trigger: 'item',
                    fontFamily: 'Microsoft Yahei',
                    fontSize: '12',
                    formatter: function (param) {
                        if (param.value > 0) {
                            return param.name + '：' + accMul(param.value, 10);
                        } else {
                            return param.name;
                        }
                    }
                },
                series: [
                    {
                        type: 'map',
                        map: 'china',
                        data: arrMerge(arr_default, arr),
                        silent: false,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#292952'
                            },
                            emphasis: {
                                areaColor: false,
                                borderColor: '#595990',
                                borderWidth: 1
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        });
    }
};

</script>