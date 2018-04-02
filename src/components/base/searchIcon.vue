<template>
    <div class="search">
        <i class="iconfont icon-sousuo" @click="goSearchInput"></i>
    </div>
</template>

<script>
export default{
    methods:{
        goSearchInput(){
            this.$router.push('searchInput')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"
.iconfont
    extend-click()
</style>