<template>
    <div id="upload_init" class="dialog" v-bind:style="{'display':visual,'margin-left':offsetLeft,'margin-top':offsetTop}">
        <a href="javascript:void(0);" class="dialog-close" title="关闭" v-on:click="closeDialog"></a>
        <div class="dialog-body">
            <div class="dialog-bugButton">
                <a href="javascript:void(0);" v-on:click="showCreate">
                    <i class="icon03"></i>
                    <span>上传新人群</span>
                </a>
                <a href="javascript:void(0);" v-on:click="showSelect">
                    <i class="icon04"></i>
                    <span>历史上传</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    export default {
        data: function () {
            return {
                offsetLeft: 0,
                offsetTop: 0
            }
        },
        methods: {
            closeDialog: function () {
                store.commit('CLOSE_DIALOG')
            },
            showCreate: function () {
                store.commit('CLOSE_DIALOG')
                store.commit('SHOW_UPLOAD_CREATE_DIALOG')
            },
            showSelect: function () {
                store.commit('CLOSE_DIALOG')
                store.commit('SHOW_UPLOAD_SELECT_DIALOG')
            }
        },
        computed: {
            visual: function () {
                return store.state.dialog.crowdInit ? 'block' : 'none'
            }
        },
        mounted: function () {
            var _this = this

            var centerDialog = function (el) {
                var dialog = document.querySelector(el)
                var dh = dialog.offsetHeight, dw = dialog.offsetWidth
                _this.$data.offsetLeft = -dw / 2 + 'px'
                _this.$data.offsetTop = -dh / 2 + 'px'
            }

            this.$watch('visual', function (newVal, oldVal) {
                centerDialog('#upload_init')
            })
        }
    }

</script>