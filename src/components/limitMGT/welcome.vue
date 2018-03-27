<template>
	<div class="container1">
        <div class="welcome-top">
            <!-- 这是欢迎页面 -->
        </div>
        <div class="welcome-middle">
    		<router-link to="/login">
                <MyLine>
                    <mt-button class="my-button w100" type="primary">登录</mt-button>
                </MyLine>
            </router-link>
    		<router-link to="/registerInfo1">
                <MyLine>
                    <mt-button class="my-button w100" type="primary" plain>注册</mt-button>
                </MyLine>
            </router-link>
        </div>
        <div class="welcome-bottom flex-column-center">
            <p class="disc">Copyright @ 2017 woniuzhixin All Right Reserved</p>
            <p class="disc">沪ICP备15033797号-2</p>
        </div>
	</div>
</template>

<script>
import MyLine from 'components/base/myline'
export default {
	methods:{

	},
    components:{
        MyLine
    }
}
</script>

<style lang="stylus" scoped>
.welcome-top
    height:50%
    width:100%
    background:url('../../assets/login-bg.png') no-repeat center center/auto 100%
.welcome-middle
    height:43%
    width:100%
    background:#fff
.welcome-bottom
    height:7%
.disc
    text-align:center
    margin-top:5px
    font-size:10px
    color:#bbb
</style>