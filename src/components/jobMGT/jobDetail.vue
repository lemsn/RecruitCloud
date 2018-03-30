<template>
	<div class="jobdetail container2 bg-gray flex-column-center">
        <mt-header fixed title="职位详情">
            <div slot="left">
                <Back></Back>
            </div>
            <div slot="right">
	            <i class="iconfont icon-fenxiang"></i>
            </div>
        </mt-header>
        <div ref="topContent" class="jobdetail-top">
	        <div class="base-info flex-column-between">
	        	<div class="base-top flex-row-between">
		        	<p class="name">前端工程师</p>
		        	<p class="money">12-13k</p>
	        	</div>
	        	<div class="base-middle flex-row-between">
	        		<div>
		        		<p class="state"><i class="iconfont icon-dizhi"></i><span>上海</span></p>
		        		<p class="state"><i class="iconfont icon-gongzuoleixing"></i><span>全职</span></p>
		        		<p class="state"><i class="iconfont icon-xueli"></i><span>小学</span></p>
	        		</div>
	        		<p class="state updateTime">11:20</p>
	        	</div>
	        	<ul class="base-bottom">
	        		<li class="my-button2" type="primary" plain size="small">加班补贴</li>
	        		<li class="my-button2" type="primary" plain size="small">加班补贴</li>
	        		<li class="my-button2" type="primary" plain size="small">加班补贴</li>
	        		<li class="my-button2" type="primary" plain size="small">加班补贴</li>
	        		<li class="my-button2" type="primary" plain size="small">加班补贴</li>
	        		<li class="my-button2" type="primary" plain size="small">加班补贴</li>
	        	</ul>
	        </div>
	        <div class="info-container flex-row-between flex-align-center">
	        	<div class="flex-row-between flex-align-center">
		        	<img class="avatar" :src="avatar">
		        	<div class="flex-column-between">
		        		<p class="state company-name">上海公司上海公司上海公司</p>
		        		<p class="state disc">移动互联网 500-1000人 D轮以上</p>
		        	</div>
	        	</div>
	        	<i class="rightArrow iconfont icon-jiantouyou"></i>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">职位介绍</h2>
	        	<div class="info-content">
	        		<div class="state-box">
						<p class="state state-title"></i>岗位描述</p>
			        	<p class="dic-line">1、负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网</br>
							2、负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责互联网负责
			        	</p>
		        	</div>
	        	</div>
	        </div>
	        <div class="info-container">
	        	<h2 class="info-title">工作地点</h2>
	        	<div class="info-content">
	        		<div class="state-box">
						<p class="dic-line"><i class="iconfont icon-dizhi"></i>上海市虹口区188号国际大厦3楼</p>
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
	    <div class="bottom-button">
            <mt-button @click="editJob" class="my-button w100" type="primary">编辑职位</mt-button>
	    </div>
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
				avatar:'http://www.qq745.com/uploads/allimg/150325/011111C01-35.jpg',
			}
		},
		computed:{

		},
		methods:{
			editJob(){
				this.$router.push('editJob')
			}
		},
		mounted(){

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

.jobdetail
	font-size:13px
	color:#4b545e
.jobdetail-top
	overflow:auto
.avatar
	width:50px
	height:50px
	border-radius:2px
	padding:0!important
	border:1px solid #e9eef5
	&+div
		padding:0 10px
.base-info
	background:#fff
	padding:15px 15px 15px 10px
	border-bottom:1px solid #e9eef5
	.name
		font-size:16px
		margin-bottom:10px
		font-weight:bold
		color:#222
.updateTime
	color:$gray2
.base-middle
	padding:10px 0
	.iconfont
		color:$blue
.base-bottom
	padding:10px 0 0 0
.iconfont
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
	display:inline-block
	span
		margin-right:13px
.info-content
	padding:5px 10px
	overflow:hidden
.time-small
	font-size:12px
	color:#a2a7b1
	padding:0
.dic-line
	color:#969ba8
	padding-top:5px
	padding-bottom:0
	line-height:1.8
.money
	font-size:15px
	color:$orange
	font-weight:bold
.tel
	padding:0 5px
.orange
	color:$orange
.green
	color:#36cd84
.my-button2
	margin:0 5px 7px 0
.company-name
	padding-top:5px
	font-size:15px
	color:#222
	line-height:1.4
.disc
	font-size:12px
	color:$gray2
	padding:0
	padding-bottom:5px
</style>