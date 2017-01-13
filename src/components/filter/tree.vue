<template>
    <ul class="screening-sub">
        <li>
            <div class="checkbox-warp" title="信用卡"><i class="icon"></i><span>信用卡</span></div>
        </li>
    </ul>
</template>
<script>
    import item from './tree.vue';
    import API from 'src/services/api';
    import {
        mAjax
    } from 'src/services/functions';
    export default {
        props: {
            tagid: Number,
            level: String
        },
        components: {
            item
        },
        data: function () {
            return {
                isFolder: true,
                tagsLs: []
            };
        },
        mounted: function () {
            const _this = this;
            mAjax(this, {
                url: API.filter_getTagStructure,
                data: {
                    code: _this.tagid,
                    level: _this.level
                },
                success: function (data) {
                    if (data.code == 200) {
                        _this.tagsLs = data.detail;
                        console.log(data.detail);
                    } else {
                        //TODO: 未加载数据
                    }
                }
            });

        }
    };

</script>
