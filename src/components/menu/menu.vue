<template>
    <div class="nav" v-show="show">
        这是菜单
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
        }
    }
}
</script>

<style scoped lang="stylus">

</style>
