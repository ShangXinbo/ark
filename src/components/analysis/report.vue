<style lang="less" scoped>
    @import '../../../static/less/result.less';
</style>
<template>
<div class="filters">
    <div class="filters-content">
        <div class="filters-item first">
            <h3>上传人群：</h3>
            <span v-if="crowd&&crowd.name" v-bind:data-id="crowd.id">{{crowd.name}}<i class="delete"></i></span>
            <i v-if="crowd&&crowd.name" data-dialog="upLoadCrowd" class="modify" data-href="upload"></i>
            <a v-else href="javascript:void(0);" data-dialog="upLoadCrowd">点击筛选</a>
        </div>
        <div class="last-two">
            <div class="filters-item second">
                <h3>标签筛选：</h3>
                <span v-for="item in filters" v-bind:basketid="item.index" v-bind:title="item.title">{{item.text}}<i
                        class="delete"></i></span>
                <span v-for="item in fixedpros" v-bind:tagid="item.code">{{item.text}}<i class="delete"></i></span>
            </div>
            <div class="filters-item third">
                <h3>建模筛选：</h3>
                <span v-if="model" v-bind:model="model.id">{{model.name}}<i class="delete"></i></span>
                <i v-if="model" class="modify" data-href="model"></i>
                <a v-else href="/modeling-screening.html">点击筛选</a>
            </div>
        </div>
    </div>
    <div class="filters-history">
        <a href="javascript:void(0);" data-dialog="filterHistory"><i></i><span>使用历史筛选</span></a>
    </div>
</div>
</template>
<script>
import store from 'src/vuex/store';
export default {
    computed: {
        crowd: function () {
            return store.state.filters.crowd;
        },
        filters: function () {
            var filters = [];
            var tagcode = store.state.filters.filter.tagcode;
            for (var i = 0; i < tagcode.length; i++) {
                var text = '', title = '';
                var item = tagcode[i];
                for (var j = 0; j < item.length; j++) {
                    title += item[j].text + ' ';
                    if (j < 2) {
                        text += item[j].text + ' ';
                    }
                    if (j == 3) {
                        text += '… ';
                    }
                }
                filters.push({"index": i, "text": text, "title": title});
            }
            return filters;
        },
        fixedpros: function () {
            var arr = [];
            var fixedpros = store.state.filters.filter.fixedpros;
            for (var i in fixedpros) {
                arr = arr.concat(fixedpros[i]);
            }
            return arr;
        },
        model: function () {
            return store.state.filters.model;
        }
    }
};
</script>