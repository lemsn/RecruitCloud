<template>
    <div class="searchAll container3 bg-gray">
        <mt-header fixed>
            <div slot="left">
                <MyMenuIcon></MyMenuIcon>
            </div>
            <div slot="right">
                <div class="search-box" ref="searchBox">
                    <i class="iconfont icon-sousuo"></i>
                    <mt-field placeholder="搜索" type="text" v-model="searchValue"></mt-field>
                </div>
            </div>
        </mt-header>
        <div class="my-nav flex-row-between">
            <div class="nav-item" :class="{active:activeItem===0}" @click="togglePosition">
                <p class="my-tab2">工作地点</p>
                <i class="iconfont icon-xialajiantou"></i>
            </div>
            <div class="nav-item" :class="{active:activeItem===1}" @click="toggleIndustry">
                <p class="my-tab2">全部行业</p>
                <i class="iconfont icon-xialajiantou"></i>
            </div>
            <div class="nav-item" :class="{active:activeItem===2}" @click="toggleCondition">
                <p class="my-tab2">更多条件</p>
                <i class="iconfont icon-xialajiantou"></i>
            </div>
        </div>

        <div class="search-content" infinite-scroll-distance="100" v-infinite-scroll="getDate">
            <MyLine v-for="(e,i) in resumeData" :key="i" class="job-item flex-row-between" @click.native="goDetail">
                <div class="job-left">
                    <p class="job-name">
                        {{e.jobName}}
                    </p>
                    <p class="disc">
                        {{e.area}} | {{e.exp}} | {{e.edu}}
                    </p>
                </div>
                <div class="job-right">
                    <p class="salary">
                        {{e.salary}}
                    </p>
                    <p class="download">
                        <i class="iconfont icon-xiazai"></i>
                        下载
                    </p>
                </div>
            </MyLine>
        </div>
        <Position ref="pos"></Position>
        <Industry ref="industry"></Industry>
        <Condition ref="condition"></Condition>
    </div>
</template>

<script>
import MyMenuIcon from 'components/myMenu/myMenuIcon'
import SearchIcon from 'components/base/searchIcon'
import MyLine from 'components/base/myline'
import Position from 'components/searchAll/position'
import Industry from 'components/searchAll/industry'
import Condition from 'components/searchAll/condition'

export default{
    data(){
        return{
            searchValue:'',
            activeItem:null,
            resumeData:[
                {
                    jobName:'岗位名字',
                    jobTime:'11:37',
                    area:'上海 - 松江区',
                    edu:'学历',
                    exp:'1-3年',
                    salary:'10-15k'
                }
            ]
        }
    },
    methods:{
        getDate(){
            console.log('加载数据')
        },
        goDetail(){
            this.$router.push('personalDetail')
        },
        togglePosition(){
            this.activeItem = this.activeItem===0 ? null : 0
            this.$refs.pos.toggle()
            this.$refs.industry._hide()
            this.$refs.condition._hide()
        },
        toggleIndustry(){
            this.activeItem = this.activeItem===1 ? null : 1
            this.$refs.pos._hide()
            this.$refs.industry.toggle()
            this.$refs.condition._hide()
        },
        toggleCondition(){
            this.activeItem = this.activeItem===2 ? null : 2
            this.$refs.pos._hide()
            this.$refs.industry._hide()
            this.$refs.condition.toggle()
        },
        _search(){
            this.$refs.searchBox.onkeydown=function(){
                if (event.keyCode == 13){
                  alert('回车搜索');
                }
            }
        }
    },
    components:{
        MyMenuIcon,
        MyLine,
        Position,
        Industry,
        Condition,
        SearchIcon
    },
    mounted(){
        this._search()
    }
}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"

.icon-sousuo
    position:fixed
    z-index:1
    color:#ddd
    left:44px
    top:14px
    font-size:14px
.my-nav
    width:100%
    position:fixed
    top:40px
    z-index:40
    background:#fff
    border-bottom: 1px solid #e9eef5;
.my-tab2
    display:inline-block
    font-size:14px
    color:#4b545e
    &+.iconfont
        display: inline-block
        font-size:12px
        color:#cad2dc
        transform:scale(0.7)
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