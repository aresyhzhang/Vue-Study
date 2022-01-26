//配置路由
import Vue  from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);

import Search from '@/pages/Search'

//配置
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:() => import('@/pages/Home')
        },
        {
            path:"/search",
            component: () => Search
        },
        // {
        //     path:"/login",
        //     component: () => import('@/pages/Login')
        // },
        // {
        //     path:"/register",
        //     component: () => import('@/pages/Register')
        // }
    ]
})