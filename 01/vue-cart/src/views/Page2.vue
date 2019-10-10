<template>
    <div>
        <h3>page2</h3>
        <!--获取路由路径参数-->
        <p>{{$route.params.msg}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page2",
        created() {
            console.log(this.$route.params)
        }
    }
</script>

<style scoped>

</style>
