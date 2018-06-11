<template>
    <div class="about">
        <div class="box">
            <h1>关于</h1>
            <p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>

            <p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽</p>
            <img :src="require('@/assets/images/group.png')" alt="">
            <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>

        </div>

    </div>
    
</template>
<script>
export default {
  name: "About"
};
</script>
<style scoped lang="scss">

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

</style>

