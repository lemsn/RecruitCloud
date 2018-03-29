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

        <MyLine v-for="(e,i) in resumeData" :key="i" class="post-item flex-row-between" @click.native="goDetail">
            <div class="post-left">
                <p class="post-name">
                    {{e.postName}}
                </p>
                <p class="disc">
                    {{e.area}} | {{e.exp}} | {{e.edu}}
                </p>
            </div>
            <div class="post-right">
                <p class="salary">
                    {{e.salary}}
                </p>
                <p class="download">
                    <i class="iconfont icon-xiazai"></i>
                    下载
                </p>
            </div>
        </MyLine>
        <Position ref="pos"></Position>
        <Industry ref="industry"></Industry>
        <Condition ref="condition"></Condition>
    </div>
</template>

<script>
import MyMenuIcon from 'components/myMenu/myMenuIcon'
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
                    postName:'岗位名字',
                    postTime:'11:37',
                    area:'上海 - 松江区',
                    edu:'学历',
                    exp:'1-3年',
                    salary:'10-15k'
                },
                {
                    postName:'岗位名字2',
                    postTime:'16:37',
                    area:'上海 - 浦东区',
                    edu:'学历2',
                    exp:'1-2年',
                    salary:'15-25k'
                }
            ]
        }
    },
    methods:{
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
        }
    },
    components:{
        MyMenuIcon,
        MyLine,
        Position,
        Industry,
        Condition
    },
    mounted(){
    }
}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"

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