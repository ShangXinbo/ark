<template>
    <div class="chart-warp">
        <h2>性别比例</h2>
        <div id="genders" style="width: 100%;height: 100%;"></div>
    </div>
</template>
<script>

import echarts from 'echarts';
import store from 'src/vuex/store';

export default {
    activated:function(){
        console.log(1);
        var myChart = echarts.init(document.getElementById('genders'));
        var data = store.state.charts.sex;
        var key = ['男', '女'], value = [data['男'] ? data['男'] : 0, data['女'] ? data['女'] : 0];
        var option = {
            legend: {
                orient: 'horizontal',
                top: 5,
                icon: 'rect',
                data: key,
                textStyle: {
                    color: "#FFF",
                    fontSize: '12'
                },
                selectedMode:false
            },
            series: [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            position: "inside",
                            formatter: function (data) {
                                return data.percent + '%';
                            }
                        }
                    },
                    data: [
                        {
                            value: parseFloat(value[0]),
                            name: key[0],
                            itemStyle: {
                                normal: {
                                    color: "#E94D6A"
                                }
                            }
                        },
                        {
                            value: parseFloat(value[1]),
                            name: key[1],
                            itemStyle: {
                                normal: {
                                    color: "#09A88D"
                                }
                            }
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }
};

</script>