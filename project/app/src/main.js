import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
//二级联动组件-全局组件
import TypeNav from '@/pages/Home/TypeNav'
//引入仓库
import store from '@/store'

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //kv一致，省略v
  router,
  //注册仓库：组件实例身上对多一个$store属性
  store
}).$mount('#app')
