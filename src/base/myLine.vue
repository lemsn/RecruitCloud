<template>
    <div class="line-big" :class="{'line-big2':type===2}">
        <slot></slot>
    </div>
</template>

<script>
export default{
    props:{
        type:{
            type:Number,
            default:1
        }
    }
}
</script>

<style lang="stylus">
.line-big
    display:block
    width:100%
    padding:0 5%
.line-big2
    padding:0 0 0 5%!important
</style>