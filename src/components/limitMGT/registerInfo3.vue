<template>
    <div class="container2">
        <mt-header fixed title="公司信息">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <el-steps class="steps" :active="num" :align-center=true>
            <el-step></el-step>
            <el-step></el-step>
        </el-steps>
        <MyLine :type="2">
            <mt-field label="公司名称" placeholder="请输入公司名称"></mt-field>
            <mt-field label="所属行业" @click.native="openMyPopindustry" readonly placeholder="请选择所属行业" v-model="industry">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="办公地区" @click.native="openMyPopCity" readonly placeholder="请选择办公地区" v-model="city">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="详细地址" placeholder="请输入详细地址"></mt-field>
            <mt-field label="企业邮箱" placeholder="请输入企业邮箱"></mt-field>
        </MyLine>

        <p class="error">{{errorShow}}</p>
        <MyLine class="line-sp">
            <mt-button @click="next" class="my-button w100" :disabled="cantNext" type="primary">下一步</mt-button>
        </MyLine>

        <MyPop ref="mypop" :popTitle="popTitle" @getPopValue="getPopValue">
            <mt-picker :slots="pickerSlot" @change="onValuesChange"></mt-picker>
        </MyPop>
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'components/base/back'
import MyLine from 'components/base/myline'
import MyPop from 'components/base/myPop'

export default{
    data(){
        return{
            errorShow:'',
            cantSend:false,
            num:1,
            tel:'',
            popTitle:'',
            popType:'industry',
            popValue:'空',
            pickerValue:'picker组件的当前值',
            industry:'',
            industrySelect:[
                {
                    values: ['金融', 'IT'],
                    className: 'slot1'
                }
            ],
            city:'',
            citySelect:[
                {
                    flex: 1,
                    values: ['上海', '北京'],
                    className: 'slot1',
                }, {
                    divider: true,
                    content: '-',
                }, {
                    flex: 1,
                    values: ['一个区', '没有联动'],
                    className: 'slot2'
                }
            ],
        }
    },
    computed:{
        pickerSlot(){
            if (this.popType === 'industry') {
                return this.industrySelect
            }
            else if(this.popType === 'city'){
                return this.citySelect
            }
        },
        cantNext(){
            return false
        }
    },
    methods:{
        onValuesChange(picker, values){
            if (this.popType === 'industry') {
                this.pickerValue = values[0]
            }
            else if(this.popType === 'city'){
                this.pickerValue = values[0]+' '+values[1]
            }

        },
        next(){
            this.$router.push('/searchAll')
        },
        openMyPopindustry(){
            this.popTitle = '行业'
            this.popType = "industry"
            this.$refs.mypop.myPopShow()
        },
        openMyPopCity(){
            this.popTitle = '地区'
            this.popType = "city"
            this.$refs.mypop.myPopShow()
        },
        getPopValue(){
            console.log('设定值')
            this.popValue = this.pickerValue.slice()
            if (this.popType === 'industry') {
                this.industry = this.popValue
            }
            else if(this.popType === 'city'){
                this.city = this.popValue
            }
        }
    },
    components:{
        Header,
        Back,
        MyLine,
        MyPop
    }
}
</script>

<style lang="stylus">
@import '~base/base.styl'

.steps
    background:$gray
    padding:5% 5%
.el-step__icon
    width:28px
    height:28px
.el-step__icon.is-text
    border:3px solid #bee4ff
    background:$blue
.aaa .is-process .el-step__icon
    background:#e2e2e2
.aaa .is-process .el-step__icon-inner
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