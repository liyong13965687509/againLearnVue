<template>
    <div>
        <label v-if="label">{{label}}</label>
        <div>
            <slot></slot>
            <!--校验错误信息-->
            <p v-if="validateStatus=='error'" class="error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    import schema from 'async-validator';

    export default {
        name: "FormItem",
        props: ['label', 'prop'],
        inject: ['form'],// 注入form 获取model 和rules
        data() {
            return {
                validateStatus: '',
                errorMessage: '',
            }
        },
        created() {
            this.$on('validate', this.validate)
        },
        mounted(){// 挂载到form上时，派发一个添加事件
            if(this.prop){
                this.$parent.$emit('formItemAdd',this)
            }
        },
        methods: {
            validate() {
                return new Promise(resolve=>{
                    // 校验当前项 依赖async-validate
                    const descriptor = {
                        // 校验规则
                        [this.prop]: this.form.rules[this.prop]
                    };
                    // 校验器
                    const validator = new schema(descriptor);
                    validator.validate({[this.prop]: this.form.model[this.prop]}, errors => {
                        if (errors) {
                            // 校验失败
                            this.validateStatus = 'error';
                            this.errorMessage = errors[0].message;
                            resolve(false);// 校验失败
                        }else{
                            // 校验成功
                            this.validateStatus = '';
                            this.errorMessage ='';
                            resolve(true);// 校验成功
                        }
                    })
                })

            }
        },

    }
</script>

<style scoped>
    .error {
        color: #f00;
    }
</style>
