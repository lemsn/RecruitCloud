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
            <mt-field label="真实姓名" placeholder="请输入您的真实姓名"></mt-field>
            <mt-field label="性别" @click.native="openMyPopSex" readonly placeholder="请选择性别" v-model="sex">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
            <mt-field label="所在地区" @click.native="openMyPopCity" readonly placeholder="请选择所在地区" v-model="city">
                <i class="mint-cell-allow-right"></i>
            </mt-field>
        </MyLine>

        <MyLine>
            <mt-button @click="next" class="my-button w100" :disabled="canNext" type="primary">下一步</mt-button>
        </MyLine>
        <!-- 下边弹窗 -->
        <MyPop ref="mypop" :popTitle="popTitle" @getPopValue="getPopValue">
            <mt-picker :slots="pickerSlot" @change="onValuesChange"></mt-picker>
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

export default{
    data(){
        return{
            avatar:require('../../assets/default-man.png'),
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
            sex:'',
            sexSelect:[
                {
                    values: ['男', '女'],
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
            if (this.popType === 'sex') {
                return this.sexSelect
            }
            else if(this.popType === 'city'){
                return this.citySelect
            }
        },
        canNext(){
            return false
        }
    },
    methods:{
        onValuesChange(picker, values){
            if (this.popType === 'sex') {
                this.pickerValue = values[0]
            }
            else if(this.popType === 'city'){
                this.pickerValue = values[0]+' '+values[1]
            }
        },
        next(){
            this.$router.push('registerInfo3')
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
            console.log('设定值')
            this.popValue = this.pickerValue.slice()
            if (this.popType === 'sex') {
                this.sex = this.popValue
            }
            else if(this.popType === 'city'){
                this.city = this.popValue
            }
        },
        sheetOpen(){
            this.sheetShow = true
        },
        judge(){
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