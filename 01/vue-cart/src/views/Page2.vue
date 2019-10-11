<template>
    <div>
        <h3>page2</h3>
        <!--获取路由路径参数-->
        <p>id：{{$route.params.id}}</p>
        <p>msg：{{$route.params.msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        created() {
            // 必传参
            console.log(this.$route.params)
            // 查询参（可选参）
            console.log(this.$route.query.foo)
        }
    }
</script>

<style scoped>

</style>
