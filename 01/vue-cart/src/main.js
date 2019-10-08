import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

// 修改vue原型
Vue.prototype.$bus=new Vue();
// 全局注册组件，一次注册终身使用
// Vue.component('kaikeba-comp',{})

new Vue({
  render: h => h(App),
}).$mount('#app')
