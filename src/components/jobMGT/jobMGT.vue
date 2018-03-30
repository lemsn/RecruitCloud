<template>
    <div class="searchAll container3 bg-gray">
        <mt-header fixed title="职位管理">
            <div slot="left">
                <MyMenuIcon></MyMenuIcon>
            </div>
            <div slot="right">
                <i class="iconfont icon-sousuo"></i>
            </div>
        </mt-header>
        <div class="my-nav flex-row-center">
            <router-link to="jobOnline" tag="div" class="nav-item" @click.native="changeActive" :class="{active:activeItem===0}">
                <p class="my-tab">在线</p>
            </router-link>
            <router-link to="jobOffline" tag="div" class="nav-item" @click.native="changeActive" :class="{active:activeItem===1}">
                <p class="my-tab">已下线</p>
            </router-link>
        </div>
        <div class="flex-column-between h100">
            <router-view/>
            <div class="bottom-button">
                <mt-button @click="postJob" class="my-button w100" type="primary">发布新职位</mt-button>
            </div>
        </div>
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
        postJob(){
            this.$router.push('postJob')
        },
        goDetail(){
            this.$router.push('jobDetail')
        },
        changeActive(){
            let _url = this.$route.path
            if (_url.indexOf('jobOnline')>-1) {
                this.activeItem = 0
            }else{
                this.activeItem = 1
            }
        }
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

.job-item
    background:#fff
    padding:13px 7% 13px 5%
    position:relative
    margin-bottom:3px
.job-name
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