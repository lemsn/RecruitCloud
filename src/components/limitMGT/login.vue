<template>
	<div class="container1">
        <div class="login-top">
            <!-- 这是登录页面 -->
        </div>
        <div class="login-middle">
            <MyLine>
                <el-input class="my-input" v-model="telNumber" placeholder="请输入手机号"></el-input>
            </MyLine>
            <MyLine>
                <el-input class="my-input" v-model="password" placeholder="请输入密码" type="password"></el-input>
            </MyLine>

            <p class="error">{{errorShow}}</p>
            <MyLine class="line-sp">
                <mt-button @click="login" class="my-button w100" :disabled="cantLogin" type="primary">登录</mt-button>
            </MyLine>
            <MyLine class="flex-row-between">
                <router-link class="link" to="/sendPW">忘记密码</router-link>
                <router-link class="link" to="/registerInfo1">注册</router-link>
            </MyLine>
        </div>
	</div>
</template>

<script>
import MyLine from 'components/base/myline'
import storage from 'good-storage'

export default {
    data(){
        return{
            defaultTel:'18621653071',
            telNumber:'',
            password:'',
            errorShow:''
        }
    },
    computed:{
        cantLogin(){
            return this.telNumber&&this.password ? false : true
        }
    },
	methods:{
        login(){
            this.$ajax({
                method:"post",
                url:"login/login",
                params:{
                    'phone':this.telNumber,
                    'password':this.password,
                    'tokenId':11
                }
            }).then((res)=>{
                if(res.data.code === 200){
                    storage.set('user', this.telNumber)
                    this.errorShow = ''
                    // console.log(res.data.data);
                    this.$router.push('/searchAll')
                }else{
                    this.errorShow = '账号或密码错误'
                    console.log('失败')
                }
            }).catch((err)=>{
                console.log('reject')
            })
        }
	},
    created(){
        this.telNumber = storage.get('user' ,'')
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