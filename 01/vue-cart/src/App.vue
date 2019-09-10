<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <!--条件-->
        <p v-if="showName">{{name}}</p>
        <!--循环-->
        <ul>
            <li v-for="good in goods" :key="good.id">
                <span>{{good.text}}</span>
                <span>￥{{good.price}}</span>
            </li>
        </ul>
        <p><button @click="addGood">加入购物车</button></p>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        data() {
            return {
                name: 'hello,vue',
                showName: false,
                goods: [
                    {
                        id: '1',
                        text: 'web全栈架构师',
                        price: '1020'
                    },
                    {
                        id: '2',
                        text: 'Python全栈架构师',
                        price: '1000'
                    },
                ]
            }
        },
        components: {
            HelloWorld
        },
        created() {
            // 创建钩子，组件创建完成执行一次
            setTimeout(() => {
                this.showName = true;
            }, 1000)
        },
        methods: {
            addGood() {
                this.goods.push({
                    id: '3',
                    text: 'lalla',
                    price: '1500'
                })
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
