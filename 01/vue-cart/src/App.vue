<template>
    <div id="app">
        <win>
            <template slot="head">
                <h3>HEAD</h3>
            </template>
            21546
            <template slot="foot">
                <button>确定</button>
            </template>
        </win>
        <!--element 测试-->
        <form-test title="element表单"></form-test>
        <k-button @aaa="handleClick"></k-button>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <!--条件-->
        <p v-if="showName">{{name}}</p>
        <!--循环-->
        <ul>
            <li v-for="(good,index) in goods" :key="good.id">
                <span>{{good.text}}</span>
                <span>￥{{good.price}}</span>
                <button @click="addGood(index)">加入购物车</button>
            </li>
        </ul>
        <!--购物车-->
        <Cart :name="name"></Cart>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Cart from './components/Cart.vue';
    import FormTest from './components/FormTest.vue';
    import KButton from './components/KButton.vue';
    import Win from './components/Win.vue';
    import axios from 'axios';

    export default {
        name: 'app',
        provide(){
            return {
                someValue:'上古遗产'
            }
        },
        data() {
            return {
                name: '开课吧购物车',
                showName: false,
                goods: [],
            }
        },
        components: {
            HelloWorld,
            Cart,
            FormTest,
            KButton,
            Win
        },
        async created() {
            // 创建钩子，组件创建完成执行一次
            setTimeout(() => {
                this.showName = true;
            }, 1000)

            // 查询产品列表
            const response = await axios.get('/api/goods');
            this.goods = response.data.list;
        },
        methods: {
            addGood(i) {
                // 获取goods中对应项
                const good = this.goods[i];
                this.$bus.$emit('addCart', good);
            },
            handleClick(obj){
                console.log(obj);
            }
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
