<template>
    <button @click="handleClick">开课吧button</button>
</template>

<script>
    export default {
        name: "KButton",
        methods: {
            handleClick() {
                // 子向父传值
                this.$emit('aaa',{msg:'hello'})
            }
        },
    }
</script>

<style scoped>

</style>
