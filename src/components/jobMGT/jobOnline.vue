<template>
	<div class="jobOnline">
		<MyLine v-for="(e,i) in resumeData" :key="i" class="job-item flex-column-between" @click.native="goDetail">
			<div class="job-top flex-row-between">
				<div class="job-left flex-column-center">
					<p class="applyNum">{{e.jobApply}}</p>
					<p class="applyNum-disc">人申请</p>
				</div>
	            <div class="job-right flex-row-between">
	            	<div>
	            		<p class="job-name">
	                    {{e.jobName}}
		                </p>
		                <p class="disc">
		                    {{e.salary}} | {{e.exp}} | {{e.edu}}
		                </p>
		                <p class="disc2">
		                	{{e.jobTime}}
		                </p>
	            	</div>
	            	<div class="flex-column-between">
		                <mt-button class="my-button2" type="primary" plain size="small">智能推荐</mt-button>
		                <p class="job-state">
		                    ↑已置顶
		                </p>
	                </div>
	            </div>
            </div>
            <div class="job-bottom flex-row-between">
            	<p class="disc">下线时间：{{e.offlineTime}}</p>
            	<i class="more iconfont icon-gengduo" @click.stop="sheetOpen"></i>
            </div>
        </MyLine>
		<!-- 操作窗 -->
        <mt-actionsheet
            :actions="actions"
            v-model="sheetShow">
        </mt-actionsheet>
	</div>
</template>

<script>
import MyMenuIcon from 'components/myMenu/myMenuIcon'
import MyLine from 'components/base/myline'

	export default {
		data(){
	        return{
	            searchValue:'',
	            activeItem:0,
	            resumeData:[
	                {
	                	jobApply:'12',
	                    jobName:'岗位名字',
	                    jobTime:'2017.12.27',
	                    offlineTime:'2017.12.27',
	                    area:'上海 - 松江区',
	                    edu:'学历',
	                    exp:'1-3年',
	                    salary:'10-15k',
	                },
	                {
	                	jobApply:'12',
	                    jobName:'岗位名字',
	                    jobTime:'2017.12.27',
	                    offlineTime:'2017.12.27',
	                    area:'上海 - 松江区',
	                    edu:'学历',
	                    exp:'1-3年',
	                    salary:'10-15k',
	                },
	            ],
	            actions:[
	                {
	                    name:'置顶',
	                    method:()=>{
	                        console.log(1)
	                    }
	                },
	                {
	                    name:'编辑',
	                    method:()=>{
	                        console.log(1)
	                    }
	                },
	                {
	                    name:'刷新',
	                    method:()=>{
	                        location.reload()
	                    }
	                },
	                {
	                    name:'下线',
	                    method:()=>{
	                        console.log(1)
	                    }
	                }
                ],
                sheetShow:false
	        }
	    },
	    methods:{
			goDetail(){
				this.$router.push('jobDetail')
			},
	    	sheetOpen(){
	    		this.sheetShow = true
	    	}
	    },
	    components:{
	    	MyLine,
	    	MyMenuIcon
	    }
	}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"
.job-left
	text-align:center
.applyNum
	font-size:25px
	color:$blue
	margin-bottom:10px
.applyNum-disc
	font-size:12px
	color:$gray2
.job-name
	font-size:16px
	font-weight:bold
	margin-bottom:10px
.disc
	color:$gray2
	font-size:13px
.disc2
	color:$gray2
	font-size:12px
	margin-top:10px
.salary
	color:$orange
	font-weight:bold
	margin-bottom:10px
.download
	text-align:right
	font-size:12px
	color:$gray2
	extend-click()
	.iconfont
		font-size:12px
.job-top
	margin-bottom:25px
	bottomline()
.job-left
	padding-right:20px
	margin-right:20px
	rightline()
.job-right
	flex:1 1 auto
.job-state
	text-align:center
	color:$orange
	font-size:12px
</style>