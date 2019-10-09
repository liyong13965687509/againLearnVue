<template>
    <div>
        {{someValue}}
        <!--实现input的双向数据绑定-->
        <input :type="type" :value="inputValue" @input="inputHandler">
    </div>
</template>

<script>
    export default {
        name: "Input",
        inject:['someValue'],
        props: {
            value: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        data() {
            return {
                // 单向数据流原则：组件内不能修改props属性
                inputValue: this.value
            }
        },
        methods: {
            inputHandler(e) {
                this.inputValue = e.target.value;
                // 通知父组件值更新
                this.$emit('input', this.inputValue);

                // 通知FormItem做校验
                // （因为父级现在找不到input，无法绑定@validate,所以只能找到他的父级，自己给自己派发事件）
                this.$parent.$emit('validate',this.inputValue)

            }
        },
    }
</script>

<style scoped>

</style>
