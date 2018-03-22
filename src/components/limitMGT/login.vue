<template>
	<div class="container">
        <div class="welcome-top">
            这是登录页面
        </div>
        <div class="welcome-bottom">
    		<router-link to="/searchAll">
                <ButtonBig>
                    <el-button type="primary">登录</el-button>
                </ButtonBig>
            </router-link>
    		<router-link to="/registerInfo1">
                <el-button type="primary" plain>注册</el-button>
            </router-link>
        </div>
		<router-link to="/sendPW">忘记密码</router-link>

	</div>
</template>

<script>
import ButtonBig from 'base/buttonBig'
export default {
	methods:{

	},
    components:{
        ButtonBig
    }
}
</script>

<style lang="stylus" scoped>
.welcome-top
    height:50%
    width:100%
    background:url('../../assets/login-bg.png') no-repeat center center/auto 100%
.welcome-bottom
    height:50%
    width:100%
    background:#fff
</style>