<template>
    <div class="page">
        <a class="prev disabled" href="javascript:void(0);">上一页</a>
        <a href="javascript:void(0);" class="active">1</a>
        <a href="javascript:void(0);">2</a>
        <a href="javascript:void(0);">3</a>
        <span>...</span>
        <a href="javascript:void(0);">19</a>
        <a class="next" href="javascript:void(0);">下一页</a>
    </div>
</template>
<script>
    export default {
        props:{
            total: String,
            current: String
        },
        data: function () {
            return {};
        },
        mounted:function(){
            
        }
    };
</script>
