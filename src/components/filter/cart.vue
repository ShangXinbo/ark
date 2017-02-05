<template>
    <div class="cart-warp">
        <h3>标签购物车</h3>
        <div class="scroll-warp" style="overflow-y: auto">
            <div class="scroll-content">
                <div v-for="(basket,key) in list" class="cart" :key="key">
                    <h4>购物篮{{key+1}}</h4>
                    <ul v-if="basket.list" :class="{active:basket_now==key}">
                        <li v-for="(tag,index) in basket.list" :class="{checked:tag.checked}">
                            <i class="icon checkbox" @click="toggleChecked(index,key,tag.checked)"></i>
                            <span>{{tag.tag}}</span>
                            <em class="icon delete"></em>
                        </li>
                    </ul>
                    <ul v-else :class="{active:basket_now==key}">
                        <li>
                            <strong>请在左侧选择标签，加入购物篮</strong>
                        </li>
                    </ul>
                    <div class="all-item" :class="{checked:basket.allChecked}">
                        <p v-show="basket.list">
                            <i class="icon" @click="toggleAllChecked(key,basket.allChecked)"></i>
                            <span>全选</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="add-cart">
                <a :class="{disabled:!list[list.length-1].list}" @click="addBasket(list[list.length-1].list)" href="javascript:void(0);">
                    <i class="icon"></i>
                    <span>添加新购物篮</span>
                </a>
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
                console.log(store.state.cart)
                return store.state.cart
            },
            basket_now: function() {
                return store.state.current_basket
            }
        },
        methods: {
            toggleChecked: function(index, key, checked) {
                let cart = _.compact(store.state.cart)
                cart[key].list[index].checked = !checked
                let allChecked = true
                for (let i = 0; i < cart[key].list.length; i++) {
                    let checked = cart[key].list[i]
                    if (!checked.checked) {
                        allChecked = false
                    }
                }
                cart[key].allChecked = allChecked
                store.commit('CHANGE_CART', cart)
            },
            toggleAllChecked: function(key, checked) {
                let cart = _.compact(store.state.cart)
                cart[key].allChecked = !checked
                for (let i = 0; i < cart[key].list.length; i++) {
                    cart[key].list[i].checked = !checked
                }
                store.commit('CHANGE_CART', cart)
            },
            addBasket: function(disabled) {
                if (disabled && disabled.length) {
                    let cart = _.compact(store.state.cart)
                    cart.push({})
                    store.commit('CHANGE_CART', cart)
                }
            }
        }
    }
</script>