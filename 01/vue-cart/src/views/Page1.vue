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
                this.$router.push('/page2/react')
                // this.$router.push({
                //     path:'page2',
                //     query:{
                //
                //     }
                // })
            }
        },
    }
</script>

<style scoped>

</style>
