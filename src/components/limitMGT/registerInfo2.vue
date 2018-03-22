<template>
    <div class="container2">
        <Header title="基本信息">
            <div slot="left-icon">
                <Back></Back>
            </div>
        </Header>
        <el-steps class="steps" :active="num" :align-center=true>
            <el-step title="进行中"></el-step>
            <el-step></el-step>
        </el-steps>
        <MyLine>
            <mt-field class="input-rtl" :disableClear=true label="真实姓名" placeholder="请输入您的真实姓名"></mt-field>
            <mt-cell title="性别">
                <span @click="openPicker()">{{sex}}</span>
            </mt-cell>
            <mt-cell title="所在地区">
                <span>请选择所在地区</span>
            </mt-cell>
        </MyLine>

        <MyLine>
            <mt-button @click="next" class="my-button w100" :disabled="canNext" type="primary">下一步</mt-button>
        </MyLine>

        <mt-datetime-picker
            ref="picker"
            type="date"

            >
        </mt-datetime-picker>

    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'base/back'
import MyLine from 'base/myline'

export default{
    data(){
        return{
            num:1,
            sex:'请选择性别'
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
        openPicker() {
            this.$refs.picker.open();
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
@import '~assets/base.styl'

.steps
    background:$gray
    padding:5% 5%
.el-step__icon
    width:28px
    height:28px
.el-step__icon.is-text
    border:3px solid #bee4ff
    background:$blue
.is-process .el-step__icon
    background:#e2e2e2
.is-process .el-step__icon-inner
    color:#bbb
.el-step.is-center .el-step__line
    background:$blue
    left:0
    right:0
.el-step:last-of-type .el-step__line
    display:block
.el-step__line-inner
    display:none
.el-step__icon-inner
    line-height:28px
    color:$gray
.el-step__title
    font-size:14px
    line-height:20px
</style>