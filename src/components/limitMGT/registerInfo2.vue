<template>
    <div class="container2">
        <mt-header fixed title="基本信息">
            <div slot="left">
                <Back></Back>
            </div>
        </mt-header>
        <el-steps class="steps" :active="num" :align-center=true>
            <el-step></el-step>
            <el-step :class="{aaa:judge}"></el-step>
        </el-steps>

        <MyLine :type="2">
            <mt-field @click.native="sheetOpen" class="avatar-container" label="头像" readonly>
                <img class="avatar" :src="avatar">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="真实姓名" placeholder="请输入您的真实姓名" v-model="trueName"></mt-field>
            <mt-field label="性别" @click.native="openMyPopSex" readonly placeholder="请选择性别" v-model="sex">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="所在地区" @click.native="openMyPopCity" readonly placeholder="请选择所在地区" v-model="area">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
        </MyLine>

        <p class="error">{{errorShow}}</p>
        <MyLine class="line-sp">
            <mt-button @click="next" class="my-button w100" :disabled="cantNext" type="primary">下一步</mt-button>
        </MyLine>
        <!-- 下边弹窗 -->
        <MyPop ref="mypop" :popTitle="popTitle" @getPopValue="getPopValue">
            <mt-picker ref="mypicker" :slots="pickerSlot" @change="onValuesChange"></mt-picker>
        </MyPop>

        <mt-actionsheet
            :actions="actions"
            v-model="sheetShow">
        </mt-actionsheet>
        <!-- input -->
        <input @change="setAvatar" id="takepicture" type="file" accept="image/jpg,image/jpeg,image/png,image/bmp" capture="camera" style="display: none">
    </div>
</template>

<script>
import Header from 'components/header/header'
import Back from 'components/base/back'
import MyLine from 'components/base/myline'
import MyPop from 'components/base/myPop'
import { Toast } from 'mint-ui';
import { defaultAvatar, provinceFormat, cityFormat} from 'components/base/defaultData'
import storage from 'good-storage'
import Regex from 'base/regex'

export default{
    data(){
        return{
            accountId:'',
            trueName:'',
            sex:'',
            sexIndex:'',//需要post的性
            prov:'',//需要post的省
            city:'',//需要post的市
            area:'',//组件传出的数据(渲染到input)
            provinceSelect:'',//选中的省index
            cityArr:'',//对应的城市列表
            errorShow:'',
            cantSend:false,
            avatar:'http://www.qq745.com/uploads/allimg/150325/011111C01-35.jpg',
            actions:[
                {
                    name:'选择照片',
                    method:()=>{
                        document.getElementById('takepicture').click()
                    }
                }
            ],
            sheetShow:false,
            num:1,
            tel:'',
            popTitle:'',
            popType:'sex',
            popValue:'空',
            pickerValue:'picker组件的当前值',
            sexSelect:[
                {
                    values: ['男', '女'],
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
            if (this.popType === 'sex') {
                return this.sexSelect
            }
            else if(this.popType === 'city'){
                return this.citySelect
            }
        },
        cantNext(){
            return this.trueName&&this.sexIndex&&this.prov&&this.city&&this.avatar ? false : true
        }
    },
    methods:{
        next(){
            if (!Regex.nameRegExp(this.trueName)) {
                this.errorShow = '姓名为2-4位中文'
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
                    this.$router.push('registerInfo3')
                }else{
                    this.errorShow = '状态码不为200'
                }
            }).catch(()=>{
                this.errorShow = '发送失败(地区应该发送index值)'
            })
        },
        onValuesChange(picker, values){ //picker改变值时触发
            if (this.popType === 'sex') {
                this.pickerValue = values[0]
                if (values[0] === '男') {
                    this.sexIndex = 1
                }else{
                    this.sexIndex = 2
                }
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
        openMyPopSex(){
            this.popTitle = '性别'
            this.popType = "sex"
            this.$refs.mypop.myPopShow()
        },
        openMyPopCity(){
            this.popTitle = '地区'
            this.popType = "city"
            this.$refs.mypop.myPopShow()
        },
        getPopValue(){
            console.log(this.pickerValue)
            this.popValue = this.pickerValue.slice()
            if (this.popType === 'sex') {
                this.sex = this.popValue
            }
            else if(this.popType === 'city'){
                this.area = this.popValue
            }
        },
        sheetOpen(){
            this.sheetShow = true
        },
        judge(){ //一个判断是否样式的 没功能作用
            return this.$router.indexOf('3')>-1
        },
        setAvatar(e){
            // console.log(e.target.files[0])
            let regexp = new RegExp("(.jpg$)|(.png$)|(.bmp$)|(.jpeg$)","i");
            if(regexp.test(e.target.files[0].name)){
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);

                reader.onload = (event) => {
                    // console.log(event.target.result)
                    this.avatar = event.target.result
                };
            }else{
                Toast('格式不对');
            }
        }

    },
    created(){
        this.accountId = storage.get('user' ,'')
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

.avatar-container
    height:80px
.avatar
    width:50px
    height:50px
    border-radius:50%
    margin-right:50px
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