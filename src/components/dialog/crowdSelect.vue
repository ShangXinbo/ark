<template>
    <div id="upload_select" class="dialog" v-bind:style="{'display':pop3,'margin-left':l,'margin-top':t}">
        <a href="javascript:void(0);" class="dialog-close" v-on:click="closeDialog" title="关闭"></a>
        <div class="dialog-header"><h4>历史上传人群</h4></div>
        <div class="dialog-body w800">
            <table class="dialog-table w800">
                <tr>
                    <th class="w60 first">&nbsp;</th>
                    <th class="w150">名称</th>
                    <th>描述</th>
                    <th class="w100">客户数</th>
                    <th class="w100 last">上传日期</th>
                </tr>
            </table>
            <div class="scroll-warp w800">
                <table class="scroll-content dialog-table">

                </table>
            </div>
        </div>
        <div class="dialog-footer">
            <a class="red" href="javascript:void(0);">使用</a>
            <a href="javascript:void(0);" v-on:click="closeDialog">取消</a>
        </div>
    </div>
</template>
<script>
import store from 'src/vuex/store';
import {closeDialogs} from 'src/vuex/actions';
import API from 'src/services/api.js';
export default {
    data: function () {
        return {
            l: 0,
            t: 0
        };
    },
    vuex: {
        actions: {
            closeDialogs
        }
    },
    methods: {
        closeDialog: function () {
            this.closeDialogs();
        },
        selectSubmit: function () {

        },
        selectFile: function () {

        }
    },
    computed: {
        pop3: function () {
            if (store.state.uploadSelectDialog) {
                this.$http.post(API.upload_list,{'page':'1','rows':'20'},{emulateJSON:true,emulateHTTP:true});

                return 'block';
            } else {
                return 'none';
            }
        }
    },
    mounted: function () {
        var _this = this;

        var centerDialog = function (el) {
            var dialog = document.querySelector(el);
            var dh = dialog.offsetHeight, dw = dialog.offsetWidth;
            _this.$data.l = -dw / 2 + 'px';
            _this.$data.t = -dh / 2 + 'px';
        };

        this.$watch('pop3', function (newVal, oldVal) {
            centerDialog('#upload_select');
        });
    }
};
</script>