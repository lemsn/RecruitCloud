<template>
	<div class="personaldetail container2 bg-gray flex-column-center">
        <mt-header fixed title="">
            <div slot="left">
                <Back></Back>
            </div>
            <div slot="right" class="person-dic" v-show="dicShow">
                21岁 | 男 | 本科 | 1年
            </div>
        </mt-header>
        <div ref="topContent" class="personaldetail-top">
	        <div class="base-info flex-row-between">
	        	<div class="base-left">
		        	<p class="name">何先生</p>
		        	<p class="dic">21岁 | 男 | 本科 | 1年</p>
		        	<p class="updateTime">2017.03.02</p>
	        	</div>
	        	<div class="base-right">
	        		<img class="avatar" :src="avatar">
	        	</div>
	        </div>
	        <div class="info-container">
	        	<p class="state"><i class="iconfont icon-qiuzhiyixiang"></i>目前正在找工作</p>
	        	<p class="state"><i class="iconfont icon-dianhua"></i>11111111111</p>
	        	<p class="state"><i class="iconfont icon-youjian"></i>11111@qq.com</p>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">求职意向</h2>
				<p class="state"><i class="iconfont icon-dizhi"></i><span>期望地点</span>上海 - 徐汇区</p>
	        	<p class="state"><i class="iconfont icon-gongzuoleixing"></i><span>工作类型</span>全职</p>
	        	<p class="state"><i class="iconfont icon-xinzi"></i><span>期望薪资</span>8-9k</p>
	        	<p class="state"><i class="iconfont icon-hangye"></i><span>期望行业</span>互联网</p>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">工作经历</h2>
	        	<div class="info-content">
	        		<div class="state-box">
						<p class="state state-title" :class="{active:1===1}"></i><span>中移动有限公司</span>运营经理</p>
			        	<p class="time-small">2013.2-2018.5</p>
			        	<p class="dic-line"><span>1、</span>负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联</p>
			        	<p class="dic-line"><span>2、</span>负责互联网负责互联网负责互联网负责互联</p>
		        	</div>
		        	<div class="state-box">
						<p class="state state-title" :class="{active:1===1}"></i><span>中移动有限公司</span>运营经理</p>
			        	<p class="time-small">2013.2-2018.5</p>
			        	<p class="dic-line"><span>1、</span>负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联</p>
			        	<p class="dic-line"><span>2、</span>负责互联网负责互联网负责互联网负责互联</p>
		        	</div>
	        	</div>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">项目经验</h2>
	        	<div class="info-content">
	        		<div class="state-box">
						<p class="state state-title" :class="{active:1===1}"></i><span>蜗牛职息</span>设计师</p>
			        	<p class="time-small">2013.2-2018.5</p>
			        	<p class="dic-line"><span>1、</span>负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联</p>
			        	<p class="dic-line"><span>2、</span>负责互联网负责互联网负责互联网负责互联</p>
		        	</div>
		        	<div class="state-box">
						<p class="state state-title" :class="{active:1===1}"></i><span>中移动有限公司</span>运营经理</p>
			        	<p class="time-small">2013.2-2018.5</p>
			        	<p class="dic-line">1、负责互联网负责互联网负责互联网负责互联网负责互</br>
			        	2、负责互联网负责互联网负责互联网负责互联网负责互
			        	</p>
		        	</div>
	        	</div>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">教育背景</h2>
	        	<div class="info-content">
	        		<div class="state-box">
						<p class="state state-title" :class="{active:1===1}"></i>中国美术学院</p>
			        	<p class="time-small">2013.2-2018.5</p>
			        	<p class="dic-line">1、负责互联网负责互联网负责互联网负责互联网负责互</br>
			        	2、负责互联网负责互联网负责互联网负责互联网负责互
			        	</p>
		        	</div>
	        	</div>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">我的优势</h2>
	        	<div class="info-content">
	        		<div class="state-box">
			        	<p class="dic-line">我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势我的优势</p>
		        	</div>
	        	</div>
	        </div>
	    </div>
	    <div class="personaldetail-bottom">
            <mt-button @click="downloadResume" class="downloadResume my-button w100" type="primary">下载简历</mt-button>
	    </div>

		<!-- 消息弹窗 -->
	    <MyMessageBox ref="myMessageBox" :messageBoxTitle="messageTxt">
	    	<!-- 支付验证码 type===1 -->
	    	<div class="pay" v-show="messageBoxType===1">
	    		<p class="messagetxt">
	    			本次将扣：<span class="money">10元</span>
	    		</p>
	    		<p class="messagetxt mgbt10">
	    			验证码已发送至<span class="tel">18888888888</span>手机，请注意查收
	    		</p>
	    		<el-row type="flex" justify="space-between">
	                <el-col :span="15">
	                    <el-input v-model="verification" placeholder="请输入手机验证码"></el-input>
	                </el-col>
	                <el-col :span="8" :offset="1">
	                    <mt-button @click="sendCode" class="my-button w100 mgtop0 font14" :disabled="cantSend" type="primary">{{sendDis}}</mt-button>
	                </el-col>
	            </el-row>
	            <p class="error">{{errorShow}}</p>
	            <mt-button @click="next" class="my-button w100 mgtop0" :disabled="cantNext" type="primary">确认支付</mt-button>
            </div>
            <!--  余额不足 type===2 -->
            <div class="pay" v-show="messageBoxType===2">
	    		<p class="messagetxt messagetxt-sp mgbt10">
	    			<i class="orange iconfont icon-xinzi"></i>当前余额：<span class="money">￥10</span>
	    		</p>
	    		<mt-button @click="contact" class="my-button w100 mgtop0" type="primary">联系客服充值</mt-button>
            </div>
            <!-- 支付成功 type===3 -->
            <div class="pay" v-show="messageBoxType===3">
	    		<p class="messagetxt txt-center">
	    			<i class="green iconfont icon-dagou"></i>您已支付成功
	    		</p>
	    		<p class="messagetxt txt-center mgbt10">
	    			等待3秒后自动跳转候选人资料
	    		</p>
	    		<mt-button @click="refresh" class="my-button w100 mgtop0" type="primary">立即跳转</mt-button>
            </div>
	    </MyMessageBox>
	</div>
