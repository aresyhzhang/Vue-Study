import Vue from "vue";
import Vuex from "vuex";
//使用下组件
Vue.use(Vuex);
//state 仓库存储数据
const state={
    count:1
};
//mutations 修改state的唯一手段
const mutations={};
//action 处理action,书写自己业务逻辑，也可以处理异步
const actions={};
//getters 计算属性，用于简化仓库数据，获取仓库数据方便
const getters={};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});