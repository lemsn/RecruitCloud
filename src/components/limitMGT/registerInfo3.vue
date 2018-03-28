<template>
    <div class="container2">
        <mt-header fixed title="公司信息" @click.native="aa">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <el-steps class="steps" :active="num" :align-center=true>
            <el-step></el-step>
            <el-step></el-step>
        </el-steps>
        <MyLine :type="2">
            <mt-field label="公司名称" placeholder="请输入公司名称" v-model="companyName"></mt-field>
            <mt-field label="所属行业" @click.native="openMyPopindustry" readonly placeholder="请选择所属行业" v-model="industry">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="办公地区" @click.native="openMyPopCity" readonly placeholder="请选择办公地区" v-model="area">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="详细地址" placeholder="请输入详细地址" v-model="address"></mt-field>
            <mt-field label="企业邮箱" placeholder="请输入企业邮箱" v-model="email"></mt-field>
        </MyLine>

        <p class="error">{{errorShow}}</p>
        <MyLine class="line-sp">
            <mt-button @click="next" class="my-button w100" :disabled="cantNext" type="primary">下一步</mt-button>
        </MyLine>

        <MyPop ref="mypop" :popTitle="popTitle" @getPopValue="getPopValue">
            <mt-picker ref="mypicker" :slots="pickerSlot" @change="onValuesChange"></mt-picker>
        </MyPop>
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'components/base/back'
import MyLine from 'components/base/myline'
import MyPop from 'components/base/myPop'
import Regex from 'base/regex'
import { defaultAvatar, provinceFormat, cityFormat} from 'components/base/defaultData'

export default{
    data(){
        return{
            companyName:'',//post公司名
            industry:'',//post行业
            email:'', //post邮箱
            prov:'',//post的省
            city:'',//post的市
            address:'',//详细地址
            area:'',//组件传出的数据(渲染到input)
            provinceSelect:'',//选中的省index
            cityArr:'',//对应的城市列表
            errorShow:'',
            cantSend:false,
            num:1,
            tel:'',
            popTitle:'',
            popType:'industry',
            popValue:'空',
            pickerValue:'picker组件的当前值',
            industrySelect:[
                {
                    values: ['金融', 'IT'],
                    className: 'slot1'
                }
            ],
            citySelect:[
                {
                    flex: 1,
                    values: provinceFormat,
                    className: 'slot1',
                }, {
                    divider: true,
                    content: '-',
                }, {
                    flex: 1,
                    values: this.cityArr,
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
            return this.companyName&&this.industry&&this.area&&this.address&&this.email ? false : true
        }
    },
    methods:{
        aa(){
            console.log(this.companyName)
        },
        onValuesChange(picker, values){
            if (this.popType === 'industry') {
                this.pickerValue = values[0]
            }
            else if(this.popType === 'city'){
                this.provinceSelect = provinceFormat.findIndex((item)=>{
                    return item === values[0]
                })
                // console.log(cityFormat[this.provinceSelect])
                this.$refs.mypicker.setSlotValues(1, cityFormat[this.provinceSelect])
                this.prov = values[0]
                this.city = values[1]
                this.pickerValue = values[0]+' '+values[1]
            }

        },
        next(){
            if (!Regex.emailRegExp(this.email)) {
                this.errorShow = '邮箱格式不正确'
                return
            }
            this.$ajax({
                method:'post',
                url:'toAddUserBaseInfo',
                params:{
                    accountId:this.accountId,
                    uname:this.trueName,
                    gender:this.sexIndex,
                    prov:this.prov,
                    city:this.city,
                    imageUrl:this.avatar
                }
            }).then((res)=>{
                if (res.data.code === 200) {
                    this.errorShow = ''
                    console.log('下一步',res.data.data);
                    this.$router.push('/searchAll')
                }else{
                    this.errorShow = '状态码不为200'
                }
            }).catch(()=>{
                this.errorShow = '发送失败(地区应该发送index值),post url也不对(未找到)'
            })
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
                this.area = this.popValue
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