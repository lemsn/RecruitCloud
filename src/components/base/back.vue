<template>
    <div class="button-big">
        <i @click="back" class="iconfont icon-jiantouzuo"></i>
    </div>
</template>

<script>

export default{
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style lang="stylus">

</style>