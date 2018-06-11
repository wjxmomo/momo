<template>
    <div class="show" >
        <h1>{{topics.title}}</h1>
        <p v-html="topics.content"></p>    
    </div>
</template>
<script>
// 引入取数据的模块
import { getPicsList } from "@/getdata/show.js";
//引入滑动组件
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "All",
  // 数据
  data() {
    return {
      // 话题 列表
	  topics: [],
    };
  },
  // 钩子函数
  mounted() {
      console.log(this.$route.query.id);
    getPicsList(this.$route.query.id).then(response => {

      // 把 ajax 获取到的数据 给 topics
      this.topics = response.data.data;

      console.log(this.topics);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 加载样式重置表 */
@import "../assets/css/reset.css";

/* 加载公共的 css 样式 */
@import "../assets/css/base.scss";
   
    .show {
        // background:#ccc;
        overflow: hidden;
        h1{
            // margin-top:rem(96px);
            font-size:rem(40px);
            width:80%;
            margin:rem(120px) auto rem(50px);
            text-align: center;
        }
        h3{
            margin-left:rem(500px);
            font-size:rem(25px);
        }
    } 
</style>



