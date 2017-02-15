<template>
    <div :class="{'whole-page':wholePage}">
        <vheader></vheader>
        <router-view></router-view>
        <div class="footer">
            <p>Copyright&nbsp;&copy;&nbsp;2016&nbsp;集奥聚合</p>
        </div>
        <dialog-crowd-method></dialog-crowd-method>
        <dialog-crowd-create></dialog-crowd-create>
        <dialog-crowd-select></dialog-crowd-select>
        <div id="shadowLayer" v-show="layerStatus"></div>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    import vheader from 'components/header/index.vue'
    import dialogCrowdMethod from 'components/dialog/crowdMethod'
    import dialogCrowdCreate from 'components/dialog/crowdCreate'
    import dialogCrowdSelect from 'components/dialog/crowdSelect'
    export default {
        store: store,
        components: {
            'vheader': vheader,
            'dialog-crowd-method': dialogCrowdMethod,
            'dialog-crowd-create': dialogCrowdCreate,
            'dialog-crowd-select': dialogCrowdSelect
        },
        computed: {
            wholePage: function () {
                return store.state.wholePage
            },
            layerStatus: function () {
                return store.state.showLayer
            }
        }
    }
</script>