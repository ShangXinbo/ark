<template>
<div class="screening-right">
    <div class="scroll-warp">
        <ul class="scroll-content screening-item">
            <li v-for="item in list" :class="{checked:item.checked}">
                <p>
                    <i class="icon" @click="checked(item.code)"></i>
                    <span>{{item.tagName}}</span>
                </p>
            </li>
        </ul>
    </div>
    <div class="all-button">
        <p><i class="icon"></i><span>全选</span></p>
        <input type="submit" value="加入购物篮" />
    </div>
</div>
</template>
<script>
    import store from 'src/vuex/store'
    export default {
        computed: {
            list: function() {
                console.log(JSON.parse(JSON.stringify(store.state.tagFolder)))
                return store.state.tagFolder
            }
        },
        methods: {
            checked: function(code) {

            }
        }
    };
</script>