<template>
	<div class="jobOnline">
		<MyLine v-for="(e,i) in resumeData" :key="i" class="post-item flex-row-between" @click.native="">
            <div class="post-left">
                <p class="post-name">
                    {{e.postName}}
                </p>
                <p class="disc">
                    {{e.area}} | {{e.exp}} | {{e.edu}}
                </p>
            </div>
            <div class="post-right">
                <p class="salary">
                    {{e.salary}}
                </p>
                <p class="download">
                    <i class="iconfont icon-xiazai"></i>
                    下载
                </p>
            </div>
        </MyLine>
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
	                    postName:'岗位名字',
	                    postTime:'11:37',
	                    area:'上海 - 松江区',
	                    edu:'学历',
	                    exp:'1-3年',
	                    salary:'10-15k'
	                },
	                {
	                    a:'12人',
	                    b:'经理',
	                    c:'10-15k',
	                    d:'1-3年',
	                    e:'硕士',
	                    f:'2017.12.27',
	                    g:'2017.12.27',
	                    h:'已顶置'
	                },
	                {
	                    a:'12人',
	                    b:'经理',
	                    c:'10-15k',
	                    d:'1-3年',
	                    e:'硕士',
	                    f:'2017.12.27',
	                    g:'2017.12.27',
	                    h:'已顶置'
	                }
	            ]
	        }
	    },
	    components:{
	    	MyLine,
	    	MyMenuIcon
	    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>