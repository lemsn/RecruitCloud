<template>
    <div class="condition">
        <div ref="bg" class="bg"></div>
        <transition name="slide-down">
            <div class="container3" v-show="show" @click="toggle">
                <div class="content" @click.stop>
                    <div class="content-scroll">
                        <div class="type-item"  v-for="(e,i) in condition" :key="i">
                            <p class="typeName">
                                {{e.type}}
                            </p>
                            <div class="choose-container">
                                <div class="choose-item"
                                    v-for="(k,j) in e.choose"
                                    :key="j"
                                    :class="{active:j === myChoose[i]}"
                                    @click="setChoose(i,j)"
                                >
                                    {{k}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-line flex-row-center">
                        <div class="reset" @click="resetChoose">
                            重置
                        </div>
                        <div class="confirm">
                            确认
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default{
    data(){
        return{
            show:false,
            myChoose:[0,0,0],
            condition:[
                {
                    type:"学历",
                    choose:["不限","专科及以下","大专","本科","硕士","博士及以上"]
                },
                {
                    type:"年龄",
                    choose:["不限","20岁及以下","20-25岁","25-30岁","30-35岁","35-40岁","40岁以上"]
                },
                {
                    type:"工作经验",
                    choose:["不限","应届毕业生","1-3年","3-5年","5-10年","10年以上"]
                }
            ]
        }
    },
    methods:{
        setChoose(i,j){
            this.$set(this.myChoose,i,j)
        },
        resetChoose(){
            this.myChoose = [0,0,0]
        },
        toggle(){
            if (this.show) {
                this._hide()
            }else{
                this._show()
            }
        },
        thisShow(){
            this.show = true
        },
        theHide(){
            this.show = false
        },
        _hide(){
            this.show = false
            setTimeout(()=>{
                this.$refs.bg.style.cssText = "display:none"
            },300)
        },
        _show(){
            this.show = true
            this.$refs.bg.style.cssText = "display:block"
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"
.bg
    display:none
    background:rgba(0,0,0,0.5)
    position:fixed
    top:91px
    bottom:0
    left:0
    right:0
.content
    background:#fff
    height:80%
    display:flex
    justify-content:center
    flex-direction:column
    .content-scroll
        flex:1 1 auto
        overflow:auto
        height:200px
.type-item
    padding:15px
.typeName
    font-weight:bold
.choose-container
    align-content:flex-start
.choose-item
    font-size:15px
    display:inline-block
    width:30%
    padding:10px 0
    text-align:center
    border:1px solid #cad2dc
    margin-top:15px
    margin-right:5%
    &:nth-child(3n)
        margin-right:0
    &.active
        border-color:$blue
        color:$blue
.button-line
    .reset,.confirm
        line-height:26px
        font-size:16px
        width:50%
        padding:10px
        text-align:center
.confirm
    background:$blue
    color:#fff
</style>