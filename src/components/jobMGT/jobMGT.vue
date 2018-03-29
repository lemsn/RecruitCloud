<template>
    <div class="searchAll container3 bg-gray">
        <mt-header fixed title="聚合搜索">
            <div slot="left">
                <MyMenuIcon></MyMenuIcon>
            </div>
            <div slot="right">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </mt-header>
        <div class="my-nav flex-row-center">
            <router-link to="jobOnline" tag="div" class="nav-item" :class="{active:activeItem===0}">
                <p class="my-tab">在线</p>
            </router-link>
            <router-link to="jobOffline" tag="div" class="nav-item" :class="{active:activeItem===1}">
                <p class="my-tab">已下线</p>
            </router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
import MyMenuIcon from 'components/myMenu/myMenuIcon'
import MyLine from 'components/base/myline'
import JobOnline from 'components/jobMGT/jobOnline'
import JobOffline from 'components/jobMGT/jobOffline'

export default{
    data(){
        return{
            searchValue:'',
            activeItem:0
        }
    },
    methods:{
        goDetail(){
            this.$router.push('jobDetail')
        },
    },
    components:{
        MyMenuIcon,
        MyLine,
    },
    mounted(){
    }
}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"

.post-item
    background:#fff
    padding:13px 7% 13px 5%
    position:relative
    margin-bottom:3px
.post-name
    font-size:16px
    font-weight:bold
    margin-bottom:10px
.disc
    color:$gray2
    font-size:12px
.salary
    color:$orange
    font-weight:bold
    margin-bottom:10px
.download
    text-align:right
    font-size:12px
    color:$gray2
    extend-click()
    .iconfont
        font-size:12px


</style>