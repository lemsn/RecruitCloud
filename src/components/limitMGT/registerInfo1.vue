<template>
    <div class="container2">
        <mt-header fixed title="注册">
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
        <MyLine class="my-input">
            <el-row type="flex" justify="space-between">
                <el-col :span="15">
                    <el-input v-model="verificationImg" placeholder="请输入图形验证码"></el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                    <div class="w100 phone-img" id="imgcode"></div>
                </el-col>
            </el-row>
        </MyLine>
        <MyLine>
            <el-input v-model="password" class="my-input" type="password" placeholder="请输入密码（至少6位）"></el-input>
        </MyLine>
        <MyLine>
            <el-input v-model="passwordRepeat" class="my-input" type="password" placeholder="请再输入一次密码"></el-input>
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
import storage from 'good-storage'

export default{
    data(){
        return{
            errorShow:'',
            cantSend:false,
            sendDis:'发送验证码',
            time:120,
            telNumber:'',
            verification:'',
            verificationTrue:'',
            verificationImg:'',
            password:'',
            passwordRepeat:'',
        }
    },
    computed:{
        cantNext(){
            return this.telNumber&&this.verification&&this.verificationImg&&this.password&&this.passwordRepeat ? false : true
        }
    },
    methods:{
        next(){
            var imgCode = this.verifyCode.validate(this.verificationImg)
            if (!Regex.telRegExp(this.telNumber)) {
                this.errorShow = '请输入正确的手机号'
                return
            }else if (!Regex.passwordRegExp(this.password)) {
                this.errorShow = '密码至少6位'
                return
            }else if (this.verification !== this.verificationTrue) {
                this.errorShow = '手机验证码不正确'
                return
            }else if (!imgCode){
                this.errorShow = '图形验证码不正确'
                return
            }else if (this.password !== this.passwordRepeat) {
                this.errorShow = '两次输入密码不一致'
                return
            };

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
                    this.$router.push('login')
                }else{
                    this.errorShow = '状态码不为200'
                }
            }).catch((err)=>{
                this.errorShow = '发送失败'
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
    mounted(){
        this.verification = storage.get('verification' ,'').length>4 ? '' : storage.get('verification' ,'')
        this.verifyCode = new GVerify("imgcode");
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