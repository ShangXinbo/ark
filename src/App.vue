<template>
    <body>
        <vheader></vheader>
        <router-view></router-view>
        <div class="footer"><p>Copyright&nbsp;&copy;&nbsp;2016&nbsp;集奥聚合</p></div>
        <dialog-crowd-method></dialog-crowd-method>
        <dialog-crowd-create></dialog-crowd-create>
        <dialog-crowd-select></dialog-crowd-select>
        <div id="shadowLayer" v-show="layerStatus"></div>
    </body>
</template>
<script>
import store from 'src/vuex/store';
import vheader from 'components/header/index.vue';
import dialogCrowdMethod from 'components/dialog/crowdMethod';
import dialogCrowdCreate from 'components/dialog/crowdCreate';
import dialogCrowdSelect from 'components/dialog/crowdSelect';

export default {
    store:store,
    data:function(){
        return {
            layerStatus:''
        };
    },
    components: {
        'vheader':vheader,
        'dialog-crowd-method':dialogCrowdMethod,
        'dialog-crowd-create':dialogCrowdCreate,
        'dialog-crowd-select':dialogCrowdSelect
    },
    vuex: {
        getters:{
            layerStatus:function(state){
                return state.showLayer;
            }
        }
    }
};
</script>

