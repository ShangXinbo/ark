<template>
    <div class="chart-warp">
        <h2>年龄分布</h2>
        <div class="age-distribution">
            <ul class="chart-histogram">
                <li v-for="(item,key) in age">
                    <h3>{{key}}</h3>
                    <div class="histogram num-outside"><p v-bind:style="{'width':item}"></p><span>{{item}}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'age'
        ]
    }
</script>