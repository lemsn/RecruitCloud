<template>
    <div class="container2">
        <mt-header fixed title="注册">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <MyLine>
            <el-input class="my-input" placeholder="请输入手机号"></el-input>
        </MyLine>
        <MyLine class="my-input">
            <el-row type="flex" justify="space-between">
                <el-col :span="15">
                    <el-input placeholder="请输入手机验证码"></el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                    <mt-button @click="sendCode" class="my-button w100 mgtop0 font14" :disabled="canSend" type="primary">{{sendDis}}</mt-button>
                </el-col>
            </el-row>
        </MyLine>
        <MyLine class="my-input">
            <el-row type="flex" justify="space-between">
                <el-col :span="15">
                    <el-input placeholder="请输入图形验证码"></el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                    <img class="w100 phone-img" src="../../assets/login-bg.png" alt="">
                </el-col>
            </el-row>
        </MyLine>
        <MyLine>
            <el-input class="my-input" type="password" placeholder="请输入密码"></el-input>
        </MyLine>
        <MyLine>
            <el-input class="my-input" type="password" placeholder="请再输入一次密码"></el-input>
        </MyLine>
        <MyLine>
            <mt-button @click="next" class="my-button w100" :disabled="canNext" type="primary">下一步</mt-button>
        </MyLine>
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'components/base/back'
import MyLine from 'components/base/myline'

export default{
    data(){
        return{
            canSend:false,
            sendDis:'发送验证码',
            time:10
        }
    },
    computed:{
        canNext(){
            return false
        }

    },
    methods:{
        next(){
            this.$router.push('registerInfo2')
        },
        sendCode(){
            this.canSend = true
            this.sendDis = this.time + 's'
            this._countTime()
        },
        _countTime(){
            let timer = setInterval(()=>{
                this.time--
                this.sendDis = this.time + 's'
                if (this.time === 0) {
                    clearInterval(timer)
                    this.sendDis = '重新发送'
                    this.canSend = false
                    this.time = 10
                };
            },1000)
        }
    },
    components:{
        Header,
        Back,
        MyLine
    }
}
</script>

<style lang="stylus">
.my-input
    margin-top:5%
.phone-img,.verify-img
    height:40px
    border-radius:4px
</style>