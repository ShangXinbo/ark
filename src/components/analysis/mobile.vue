<template>
    <div class="chart-warp">
        <h2>手机品牌</h2>
        <div>
            <ul class="chart-histogram">
                <li v-for="(item,key) in mobile">
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
            'mobile'
        ]
    }
</script>