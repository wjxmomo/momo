<template>
    <div class="one">
        <loading v-if="!topics.length"></loading>
      <ul class="items" v-if="topics.length" :topic="topics">
          <li :key="index" v-for="(item,index) in topics">
              <img v-lazy="item.author.avatar_url" alt="">
              <div class="tag">
                  <span>
                      {{item.author.loginname}}
                  </span>
              </div>   
              <router-link class="title" :to="{path:'/show',query:{id:item.id}}" tag="div" >{{item.title}}</router-link>
              <p class="time">发布时间：{{item.create_at.substring(0,10)+" "+item.create_at.substring(11,19)}}</p>
          </li>
       
          <li></li>
      </ul>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      
    </div>
</template>
<script>

// 引入 axios 模块
// 引入取数据的模块
import { getPicsList } from "@/getdata/index.js";
//引入loading 组件
import Loading from "@/components/Loading";

//引入滑动组件
import InfiniteLoading from "vue-infinite-loading";

export default {
  name: "Lun",


  data() {
    return {
      //话题标签
      topics:[],
      page:1,
      
      }
    },
    
    // 加载组件
    components:{
      Loading,
	    InfiniteLoading,
      

    },
    mounted() {
    getPicsList({ limit: 5,page:this.page}).then(response => {
      // 把 ajax 获取到的数据 给 topics
      this.topics = response.data.data;
    });
  },
	
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        //查询数据
        getPicsList({ limit:5,page:++(this.page)}).then(response => {
      	// 把 ajax 获取到的数据 给 topics
      	this.topics=this.topics.concat(response.data.data);
		});
		$state.loaded();
      }, 1000);
    }
  }
};
</script>
<style scoped lang="scss">
/* 加载样式重置表 */
@import "../../assets/css/reset.css";

/* 加载公共的 css 样式 */
@import "../../assets/css/base.scss";
.one{
  // background:#a09b9b;

  .items {
    margin-top: rem(164px);
    width: 100%;
    li {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      height: rem(120px);
      border: 1px solid #ededed;
      img {
        width: rem(60px);
        height: rem(60px);
        border-radius: rem(10px);
      }
      .tag {
        width: 20%;
        height: rem(60px);
        font-size: rem(35px);
        color: #836683;
        text-align: center;
        line-height: rem(60px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

      }
      .title {
        width:50%;
        //文本超出容器用...代替超出的部分
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size:rem(30px);
        color:gray;
      }
      p{
        width:100%;
      }
    }
  }
}
</style>



