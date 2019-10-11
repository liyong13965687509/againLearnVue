<template>
    <div>
        <h3>page1</h3>
        <p>
            <button @click="gotoPage2()">跳转至page2</button>
        </p>

    </div>
</template>

<script>
    export default {
        name: "Page1",
        methods: {
            gotoPage2() {
                // this.$router.push('/page2/1/react')
                this.$router.push({name: 'page2', params: {id: 1, msg: 'react'}})
            }
        },
    }
</script>

<style scoped>

</style>
