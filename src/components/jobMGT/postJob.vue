<template>
    <div class="container2">
        <mt-header fixed title="发布职位">
            <div slot="left">
                <MyMenuIcon></MyMenuIcon>
            </div>
            <div slot="right" @click="goPrev">
                取消
            </div>
        </mt-header>
        <div class="job-container flex-column-center">
            <MyLine class="job-content" :type="2">
                <mt-field label="职位名称" placeholder="请输入职位名称" v-model="jobName"></mt-field>
                <mt-field label="月薪范围" @click.native="openMyPopSalary" readonly placeholder="请选择月薪范围" v-model="salary">
                    <i class="mint-cell-allow-right"></i>
                </mt-field>
                <mt-field label="办公地区" @click.native="openMyPopCity" readonly placeholder="请选择所在地区" v-model="area">
                    <i class="mint-cell-allow-right"></i>
                </mt-field>
                <mt-field label="详细地址" placeholder="请输入详细地址" v-model="address"></mt-field>
                <mt-field label="经验要求" @click.native="openMyPopExp" readonly placeholder="请选择所需经验" v-model="exp">
                    <i class="mint-cell-allow-right"></i>
                </mt-field>
                <mt-field label="学历要求" @click.native="openMyPopEdu" readonly placeholder="请选择所需学历" v-model="edu">
                    <i class="mint-cell-allow-right"></i>
                </mt-field>
                <mt-field label="有效期" @click.native="openMyPopTime" readonly placeholder="请选择截止日期" v-model="endTime">
                    <i class="mint-cell-allow-right"></i>
                </mt-field>
                <mt-field label="福利待遇" @click.native="openWelfare" readonly placeholder="请选择福利待遇" :value="welfareActived">
                    <i class="mint-cell-allow-right"></i>
                </mt-field>
                <mt-field label="岗位职责" type="textarea" rows="10" class="align-start" placeholder="请填写岗位职责" v-model="jobDuty">
                    <!-- <i class="mint-cell-allow-right"></i> -->
                </mt-field>

            </MyLine>
            <div class="bottom-button">
                <mt-button @click="postJob" class="my-button w100" type="primary">发布</mt-button>
            </div>
        </div>


        <!-- <p class="error">{{errorShow}}</p> -->
        <!-- 下边弹窗 -->
        <MyPop ref="mypop" :popTitle="popTitle" @getPopValue="getPopValue">
            <mt-picker ref="mypicker" :slots="pickerSlot" @change="onValuesChange"></mt-picker>
        </MyPop>
        <!-- 福利弹窗 -->
        <mt-popup class="w100"
            v-model="welfarePop"
            position="bottom">
            <ul class="welfare-container flex-row-between">
                <li class="my-button3" :class="{active:JSON.stringify(welfareActivedArr).indexOf(JSON.stringify(e))!=-1}" @click="changeWelfare(e,i)" v-for="(e,i) in welfareArr">{{e.value}}</li>
                <li class="empty"></li>
                <li class="empty"></li>
                <li class="empty"></li>
            </ul>
        </mt-popup>
    </div>
</template>

<script>
import Header from 'components/header/header'
import MyMenuIcon from 'components/myMenu/myMenuIcon'
// import Back from 'components/base/back'
import MyLine from 'components/base/myline'
import MyPop from 'components/base/myPop'
import { Toast } from 'mint-ui'
import Regex from 'base/regex'
import {provinceFormat, cityFormat, findCityIndex, expFormat, eduFormat, findExpIndex, findEduIndex, salaryOrigin, dateOrigin, welfareOrigin} from 'components/base/defaultData'

