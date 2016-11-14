<template>
    <div class="chart-warp">
        <h2>年龄分布</h2>
        <div class="age-distribution">
            <ul class="chart-histogram">
                <li v-for="(item,key) in ages">
                    <h3>{{key}}</h3>
                    <div class="histogram num-outside"><p v-bind:style="{'width':item}"></p><span>{{item}}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

import echarts from 'echarts';
import store from 'src/vuex/store';
export default {
    data:function(){
        return {
            ages : store.state.charts.age
        };
    }
};
</script>