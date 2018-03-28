<template>
	<div class="personaldetail container2">
        <mt-header fixed title="">
            <div slot="left">
                <MyMenuIcon></MyMenuIcon>
            </div>
        </mt-header>
        <div class="base-info flex-row-between">
        	<div class="base-left">
	        	<p class="name">何先生</p>
	        	<p class="sex">男</p>
	        	<p class="updateTime">2017.03.02</p>
        	</div>
        	<div class="base-right">
        		<img class="avatar" :src="avatar">
        	</div>
        </div>
        <div class="personal-info">
        	<p class="state"><i class="iconfont icon-qiuzhiyixiang"></i>目前正在找工作</p>
        	<p class="state"><i class="iconfont icon-dianhua"></i>11111111111</p>
        	<p class="state"><i class="iconfont icon-youjian"></i>11111@qq.com</p>
        </div>
    </div>
</template>

<script>
import MyMenuIcon from 'components/myMenu/myMenuIcon'
	export default {
		data() {
			return {
				avatar:'http://www.qq745.com/uploads/allimg/150325/011111C01-35.jpg',
			}
		},
		components:{
			MyMenuIcon
		}
	}
</script>

<style lang="stylus" scoped>

.base-info
	padding:5px 15px 15px 10px
	color:#fff
	background:url('../../assets/resume-bg.png') no-repeat center/100%
	.name
		font-weight:bold
	.sex,.updateTime
		font-size:12px
		margin-top:10px
.iconfont
	font-size:12px
	color:#a4afbd
	margin-right:5px
.personal-info
	padding:10px
	& *
		padding:10px 0
		font-size:12px
.avatar
	width:50px
	height:50px
	border-radius:2px

</style>