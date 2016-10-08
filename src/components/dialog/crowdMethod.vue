<template>
    <div id="upload_init" class="dialog" v-bind:style="{'display':pop1,'margin-left':l,'margin-top':t}">
        <a href="javascript:void(0);" class="dialog-close" v-on:click="closeDialog" title="关闭"></a>
        <div class="dialog-body">
            <div class="dialog-bugButton">
                <a href="javascript:void(0);" v-on:click="showCreate"><i class="icon03"></i><span>上传新人群</span></a>
                <a href="javascript:void(0);" v-on:click="showSelect"><i class="icon04"></i><span>历史上传</span></a>
            </div>
        </div>
    </div>
</template>
<script>
import store from 'src/vuex/store';
import {closeDialogs, showUploadCreate, showUploadSelect} from 'src/vuex/actions';
export default {
    data: function () {
        return {
            l: 0,
            t: 0
        };
    },
    vuex: {
        actions: {
            closeDialogs,
            showUploadCreate,
            showUploadSelect
        }
    },
    methods: {
        closeDialog: function () {
            this.closeDialogs();
        },
        showCreate: function () {
            this.closeDialogs();
            this.showUploadCreate();
        },
        showSelect: function () {
            this.closeDialogs();
            this.showUploadSelect();
        }
    },
    computed: {
        pop1: function () {
            if (store.state.uploadInitDialog) {
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

        this.$watch('pop1', function (newVal, oldVal) {
            centerDialog('#upload_init');
        });
    }
};
</script>