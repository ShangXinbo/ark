<template>
    <div class="chart-warp">
        <h2>地域分布</h2>
        <chart ref='map' :options="options"></chart>
    </div>
</template>

<script>
    import store from 'src/vuex/store'
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import Vue from 'vue'
    import _ from 'lodash'
    import chinaMap from './china.json'
    import {
        mAjax,
        accAdd,
        accSub,
        accMul,
        accDiv
    } from 'src/services/functions'
    import area_default_data from './default_area'

    //ECharts.registerMap('china', chinaMap)
    Vue.component('chart', ECharts)

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
        props: [
            'area',
        ],
        computed: {
            options: function() {
                var arr = [];
                var max = 0;
                var min = 0;
                let data = this.area
                let arr_default = area_default_data

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

                return {
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
                        pieces: [{
                            gte: Math.max(max, accAdd(min, accMul(diff, 3)))
                        }, {
                            gte: accAdd(min, accMul(diff, 2)),
                            lt: accAdd(min, accMul(diff, 3))
                        }, {
                            gte: accAdd(min, diff),
                            lt: accAdd(min, accMul(diff, 2))
                        }, {
                            gte: min,
                            lt: accAdd(min, diff)
                        }, {
                            lt: min
                        }]
                    },
                    tooltip: {
                        trigger: 'item',
                        fontFamily: 'Microsoft Yahei',
                        fontSize: '12',
                        formatter: function(param) {
                            if (param.value > 0) {
                                return param.name + '：' + accMul(param.value, 10);
                            } else {
                                return param.name;
                            }
                        }
                    },
                    series: [{
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
                    }]
                }
            }
        }
    }
</script>