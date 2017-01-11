<template>
    <div id="crowd_create" class="dialog" v-bind:style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
        <a href="javascript:void(0);" class="dialog-close" title="关闭" v-on:click="closeDialog"></a>
        <div class="dialog-header"><h4>上传新人群</h4></div>
        <div class="dialog-body">
            <div class="dialog-upload">
                <form action="" method="post">
                    <input type="hidden" name="api-token" v-bind:value="token"/>
                    <ul class="input-warp">
                        <li v-bind:class="{'error':nameError}">
                            <label>名称</label>
                            <input class="input-text" v-model.text="fileName"/>
                            <p class="error" v-show="nameError"><i></i><span>{{nameError}}</span></p>
                        </li>
                        <li v-bind:class="{'error':descError}">
                            <label>描述</label>
                            <textarea class="input-area" v-model="fileDesc"></textarea>
                            <p class="error" v-show="descError"><i></i><span>{{descError}}</span></p>
                        </li>
                        <li v-bind:class="{'error':fileError}">
                            <label>上传</label>
                            <div class="upload-warp">
                                <input v-model.text="filePath" class="input-text" disabled="disabled"/>
                                <span style="position: relative;">
                                    上传
                                    <input accept=".txt,.xls,.xlsx" type="file" name="file" class="upload-warp"
                                           v-on:change="changeFilePath"
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
            <a class="red" href="javascript:void(0);" v-on:click="createSubmit">提交</a>
            <a href="javascript:void(0);" v-on:click="closeDialog">取消</a>
        </div>
    </div>
</template>
<script>
import store from 'src/vuex/store';
import API from 'src/services/api.js';
import {mAjax} from 'src/services/functions.js';
export default {
    data: function () {
        return {
            offsetLeft: 0,
            offsetTop: 0,
            token: '',
            fileName: '',
            fileDesc: '',
            fileVal: '',
            filePath: '',
            nameError: '',
            descError: '',
            fileError: ''
        };
    },
    computed: {
        visual: function () {
            return store.state.dialog.crowdCreate ? 'block' : 'none';
        }
    },
    methods: {
        closeDialog: function () {
            store.commit('CLOSE_DIALOG');
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
            
            mAjax({
                url:API.upload,
                data:{
                    fileName: this.$data.fileName,
                    fileDesc: this.$data.fileDesc,
                    file: this.$data.fileVal
                },
                success:function(data){
                    console.log(data)
                },
                error:function(err){
                    console.log(err);
                }
            })

        },
        changeFilePath: function (event) {
            var fileSize = event.target.files[0].size;
            this.fileError = '';
            if (fileSize < 1024 * 1024 * 100) {
                this.filePath = this.fileVal;
            } else {
                this.filePath = '';
                this.fileError = '上传文件需要小于100M';
            }
        }
    },
    mounted: function () {
        var _this = this;

        var centerDialog = function (el) {
            var dialog = document.querySelector(el);
            var dh = dialog.offsetHeight, dw = dialog.offsetWidth;
            _this.offsetLeft = -dw / 2 + 'px';
            _this.offsetTop = -dh / 2 + 'px';
        };

        this.$watch('visual', function (newVal, oldVal) {
            centerDialog('#crowd_create');
        });
    }
};
</script>