<template>
  <div class="me">
       <ul>
           <router-link to="" tag="li">主页 /</router-link> 
           <router-link to='/us' tag="li"> &nbsp; 关于 /</router-link> 
           <router-link to='us/tucao' tag="li">吐槽</router-link> 

        </ul>
        
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Me',
    data(){
        return{
            msg:'关于我们'
        }
    }
}
</script>

<style lang="scss">
   /* 加载样式重置表 */
@import "../assets/css/reset.css";

// 加载公共的 css 样式
@import "../assets/css/base.scss";

     .me{
        margin-top:rem(96px);
        ul{
            width:100%;
            height:rem(70px);
            background:#ededed;
            display:flex;
            li{
             width:15%;
             display: flex;
             align-items:center;
             height:rem(70px);
             font-size:rem(26px);
             color:#747474;
            }
            li:nth-of-type(1){
                margin-left:rem(20px);
                font-size:rem(35px);
            }
            li:nth-of-type(2){
                &:hover{
                    color:tan;
                }
            }
            li:nth-of-type(3){
                &:hover{
                    color:tan;
                }
            }
            li:nth-of-type(4){
                margin-left:rem(320px);
                &:hover{
                    color:tan;
                }
            }

        }
        .box{
            width:98%;
            margin:rem(20px) auto;
            font-size:rem(30px);
            img{
                width:20%;
                margin-top:rem(20px);
                margin-bottom:0;
            }
            h1{
                font-size:rem(40px);
                padding:rem(10px) rem(20px);
                border-bottom:1px solid #a6a6a6;
            }
            p{
                margin-top:rem(30px);
                line-height: rem(40px);
                word-break: break-all;
                word-wrap: break-word;

            }
        }
    

         
    }

</style>
