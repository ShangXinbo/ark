<template>
    <div class="chart-warp">
        <h2>性别比例</h2>
        <chart :style="{width:'100%',height:'100%'}" ref='pie' :options="options">&nbsp;</chart>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    import ECharts from 'vue-echarts/components/ECharts.vue'
    import Vue from 'vue'
    import _ from 'lodash'

    Vue.component('chart', ECharts)

    export default {
        props: [
            'sex'
        ],
        computed: {
            options: function() {
                let data = this.sex
                let key = ['男', '女']
                let value = [data['男'] ? data['男'] : 0, data['女'] ? data['女'] : 0]

                let _this = this
                this.$nextTick(function() {
                    _this.$refs.pie.resize(_this.$el.offsetWidth, _this.$el.offsetHeight)
                })

                return {
                    legend: {
                        orient: 'horizontal',
                        top: 5,
                        icon: 'rect',
                        data: key,
                        textStyle: {
                            color: "#FFF",
                            fontSize: '12'
                        },
                        selectedMode: false
                    },
                    series: [{
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        label: {
                            normal: {
                                position: "inside",
                                formatter: function(data) {
                                    return data.percent + '%';
                                }
                            }
                        },
                        data: [{
                            value: parseFloat(value[0]),
                            name: key[0],
                            itemStyle: {
                                normal: {
                                    color: "#E94D6A"
                                }
                            }
                        }, {
                            value: parseFloat(value[1]),
                            name: key[1],
                            itemStyle: {
                                normal: {
                                    color: "#09A88D"
                                }
                            }
                        }]
                    }]
                }
            }
        },
        mounted: function() {

        }
    }
</script>