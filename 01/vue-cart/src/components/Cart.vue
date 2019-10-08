<template>
    <div>
        <p>{{name}}</p>
        <!--购物车列表-->
        <table border="1" style="margin: 0 auto;">
            <tr>
                <th>#</th>
                <th>课程名</th>
                <th>单价</th>
                <th>数量</th>
                <th>总价</th>
            </tr>
            <tr v-for="(c,i) in cart" :key="i" :class="{active:c.active}">
                <td>
                    <input type="checkbox" v-model="c.active">
                </td>
                <td>{{c.text}}</td>
                <td>￥{{c.price}}</td>
                <td>
                    <button @click="minus(i)">-</button>
                    {{c.count}}
                    <button @click="add(i)">+</button>
                </td>
                <td>{{c.price*c.count}}</td>
            </tr>
            <tr>
                <td></td>
                <td colspan="2">{{activeCount}}/{{count}}</td>
                <td colspan="2">${{total}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props: ['name'],
        data() {
            return {
                cart: JSON.parse(localStorage.getItem('cart')) || [],
            }
        },
        created() {
            // 监听父组件添加商品事件
            this.$bus.$on('addCart', good => {
                let ret = this.cart.find(v => v.id === good.id);
                if (ret) {// 购物车已有该商品
                    ret.count += 1;
                } else {
                    this.cart.push({
                        ...good,// 属性展开
                        count: 1,
                        active: true
                    })
                }
            })
        },
        methods: {
            minus(i) {
                const count = this.cart[i].count;
                if (count > 1) {
                    this.cart[i].count -= 1;
                } else {
                    this.remove(i);
                }

            },
            add(i) {
                this.cart[i].count += 1;
            },
            remove(i) {
                if (window.confirm('确定删除？')) {
                    // 从第i个开始删除一个
                    this.cart.splice(i, 1);
                }
            }
        },
        watch: {
            cart: {
                handler(n, o) {
                    localStorage.setItem('cart', JSON.stringify(n));
                },
                deep: true
            }
        },
        computed: {
            activeCount() {
                // 过滤出激活项的数量
                return this.cart.filter(v => v.active).length;
            },
            count() {
                // 购物车总数
                return this.cart.length;
            },
            total() {
                // 计算激活项的总价
                let num = 0;
                this.cart.forEach(c => {
                    if (c.active) {
                        num += c.price * c.count;
                    }
                })
                return num;
            },
        },
        // updated(){
        //     console.log(132)
        //     localStorage.setItem('cart', JSON.stringify(this.cart));
        // }
    }
</script>

<style scoped>
    .active {
        color: green;
    }

</style>
