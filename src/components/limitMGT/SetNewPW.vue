<template>
    <div class="container2">
        <mt-header fixed title="设置新密码">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <MyLine>
            <el-input class="my-input" type="password" placeholder="设置您的密码" v-model="newPW"></el-input>
        </MyLine>
        <MyLine>
            <el-input class="my-input" type="password" placeholder="请再次输入" v-model="newPWRepeat"></el-input>
        </MyLine>

        <p class="error">{{errorShow}}</p>
        <MyLine>
            <mt-button @click="next" class="my-button w100" :disabled="cantNext" type="primary">确定</mt-button>
        </MyLine>
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'components/base/back'
import MyLine from 'components/base/myline'
import Regex from 'base/regex'
import { Toast } from 'mint-ui';

export default{
    data(){
        return{
            newPW:'',
            newPWRepeat:'',
            errorShow:''
        }
    },
    computed:{
        cantNext(){
            return this.newPW&&this.newPWRepeat ? false : true
        }

    },
    methods:{
        next(){
            if (!Regex.passwordRegExp(this.newPW)) {
                this.errorShow = '密码至少6位'
                return
            }
            if (this.newPW !== this.newPWRepeat) {
                this.errorShow = '两次输入密码不一致'
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
                    Toast('密码修改成功');
                    this.$router.push('login')
                }else{
                    this.errorShow = '状态码不为200'
                }
            }).catch((err)=>{
                this.errorShow = '发送失败(post url未找到)'
            })
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