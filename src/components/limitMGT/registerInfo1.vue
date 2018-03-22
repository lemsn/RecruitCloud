<template>
    <div class="container2">
        <Header title="注册">
            <div slot="left-icon">
                <Back></Back>
            </div>
        </Header>
        <MyLine>
            <el-input class="my-input" placeholder="请输入手机号"></el-input>
        </MyLine>
        <MyLine class="my-input">
            <el-row type="flex" justify="space-between">
                <el-col :span="15">
                    <el-input placeholder="请输入手机验证码"></el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                    <img class="full phone-img" src="../../assets/login-bg.png" alt="">
                </el-col>
            </el-row>
        </MyLine>
        <MyLine class="my-input">
            <el-row type="flex" justify="space-between">
                <el-col :span="15">
                    <el-input placeholder="请输入图形验证码"></el-input>
                </el-col>
                <el-col :span="8" :offset="1">
                    <img class="full phone-img" src="../../assets/login-bg.png" alt="">
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
import Back from 'base/back'
import MyLine from 'base/myline'

export default{
    computed:{
        canNext(){
            return false
        }
    },
    methods:{
        next(){
            this.$router.push('registerInfo2')
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