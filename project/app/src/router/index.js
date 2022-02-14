//配置路由
import Vue  from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);
let originPush=VueRouter.prototype.push;

/**
 * localtion：原来的位置往哪跳转
 */
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        //call,apply区别，都可以调用函数一次，都可以改变函数的上下文，call传递参数用，隔开，apply传递数组
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

//配置
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:() => import('@/pages/Home'),
            meta:{
                show:true
            }
        },
        {
            name:"search",
            path:"/search",
            component: () => import('@/pages/Search/search'),
            meta:{
                show:true
            }
        },
        {
            path:"/login",
            component: () => import('@/pages/Login/login'),
            meta:{
                show:false
            }
        },
        {
            path:"/register",
            component: () => import('@/pages/Register/register'),
            meta:{
                show:false
            }
        }
    ]
})