</template>

<script>
import MyMenuIcon from 'components/myMenu/myMenuIcon'
import MyMessageBox from 'components/base/myMessageBox'
import Regex from 'base/regex'
import Back from 'components/base/back'

	export default {
		data() {
			return {
				power:true,//是否有权限看联系方式
				messageBoxType:2,
				messageTxt:'支付验证码',
				errorShow:'',
            	cantSend:false,
            	sendDis:'发送验证码',
				verification:'',
				verificationTrue:'',
				scrollTop:'',
				avatar:'http://www.qq745.com/uploads/allimg/150325/011111C01-35.jpg',
			}
		},
		computed:{
			dicShow(){
				return this.scrollTop > 0 ? true :false
			},
			cantNext(){
	            return this.verification ? false : true
	        }
		},
		methods:{
			next(){
				console.log('下一步')
			},
			refresh(){
				console.log('刷新')
			},
			contact(){
				console.log('联系客服')
			},
			downloadResume(){
				// 先判断余额 然后确定弹出哪个
				// if('余额足够'){
				// 	this.messageBoxType = 1
				// 	this.messageTxt = '支付验证码'
				// }else if('余额不足'){
				// 	this.messageBoxType = 2
				// 	this.messageTxt = '余额不足'
				// }
				this.$refs.myMessageBox.myMessageBoxShow()
			},
			sendCode(){
	            if (!Regex.telRegExp(this.telNumber)) {
	                this.errorShow = '请输入正确的手机号'
	                return
	            }
	            this.errorShow = ''
	            this.cantSend = true
	            this.sendDis = this.time + 's'
	            this._countTime()
	            this.$ajax({
	                method:'post',
	                url:'login/sendSms',
	                params:{
	                    phone:this.telNumber
	                }
	            }).then((res)=>{
	                if (res.data.code === 200) {
	                    console.log(res.data)
	                    this.verificationTrue = res.data.data
	                }else{
	                    this.errorShow = '2分钟内勿重复发送'
	                }
	            })
	        },
	        _countTime(){
	            let timer = setInterval(()=>{
	                this.time--
	                this.sendDis = this.time + 's'
	                if (this.time === 0) {
	                    clearInterval(timer)
	                    this.sendDis = '重新发送'
	                    this.cantSend = false
	                    this.time = 120
	                };
	            },1000)
	        }
		},
		mounted(){
			this.$refs.topContent.addEventListener('scroll',()=>{
				this.scrollTop = this.$refs.topContent.scrollTop
			})
		},
		components:{
			MyMenuIcon,
			MyMessageBox,
			Back
		}
	}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"

.personaldetail
	font-size:13px
	color:#4b545e
.personaldetail-top
	overflow:auto
.personaldetail-bottom
	padding:10px
	height:auto
.person-dic
	font-size:12px
.avatar
	width:50px
	height:50px
	border-radius:2px
.base-info
	padding:5px 15px 15px 10px
	color:#fff
	background:url('../../assets/resume-bg.png') no-repeat center/100%
	.name
		font-weight:bold
	.dic,.updateTime
		margin-top:10px
.iconfont
	color:#a4afbd
	margin-right:7px
.info-container
	padding:5px 10px
	background:#fff
	margin-bottom:10px
	& *
		padding:10px 0
		font-size:13px
.state-title
	font-size:15px
	position:relative
	&:before
		content: ''
		display:block
		position: absolute
		left: -11px
		bottom: 16px
		width: 5px
		height: 5px
		background:#eff2f8
	&.active:before
		background:$blue
	span
		font-size:15px
.state
	span
		margin-right:13px
.info-content
	padding:5px 10px
	overflow:hidden
	position:relative
	&:before
		content: ''
		display:block
		position: absolute
		left: 1px
		top: 25px
		width: 1px
		height: 100%
		background:#eff2f8
.time-small
	font-size:12px
	color:#a2a7b1
	padding:0
.dic-line
	color:#969ba8
	padding-top:5px
	padding-bottom:0
	line-height:1.8
.state-box
	padding:5px 0
.downloadResume
	margin-top:0
.messagetxt
	font-size:14px
	line-height:1.6
.money
	color:$orange
	font-weight:bold
.tel
	padding:0 5px
.orange
	color:$orange
.green
	color:#36cd84
.messagetxt-sp
	padding:7px 10px
	border:1px solid #e9eef5
</style>