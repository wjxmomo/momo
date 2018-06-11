<template>
  <div id="app">
    <div class="nav">
      <div class="back">
          <i class="iconfont icon-fanhui3" @click="$router.back(-1)"></i>
      </div>
      <div class="find">
          my project
      </div>
      <div class="logo">
        <i class="iconfont icon-logo"></i>
      </div>
    </div>

    <router-view/>


    <nav class="footer">
      <ul>
        <router-link to="/" tag="li">
          <span :class="resPath=='index'?'xColor':'defaultColor'">首页</span> 
        </router-link>
        <router-link to="luntan" tag="li">
          <span :class="resPath=='luntan'?'xColor':'defaultColor'">论坛</span>
        </router-link>
        <router-link to="us" tag="li">
          <span :class="resPath=='us'?'xColor':'defaultColor'">关于我们</span> 
        </router-link>
      </ul>
    </nav>
    <!-- <router-view></router-view> -->
   

  </div>
</template>

<script>
export default {
  name: "App",
  //计算属性
  computed:{
    //处理路径问题
    resPath:function(){
      console.log(this.$route.path);
      //将$route.path分隔城数组
      var pathArr=this.$route.path.split('/');
      //将第二个数据返回给resPath
      return pathArr[1];
    }
  }
};
</script>

<style lang="scss">
/* 加载样式重置表 */
@import "./assets/css/reset.css";

// 加载公共的 css 样式
@import "./assets/css/base.scss";

  .nav {
    position: fixed;
    top:0;
    left:0;
    display: flex;
    background: #f2f2f2;
    justify-content: space-between;
    width: 100%;
    height: rem(96px);
    .back{
      margin: rem(15px) 0;
      width: 20%;
      height: rem(64px);
      // margin:rem(30px);
      text-align: center;
      line-height: rem(64px);
      .icon-fanhui3{
        font-size: rem(60px);
        color:rgba(0,0,0,0.5);
      }
    }
    .find {
      width: 60%;
      height: rem(64px);
      margin: rem(15px) 0;
      font-size: rem(66px);
      line-height: rem(64px);
      color: rgba(0, 0, 0, 0.5);
      border-radius: rem(4px);
      align-items: center;
      text-align: center;
    }
    .logo {
      width: 20%;
      height:rem(64px);
      margin: rem(15px) 0;
      height: rem(64px);
      text-align: center;
      line-height: rem(64px);
      .icon-logo{
        font-size: rem(80px);
      }
      
    }
  }

.footer {
  width: 100%;
  height: rem(80px);
  background: #333;
  position: fixed;
  left: 0;
  bottom: 0;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      width: 33.3%;
      line-height: rem(80px);
      color: #fff;
      font-size: rem(30px);
      text-align: center;
    }
  }
  .defaultColor{
    color:#fff;
  }
  .xColor{
    color:darksalmon;
  }
}
</style>
