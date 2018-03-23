<template>
    <div class="container2">
        <mt-header fixed title="设置新密码">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <MyLine>
            <el-input class="my-input" type="password" placeholder="设置您的密码"></el-input>
        </MyLine>
        <MyLine>
            <el-input class="my-input" type="password" placeholder="请再次输入"></el-input>
        </MyLine>

        <MyLine>
            <mt-button @click="next" class="my-button w100" :disabled="canNext" type="primary">下一步</mt-button>
        </MyLine>
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'base/back'
import MyLine from 'base/myline'

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
            this.$router.push('login')
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