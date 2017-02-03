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
        <p :class="{checked:checkedAll}"><i class="icon"></i><span>全选</span></p>
        <input type="submit" value="加入购物篮" />
    </div>
</div>
</template>
<script>
    import store from 'src/vuex/store'
    import _ from 'lodash'
    export default {
        computed: {
            list: function() {
                return store.state.tagFolder
            },
            checkedAll: function() {
                let list = this.list
                if (!_.isEmpty(list)) {
                    let tag = true
                    for (let i in list) {
                        if (!list[i].checked) {
                            tag = false
                        }
                    }
                    return tag
                } else {
                    return false
                }
            },
            methods: {
                checked: function(code) {

                }
            }
        }
    }
</script>