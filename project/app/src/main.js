import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//二级联动组件-全局组件
import TypeNav from '@/pages/Home/TypeNav'

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //kv一致，省略v
  router
}).$mount('#app')
