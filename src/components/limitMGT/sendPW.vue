<template>
    <div class="container2">
        <mt-header fixed title="找回密码">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <MyLine>
            <el-input class="my-input" v-model="telNumber" placeholder="请输入手机号"></el-input>
        </MyLine>
        <MyLine class="my-input">
            <el-row type="flex" justify="space-between">
                <el-col :span="15">
                    <el-input v-model="verification" placeholder="请输入手机验证码"></el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                    <mt-button @click="sendCode" class="my-button w100 mgtop0 font14" :disabled="cantSend" type="primary">{{sendDis}}</mt-button>
                </el-col>
            </el-row>
        </MyLine>

        <p class="error">{{errorShow}}</p>
        <MyLine class="line-sp">
            <mt-button @click="next" class="my-button w100" :disabled="cantNext" type="primary">下一步</mt-button>
        </MyLine>
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'components/base/back'
import MyLine from 'components/base/myline'
import Regex from 'base/regex'

export default{
    data(){
        return{
            telNumber:'',
            verification:'',
            cantSend:false,
            sendDis:'发送验证码',
            time:120,
            errorShow:'',
            telNumber:'',
            verification:''
        }
    },
    computed:{
        cantNext(){
            return this.telNumber&&this.verification ? false : true
        }

    },
    methods:{
        next(){
            if (!Regex.telRegExp(this.telNumber)) {
                this.errorShow = '请输入正确的手机号'
                return
            }

            this.$ajax({
                method:'post',
                url:'login/regist',
                params:{
                    phone:this.telNumber,
                    password:this.password,
                    code:this.verification,
                }
            }).then((res)=>{
                if (res.data.code === 200) {
                    this.errorShow = ''
                    console.log(res.data.data);
                    this.$router.push('setNewPW')
                }else{
                    this.errorShow = '状态码不为200'
                }
            }).catch((err)=>{
                this.errorShow = '发送失败(post url未找到)'
            })
        },
        sendCode(){
            if (!Regex.telRegExp(this.telNumber)) {
                this.errorShow = '请输入正确的手机号'
                return
            }
            this.errorShow = ''
            this.cantSend = true
            this.sendDis = this.time + 's'
            this._countTime()
            this.$ajax({
                method:'post',
                url:'login/sendSms',
                params:{
                    phone:this.telNumber
                }
            }).then((res)=>{
                if (res.data.code === 200) {
                    console.log(res.data)
                    this.verificationTrue = res.data.data
                    storage.set('verification' ,res.data.data)
                }else{
                    this.errorShow = '2分钟内勿重复发送'
                }
            })
        },
        _countTime(){
            let timer = setInterval(()=>{
                this.time--
                this.sendDis = this.time + 's'
                if (this.time === 0) {
                    clearInterval(timer)
                    this.sendDis = '重新发送'
                    this.cantSend = false
                    this.time = 120
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