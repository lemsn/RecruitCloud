<template>
    <transition name="slide-left">
        <div class="menu" @click="_close" v-show="menuState">
            <div class="menu-content flex-column-between">
                <div class="menu-top">
                    <div class="company-info flex-row-between">
                        <img src="../../assets/default-man.png">
                        <p class="company-name ellipsis">
                            这是登录后的公司名字公司名字公司名字
                        </p>
                    </div>
                    <div class="company-func">
                        <div class="company-func-item">
                            <i class="iconfont icon-fabu"></i>
                            <p class="func-name">发职位</p>
                        </div>
                        <div class="company-func-item">
                            <i class="iconfont icon-sousuo"></i>
                            <p class="func-name">搜人才</p>
                        </div>
                    </div>
                    <ul class="menu-list">
                        <!-- <router-link tag="li" to="searchAll" class="active">
                            <div>
                                <i class="iconfont icon-juhe"></i>
                                <p class="menu-item-name">聚合搜索</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </router-link> -->
                        <li @click="goSearch" class="active">
                            <div>
                                <i class="iconfont icon-juhe"></i>
                                <p class="menu-item-name">聚合搜索</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont icon-zhanghu"></i>
                                <p class="menu-item-name">账户管理</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont icon-zhiwei"></i>
                                <p class="menu-item-name">职位管理</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont icon-jianli"></i>
                                <p class="menu-item-name">我的简历</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont icon-mianshi"></i>
                                <p class="menu-item-name">面试管理</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont icon-yuangong"></i>
                                <p class="menu-item-name">员工管理</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                        <li>
                            <div>
                                <i class="iconfont icon-zhanghu"></i>
                                <p class="menu-item-name">账户管理</p>
                            </div>
                            <i class="iconfont icon-jiantouyou"></i>
                        </li>
                    </ul>
                </div>
                <div class="menu-bottom">
                    <p class="exit" @click="loginOut">退出登录</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {mapMutations,mapGetters,mapState} from 'vuex'
export default{
    data(){
        return{

        }
    },
    methods:{
        _close(){
            // console.log(this.close)
            this.close(false)
        },
        goSearch(){
            this.$router.push('/searchAll')
            this._close()
        },
        loginOut(){
            // 清空登录信息
            this.$router.push('/login')
            this._close()
        },
        ...mapMutations({
            close:'close'
        })
    },
    computed:{
        ...mapGetters([
            'menuState'
        ])
    }
}
</script>

<style scoped lang="stylus">
.menu
    position:fixed
    z-index:20
    top:0
    left:0
    height:100%
    right:0
    background:rgba(0,0,0,0)
    color:#b8c0c9
    font-size:15px
.menu-content
    height:100%
    width:220px
    background:#28323b
.menu-top
    flex: 1 0 auto
.menu-bottom
    height:40px
    border-top:1px solid #1f262c
    text-align:center
.company-info
    padding:15px
    img
        border-radius:5px
        display:inline-block
        width:30px
        height:30px
    .company-name
        line-height:30px
        margin-left:15px
        flex:1 0
.company-func
    display:flex
    padding:15px
.company-func-item
    display:inline-block
    flex: 0 0 50%
.func-name
    display:inline-block
.menu-list
    li
        padding:15px
        display:flex
        justify-content:space-between
        &.active
            color:#fff
            background:#1f262c
.menu-item-name
    display:inline-block
    margin-left:5px
.exit
    line-height:40px
</style>
