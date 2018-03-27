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

export default{
    data(){
        return{
            cantSend:false,
            sendDis:'发送验证码',
            time:10,
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
            this.$router.push('setNewPW')
        },
        sendCode(){
            this.cantSend = true
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
                    this.cantSend = false
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