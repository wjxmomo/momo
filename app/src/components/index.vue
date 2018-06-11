<template>
  <div class="index">
        <div class="navbar">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide first"><router-link to="/">全部</router-link></div>
                    <div class="swiper-slide"><router-link to="/index/good">精华</router-link> </div>
                    <div class="swiper-slide"><router-link to="/index/weex">weex </router-link></div>
                    <div class="swiper-slide"><router-link to="/index/share">分享 </router-link></div>
                    <div class="swiper-slide"><router-link to="/index/ask">问答 </router-link></div>
                    <div class="swiper-slide"><router-link to="/index/job">招聘</router-link></div>   
                </div>
                <!-- Add Pagination -->
                
            </div>
        </div>
    <router-view></router-view>
  </div>
  
</template>
<script>
    export default {
      name: 'index',
      mounted(){
        
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            // init: false,
            
        });
    
      },
    }
</script>
<style scoped lang="scss">
    /* 加载样式重置表 */
@import "../assets/css/reset.css";

// 加载公共的 css 样式
@import "../assets/css/base.scss";



    .navbar{
        position: fixed;
        top:rem(96px);
        left:0;
        height:rem(70px);
        background:#ededed;
        width:100%;

        .swiper-slide{
            font-size:rem(26px);
            text-align: center;
            line-height: rem(70px);
            
            a{
               color:#747474;
               padding-bottom:rem(12px);
               &:hover{
                color:darksalmon;
                border-bottom:2px solid darksalmon;
                } 
            } 
        }
        .first a{
                color:darksalmon;
                border-bottom:2px solid darksalmon;
                
         }
    }

</style>




