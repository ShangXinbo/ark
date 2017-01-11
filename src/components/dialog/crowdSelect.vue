<template>
    <div id="crowd_select" class="dialog" v-bind:style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
        <a href="javascript:void(0);" class="dialog-close" v-on:click="closeDialog" title="关闭"></a>
        <div class="dialog-header">
            <h4>历史上传人群</h4>
        </div>
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
            <div class="scroll-warp w800" v-on:scroll="scroll" style="overflow-y:scroll; ">
                <table class="scroll-content dialog-table">
                    <tr v-for="item in lists" v-bind:data-id="item.id" v-bind:data-name="item.name">
                        <td class="w60"><i v-on:click="checkItem(item.id,item.name)"></i></td>
                        <td class="w150">{{item.name}}</td>
                        <td class="">{{item.uploadDesc}}</td>
                        <td class="w100">{{item.lines}}</td>
                        <td class="w100">{{item.createTime}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="dialog-footer">
            <a class="red" v-on:click="use" href="javascript:void(0);">使用</a>
            <a href="javascript:void(0);" v-on:click="closeDialog">取消</a>
        </div>
    </div>
</template>
<script>
    import store from 'src/vuex/store';
    import API from 'src/services/api';
    import { mAjax } from 'src/services/functions';
    import VueRouter from 'vue-router';
    export default {
        data: function () {
            return {
                offsetLeft: 0,
                offsetTop: 0,
                lists: [],
                selectId: '',
                selectName: ''
            };
        },
        methods: {
            closeDialog: function () {
                store.commit('CLOSE_DIALOG');
            },
            checkItem: function (id, name) {
                var collection = document.querySelectorAll('.scroll-warp i');
                for (var i = 0; i < collection.length; i++) {
                    collection[i].className = '';
                }
                this.selectId = id;
                this.selectName = name;
                event.target.className = 'checked';
            },
            scroll: function () {
                //TODO add lists
            },
            use: function () {
                var crowd = {
                    id: this.selectId,
                    name: this.selectName
                };
                localStorage.setItem("crowd", crowd);
                var router = new VueRouter();
                store.commit('CLOSE_DIALOG');
                router.push('report');
            }
        },
        computed: {
            visual: function () {
                var vm = this;
                mAjax(this, {
                    url: API.upload_list_layer,
                    data: {
                        page: 1,
                        rows: 20
                    },
                    success: function (data) {
                        vm.lists = data.detail.rows;
                    }
                });

                return store.state.dialog.crowdSelect ? 'block' : 'none';
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
                centerDialog('#crowd_select');
            });
        }
    };
</script>