<template>
    <div class="lt">
        <div class="lun">
            关于论坛
            </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'Luntan'
}
</script>
<style scoped lang='scss'>
/* 加载样式重置表 */
@import "../assets/css/reset.css";

/* 加载公共的 css 样式 */
@import "../assets/css/base.scss";
.lt{
    .shouye{
        position: absolute;
        right:rem(20px);
        font-weight: normal;
         &:hover{
                    color:tan;
                }
    }

    .lun{
        position: fixed;
        top:0;
        left:0;
        margin-top:rem(96px);
        width:100%;
        height:rem(70px);
        font-size:rem(40px);
        font-weight: bold;
        color:dimgrey;
        text-align: center;
        line-height: rem(70px);
        background:#ededed;
    }
}

</style>


