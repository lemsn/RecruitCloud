<template>
    <div class="header flex-row-between">
        <div class="header-left">
            <slot name="left-icon">
                <i class="iconfont icon-caidan"></i>
            </slot>
        </div>
        <div class="header-middle">
            {{title}}
        </div>
        <div class="header-right">
            <slot name="right-icon">
                <!-- <i class="iconfont icon-jiantouyou"></i> -->
            </slot>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title:{
            type:String,
            default:'无标题'
        }
    },
    methods:{

    }
}
</script>

<style scoped lang="stylus">
@import '~assets/base.styl'
.header
    position:fixed
    z-index:10
    height:44px
    top:0
    left:0
    right:0
    background:$blue
    color:#fff
    padding:0 4%
    font-size:17px
    *
        line-height:44px
    .header-left
        width:100px
        text-align:left
    .header-right
        width:100px
        text-align:right

</style>
