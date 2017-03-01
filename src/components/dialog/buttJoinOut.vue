<template>
    <div id="usecase" class="dialog" :style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
        <a class="dialog-close"  @click="closeDialog" title="关闭" href="javascript:void(0);"></a>
        <div class="dialog-header"><h4>选择营销渠道</h4></div>
        <div class="dialog-body">
            <div class="dialog-external">
                <ul class="input-warp">
                    <li>
                        <label>营销渠道</label>
                        <div class="select-block">
                            <a v-for="label in labels" :class="{ active: label.isActive }" href="javascript:void(0);"><i class="icon gdt"></i><i class="tri"></i><span>{{label.text}}</span><em></em></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="dialog-footer">
            <a class="red" href="javascript:void(0);" @click="ok">确定</a>
            <a href="javascript:void(0);" @click="closeDialog">取消</a>
        </div>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    export default {
        data(){
            return{
                offsetLeft: 0,
                offsetTop: 0,
                labels: [
                    {
                        isActive: true,
                        text: '广点通'
                    },{
                        isActive: false,
                        text: '微博'
                    },{
                        isActive: false,
                        text: '爱投DSP'
                    },{
                        isActive: false,
                        text: 'EDM营销'
                    },{
                        isActive: false,
                        text: '电话营销'
                    },{
                        isActive: false,
                        text: '短信营销'
                    }
                ]
            }
        },
        computed: {
            visual(){
                console.log('display:'+store.state.dialog.buttJointOutUse)
                return store.state.dialog.buttJointOutUse ? 'block' : 'none'
            }
        },
        methods: {
            closeDialog(){
                store.commit('CLOSE_DIALOG')
            },
            ok(){
                store.commit('CLOSE_DIALOG')                
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
                centerDialog('#usecase')
            })
        }
    }
</script>