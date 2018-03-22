<template>
	<div class="container">
        <div class="login-top">
            <!-- 这是登录页面 -->
        </div>
        <div class="login-middle">
            <MyLine>
                <el-input class="my-input" v-model="telNumber" placeholder="请输入手机号"></el-input>
            </MyLine>
            <MyLine>
                <el-input class="my-input" v-model="password" placeholder="请输入密码"></el-input>
            </MyLine>
            <MyLine>
                <mt-button @click="login" class="my-button w100" :disabled="canLogin" type="primary">登录</mt-button>
            </MyLine>
            <MyLine class="flex-row-between">
                <router-link class="link" to="/sendPW">忘记密码</router-link>
                <router-link class="link" to="/registerInfo1">注册</router-link>
            </MyLine>
        </div>
	</div>
</template>

<script>
import MyLine from 'base/myline'
export default {
    data(){
        return{
            telNumber:'',
            password:''
        }
    },
    computed:{
        canLogin(){
            console.log(this.telNumber)
            return this.telNumber&&this.password ? false : true
        }
    },
	methods:{
        login(){
            return false
            this.$router.push('/searchAll')
        }
	},
    components:{
        MyLine
    }
}
</script>

<style lang="stylus" scoped>
.login-top
    height:50%
    width:100%
    background:url('../../assets/login-bg.png') no-repeat center center/auto 100%
.login-middle
    height:50%
    width:100%
    background:#fff
.my-input
    margin-top:7%
.link
    display:inline-block
    margin-top:5%
    color:#bbb
</style>