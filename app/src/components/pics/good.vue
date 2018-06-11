<template>
  <div class="alltopics">
	  <!-- 主题列表组件 -->
	  <list-topics :topics="topics"></list-topics>
	  <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>	
</template>

<script>
// 引入主题列表组件
import ListTopics from "@/components/pics/list";

// 引入取数据的模块
import { getPicsList } from "@/getdata/index.js";
// 引入滑动组件
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: "Good",
  // 数据
  data() {
    return {
      // 话题 列表
      topics: [],
      page: 1
    };
  },
  // 加载组件
  components: {
    ListTopics,
    InfiniteLoading
  },
  // 钩子函数
  mounted() {
    getPicsList({ limit: 10, tab: "good",page:this.page }).then(response => {
      // 把 ajax 获取到的数据 给 topics
      this.topics = response.data.data;
    });
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        // 查数据
        getPicsList({ limit: 5,tab:'good', page: ++this.page }).then(response => {
          // 把 ajax 获取到的数据 给 topics
          this.topics = this.topics.concat(response.data.data);

          // console.log(response.data.data)
        });
        $state.loaded();
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
