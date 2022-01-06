<template>
<div>zyh
<a :href="url">{{urlClass.name}}</a>
双向数据绑定<input type="text" v-model="urlClass.name">
<!-- 
vue的指令语法v-bind可以简写为 :
v中有很多的指令列如v-if等等

v-model只能应用在表单类元素上（输入元素）
 -->
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url:"http://www.baidu.com",
      urlClass:{
        name:"百度"
      },
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
