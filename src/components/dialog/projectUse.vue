<template>
    <div class="dialog" id="dialog01" :style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
        <a href="javascript:void(0);" class="dialog-close" @click="closeDialog" title="关闭"></a>
        <div class="dialog-body">
            <div class="dialog-bugButton">
                <a data-downdata="1" @click="downCrowd" href="javascript:void(0);"><i class="icon06"></i><span>下载人群</span></a>
                <p v-if="downdataErr" class="error1"><i></i><span>{{downdataErr}}</span></p>                            
                <a href="javascript:void(0);" @click="buttJointIn"><i class="icon07"></i><span>对接内部平台</span></a>
                <p v-if="buttJointInErr" class="error1"><i></i><span>{{buttJointInErr}}</span></p>
                <a data-waitui="1" @click="buttJointOut" href="javascript:void(0);"><i class="icon08"></i><span>对接外部营销渠道</span></a>
                <p v-if="waituiErr" class="error1"><i></i><span>{{waituiErr}}</span></p>                
            </div>
        </div>
    </div>
</template>
<script>
    import VueRouter from 'vue-router'
    import API from 'src/services/api'
    import store from 'src/vuex/store'
    import { downFile,mAjax } from 'src/services/functions'


    export default {
        data(){
            return{
                offsetLeft: 0,
                offsetTop: 0,
                lists: [],
                selectId: '',
                selectName: '',
                buttJointInErr: '',
                waituiErr: '',
                downdataErr: ''   
            }
        },        
        computed: {
            visual: function () {
                return store.state.dialog.projectUse ? 'block' : 'none'
            }
        },
        methods: {
            downCrowd(){
                downFile(API.tags_downloaddata,'?id=' + store.state.project.detail.cycleId)

                store.commit('CLOSE_DIALOG')
            },
            closeDialog(){
                store.commit('CLOSE_DIALOG')
            },
            buttJointIn(){
                let pid = this.$route.query.id,
                    cid = store.state.project.detail.cycleId,
                    _this = this,
                    router = new VueRouter()

                mAjax(this,{
                    url: API.sms_to_send,
                    data:{
                        project_id: pid,
                        cycle_id: cid
                    },
                    success: function (data) {
                        if (data.code == 200) {
                            store.commit('CLOSE_DIALOG')
                            router.push({ 
                                path: '/project/sms_record_save', 
                                query: { 
                                    'sms_tid': data.detail.template_id,
                                    pid:pid,cid:cid 
                                }
                            })

                        }else{
                            _this.buttJointInErr = data.message
                        }
                    }
                })
            },
            buttJointOut(){
                store.commit('CLOSE_DIALOG')                
                store.commit('SHOW_SMS_BUTT_JOINT_OUT')
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