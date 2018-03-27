<template>
    <div class="menu-icon">
        <i class="iconfont icon-caidan" @click="_open"></i>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default{
    data(){
        return{
            menuShow:true
        }
    },
    methods:{
        _open(){
            this.open(true)
        },
        ...mapMutations({
            open:'open'
        })
    }
}
</script>

<style scoped lang="stylus">

</style>
