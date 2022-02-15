<template>
  <div>
    <TypeNav/>
  <!-- <ListContainer/>
  <Recommend/>
  <Rank/>
  <Like/> -->
  <Floor/>
  <button>+1</button>
  <span>仓库的数据</span>
  <button>-1</button>
  </div>

</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
// import {mapState} from 'vuex';

export default {
  name:'',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor
  },
  // computed:{
  //   ...mapState(['count'])
  // }
}

</script>

<style>

</style>