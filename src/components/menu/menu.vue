<template>
    <div class="nav" v-show="show">
        这是菜单
        <p class="nav-item" @click="goSearch">聚合搜索</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            show:false
        }
    },
    methods:{
        _showToggle(){
            this.show = !this.show
        },
        goSearch(){
            this.$router.push('/searchAll')
        }
    }
}
</script>

<style scoped lang="stylus">
.nav
    position:fixed
    top:0
    left:0
    background:#000
    color:#fff
</style>
