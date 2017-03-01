<template>
    <div class="dialog" id="dialog01" :style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
        <a href="javascript:void(0);" class="dialog-close" @click="closeDialog" title="关闭"></a>
        <div class="dialog-body">
            <div class="dialog-bugButton">
                <a data-downdata="1" @click="downCrowd" href="javascript:void(0);"><i class="icon06"></i><span>下载人群</span></a>
                <a href="javascript:void(0);"><i class="icon07"></i><span>对接内部平台</span></a>
                <a data-waitui="1" href="javascript:void(0);"><i class="icon08"></i><span>对接外部营销渠道</span></a>
            </div>
        </div>
    </div>
</template>
<script>
    import VueRouter from 'vue-router'
    import store from 'src/vuex/store'

    export default {
        data(){
            return{
                offsetLeft: 0,
                offsetTop: 0,
                lists: [],
                selectId: '',
                selectName: ''
            }
        },        
        computed: {
            visual: function () {
                return store.state.dialog.projectUse ? 'block' : 'none'
            }
        },
        methods: {
            downCrowd(){
            
            },
            closeDialog(){
                store.commit('CLOSE_DIALOG')
            },
            buttJointIn(){

            },
            buttJointOut(){
               
            }

        },        
        mounted: function () {
            var _this = this

            var centerDialog = function (el) {
                var dialog = document.querySelector(el)
                var dh = dialog.offsetHeight, dw = dialog.offsetWidth
                _this.offsetLeft = -dw / 2 + 'px'
                _this.offsetTop = -dh / 2 + 'px'
            }

            this.$watch('visual', function (newVal, oldVal) {
                centerDialog('#dialog01')
            })
        }
    }

</script>