export default{
    data(){
        return{
            jobName:'',
            provId:'',//需要post的省id
            cityId:'',//需要post的市id
            provCity:'',//数组[provId,cityId]
            area:'',//组件传出的数据(渲染到input)
            provinceSelect:'',//选中的省index
            cityArr:'',//对应的城市列表

            salaryStart:'',
            salaryEnd:'',
            salary:'',//渲染到input的salary值
            exp:'',//渲染到input的exp值
            expId:'',//需要post的经验id
            edu:'',//渲染到input的edu值
            eduId:'',//需要post的学历id
            endYear:'',
            endMonth:'',
            endDay:'',
            endTime:'',//需要post的有效期
            welfareId:[],//需要post的福利待遇(多个id)
            welfareActivedArr:[],//激活福利对象
            // 这里需要一个福利index数组 展示的i indexOf大于0 加active
            welfareArr:welfareOrigin,//所有福利
            jobDuty:'',//需要post的岗位职责

            address:'',
            popTitle:'',
            popType:'city',
            errorShow:'',
            welfarePop:false,
            sheetShow:false,
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
            salarySelect:[
                {
                    flex: 1,
                    values: salaryOrigin,
                    className: 'slot1',
                }, {
                    divider: true,
                    content: '~',
                }, {
                    flex: 1,
                    values: salaryOrigin,
                    className: 'slot2'
                }
            ],
            expSelect:[
                {
                    flex: 1,
                    values: expFormat,
                    className: 'slot1',
                }
            ],
            eduSelect:[
                {
                    flex: 1,
                    values: eduFormat,
                    className: 'slot1',
                }
            ],
            timeSelect:[
                {
                    flex: 1,
                    values: dateOrigin.year,
                    className: 'slot1',
                },{
                    divider: false
                },{
                    flex: 1,
                    values: dateOrigin.day,
                    className: 'slot2'
                },{
                    flex: 1,
                    values: dateOrigin.day,
                    className: 'slot3'
                }
            ],
        }
    },
    computed:{
        pickerSlot(){
            if (this.popType === 'city') {
                return this.citySelect
            }
            else if(this.popType === 'salary'){
                return this.salarySelect
            }
            else if(this.popType === 'exp'){
                return this.expSelect
            }
            else if(this.popType === 'edu'){
                return this.eduSelect
            }
            else if(this.popType === 'time'){
                return this.timeSelect
            }
        },
        welfareActived(){ //激活的福利名字
            let _arr = []
            for(let i in this.welfareActivedArr){
                _arr.push(this.welfareActivedArr[i].value)
            }
            return _arr.join('，')
        }
    },
    methods:{
        postJob(){
            if(this.jobName&&this.salary&&this.area&&this.exp&&this.edu&&this.endTime&&this.welfareActived&&this.jobDuty){
                console.log('发布')
                this.$ajax({
                    method:'post',
                    url:'',
                    params:{

                    }
                }).then((res)=>{
                    if (res.data.code === 200) {
                        this.errorShow = ''
                        console.log('下一步');
                        this.$router.push('/')
                    }else if(res.data.code === 401){
                        this.$router.push('login')
                    }else{
                        this.errorShow = '状态码为'+res.data.code
                    }
                }).catch(()=>{
                    this.errorShow = '发布失败'
                })
            }else{
                Toast('有未填项')
            }
        },
        goPrev(){
            this.$router.back()
        },
        changeWelfare(e,i){
            if (this._isWelfare(e) < 0) {
                this.welfareActivedArr.push(e)
            }else{
                let _welfare = this._findwelfareIndex(e)
                this.welfareActivedArr.splice(_welfare,1)
            }
        },
        _isWelfare(e){
            return this.welfareActivedArr.findIndex((item)=>{
                return item == e
            })
        },
        _findwelfareIndex(e){
            let _index = null
            this.welfareActivedArr.forEach((item,index)=>{
                if(item === e){
                    _index = index
                }
            })
            return _index
        },
        openWelfare(){
            this.welfarePop = true
        },
        onValuesChange(picker, values){ //picker改变值时触发
            this.$nextTick(()=>{
                if(this.popType === 'city'){
                    this.provinceSelect = provinceFormat.findIndex((item)=>{
                        return item === values[0]
                    })
                    // console.log(cityFormat[this.provinceSelect])
                    this.$refs.mypicker.setSlotValues(1, cityFormat[this.provinceSelect])
                    this.provCity = findCityIndex(values[0],values[1])
                    console.log(this.provCity)
                    this.provId = this.provCity[0]
                    this.cityId = this.provCity[1]
                    this.pickerValue = values[0]+' '+values[1]
                }
                else if (this.popType === 'salary') {
                    this.salaryStart = values[0]
                    this.salaryEnd = values[1]
                    this.pickerValue = values[0]+'~'+values[1]
                }
                else if (this.popType === 'exp') {
                    this.expId = findExpIndex(values[0])
                    this.pickerValue = values[0]
                }
                else if (this.popType === 'edu') {
                    this.eduId = findEduIndex(values[0])
                    this.pickerValue = values[0]
                }
                else if (this.popType === 'time') {
                    this.endYear = values[0]
                    this.endMonth = values[2]
                    this.endDay = values[3]
                    this.pickerValue = values[0]+'-'+values[2]+'-'+values[3]
                }
            })
        },
        openMyPopCity(){
            this.popTitle = '地区'
            this.popType = "city"
            this.$refs.mypop.myPopShow()
        },
        openMyPopSalary(){
            this.popTitle = '薪资范围'
            this.popType = "salary"
            this.$refs.mypop.myPopShow()
        },
        openMyPopExp(){
            this.popTitle = '经验'
            this.popType = "exp"
            this.$refs.mypop.myPopShow()
        },
        openMyPopEdu(){
            this.popTitle = '学历'
            this.popType = "edu"
            this.$refs.mypop.myPopShow()
        },
        openMyPopTime(){
            this.popTitle = '有效期'
            this.popType = "time"
            this.$refs.mypop.myPopShow()
        },
        getPopValue(){
            console.log(this.pickerValue)
            this.popValue = this.pickerValue.slice()
            if (this.popType === 'city') {
                this.area = this.popValue
            }
            else if(this.popType === 'salary'){
                if (parseInt(this.salaryStart) > parseInt(this.salaryEnd)) {
                    Toast('请选择正确的薪资范围');
                    return
                }
                this.salary = this.popValue
            }
            else if(this.popType === 'exp'){
                this.exp = this.popValue
            }
            else if(this.popType === 'edu'){
                this.edu = this.popValue
            }
            else if(this.popType === 'time'){
                if (!Regex.isDate(this.endYear,this.endMonth,this.endDay)) {
                    Toast('请选择正确的日期')
                    return
                }
                this.endTime = this.popValue
            }
        },
        sheetOpen(){
            this.sheetShow = true
        }
    },
    created(){
        // console.log(salaryOrigin)
    },
    components:{
        Header,
        MyLine,
        MyPop,
        MyMenuIcon
    }

}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"

.job-container
    height:100%
.job-content
    overflow:auto
.welfare-container
    font-size:0
    flex-wrap:wrap
    align-content:flex-start
    height:244px
    padding:3%
    overflow:auto
.my-button3
    margin:1%
    width:30%
    &.active
        border: 1px solid #26a2ff;
        background:#e9f5fe!important
        color:#26a2ff
.empty
    height:0
    margin:1%
    width:30%
</style>