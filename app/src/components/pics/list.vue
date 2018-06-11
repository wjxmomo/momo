<template>
  <div class="alllist">
    <!-- Loading 组件 -->
    <loading v-if="!topics.length"></loading>
      <ul class="items" v-if="topics.length">
          <li :key="index" v-for="(item,index) in topics">
              <img v-lazy="item.author.avatar_url" alt="">
              <div class="tag" :class="{tagBg:item.top || item.good}">
                  <span v-if="item.top">置顶</span>
                  <span v-else-if="item.good">精华</span>
                  <span v-else>
                      {{tab[item.tab]}}
                  </span>
              </div>
              <router-link class="title" :to="{path:'/show',query:{id:item.id}}">{{item.title}}</router-link>
          </li>
          <li></li>
      </ul>
      
  </div>
</template>
<script>
//引入loading 组件
import Loading from "@/components/Loading";

export default {
  name: "Alllist",


  data() {
    return {
      //话题标签
      tab:{
          good:'精华',
          weex:'weex',
          share:'分享',
          ask:'问答',
          job:'招聘',
          }
      }
    },
    props:['topics'],
    //加载组件
    components:{
      Loading
    }

 
};
</script>
<style scoped lang="scss">
/* 加载样式重置表 */
@import "../../assets/css/reset.css";

/* 加载公共的 css 样式 */
@import "../../assets/css/base.scss";
.items {
  margin-top: rem(164px);
  width: 100%;
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: rem(100px);
    border: 1px solid #ededed;
    img {
      width: rem(60px);
      height: rem(60px);
      border-radius: rem(10px);
    }
    .tag {
      width: rem(65px);
      height: rem(40px);
      border-radius: rem(5px);
      background: #e5e5e5;
      font-size: rem(20px);
      color: #6a6a6a;
      text-align: center;
      line-height: rem(40px);
    }
    .title {
      width: rem(560px);
      //文本超出容器用...代替超出的部分
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color:#000;
    }
    .tagBg{
        background:#509030;
        color:#fff;
    }
  }
}
</style>


