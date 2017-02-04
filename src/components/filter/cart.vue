<template>
    <div class="cart-warp">
        <h3>标签购物车</h3>
        <div class="scroll-warp">
            <div class="scroll-content">
                <div class="cart" id="cart_1">
                    <h4>购物篮1</h4>
                    <ul class="active">
                        <li data-init="1">
                            <strong>请在左侧选择标签，加入购物篮</strong>
                        </li>
                    </ul>
                    <div class="all-item"></div>
                </div>
            </div>
            <div class="add-cart">
                <a class="disabled" href="javascript:void(0);"><i class="icon"></i><span>添加新购物篮</span></a>
            </div>
        </div>
        <div class="billing">
            <a href="javascript:void(0);">删除</a>
            <a href="javascript:void(0);">清空</a>
            <input type="submit" value="下一步" />
        </div>
    </div>
</template>
<script>
    import store from 'src/vuex/store'
    import _ from 'lodash'
    export default {
        computed: {
            list: function() {
                let cart = store.state.cart
                if (_.isEmpty(cart)) {
                    return []
                } else {
                    return cart
                }
            }
        }
    };
</script>