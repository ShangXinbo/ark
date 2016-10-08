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
    <div id="upload_create" class="dialog" v-bind:style="{'display':pop2,'margin-left':l,'margin-top':t}">
        <a href="javascript:void(0);" class="dialog-close" v-on:click="closeDialog" title="关闭"></a>
        <div class="dialog-header"><h4>上传新人群</h4></div>
        <div class="dialog-body">
            <div class="dialog-upload">
                <form action="" method="post">
                    <input type="hidden" name="api-token" v-bind:value="token"/>
                    <ul class="input-warp">
                        <li v-bind:class="{'error':nameError}">
                            <label>名称</label>
                            <input class="input-text" v-model="fileName" type="text"/>
                            <p class="error" v-show="nameError"><i></i><span>{{nameError}}</span></p>
                        </li>
                        <li v-bind:class="{'error':descError}">
                            <label>描述</label>
                            <textarea class="input-area" v-model="fileInput"></textarea>
                            <p class="error" v-show="descError"><i></i><span>{{descError}}</span></p>
                        </li>
                        <li v-bind:class="{'error':fileError}">
                            <label>上传</label>
                            <div class="upload-warp">
                                <input v-bind:value="filePath" class="input-text" type="text" disabled="disabled"/>
                                <span style="position: relative;" v-on:click="selectFile">
                                上传
                                <input v-model="fileVal" accept=".txt,.xls,.xlsx" v-on:change="changeFilePath"
                                       name="file" type="file" class="upload-warp"
                                       v-bind:style="{'position':'absolute','top':'0px','left':'0px','opacity':'0'}"/>
                            </span>
                            </div>
                            <p class="error" v-show="fileError"><i></i><span>{{fileError}}</span></p>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div class="dialog-footer">
            <a class="red" v-on:click="createSubmit" href="javascript:void(0);">提交</a>
            <a href="javascript:void(0);" v-on:click="closeDialog">取消</a>
        </div>
    </div>
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
import {closeDialogs, showUploadCreate, showUploadSelect} from 'src/vuex/actions';
import API from 'src/services/api.js';

export default {
    data: function () {
        return {
            l: 0,
            t: 0,
            fileName: '',
            fileDesc: '',
            fileVal: '',
            filePath: '',
            nameError: '',
            descError: '',
            fileError: ''
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
        },
        createSubmit: function () {
            this.$data.nameError = '';
            this.$data.descError = '';
            this.$data.fileError = '';
            if (this.$data.fileName == "") {
                this.$data.nameError = '人群名称不能为空';
                return false;
            } else if (this.$data.fileName.length > 20) {
                this.$data.nameError = '名称超长' + (this.$data.fileName.length - 20) + '字，请重新输入';
                return false;
            }
            if (this.$data.fileDesc == "") {
                this.$data.descError = '人群描述不能为空';
                return false;
            } else if (this.$data.fileDesc.length > 20) {
                this.$data.descError = '描述超长' + (this.$data.fileDesc.length - 20) + '字，请重新输入';
                return false;
            }
            if (!this.$data.filePath) {
                this.$data.fileError = '请上传文件';
                return false;
            }
        },
        selectSubmit: function () {

        },
        selectFile: function () {

        },
        changeFilePath: function (event) {
            var fileSize = event.target.files[0].size;
            this.$data.fileError = '';
            if (fileSize < 1024 * 1024 * 100) {
                this.$data.filePath = this.$data.fileVal;
            } else {
                this.$data.filePath = '';
                this.$data.fileError = '上传文件需要小于100M';
            }
        }
    },
    computed: {
        pop1: function () {
            if (store.state.uploadInitDialog) {
                return 'block';
            } else {
                return 'none';
            }
        },
        pop2: function () {
            if (store.state.uploadCreateDialog) {
                return 'block';
            } else {
                return 'none';
            }
        },
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

        this.$watch('pop1', function (newVal, oldVal) {
            centerDialog('#upload_init');
        });
        this.$watch('pop2', function (newVal, oldVal) {
            centerDialog('#upload_create');
        });
        this.$watch('pop3', function (newVal, oldVal) {
            centerDialog('#upload_select');
        });

    }
};
</script>


