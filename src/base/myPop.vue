<template>
    <div class="mypop">
        <div class="bg-container" v-show="bgShow" @click="myPopHide"></div>
        <transition name="slide-up">
            <div class="content-container" v-show="show">
                <div class="button-line flex-row-between">
                    <mt-button @click="myPopHide" size='small' style="width:70px;" type="primary" plain>取消</mt-button>
                    <span class="title">{{popTitle}}</span>
                    <mt-button @click="getPopValue" size='small' style="width:70px;" type="primary">确定</mt-button>
                </div>
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default{
    data(){
        return{
            show:false,
            bgShow:false,
            popValue:'没有值'
        }
    },
    props:{
        popTitle:{
            type:String,
            default:'默认标题'
        }
    },
    methods:{
        getPopValue(){
            this.$emit('getPopValue',this.popValue)
            this._hide()
        },
        myPopShow(){
            this.show = true
            this.bgShow = true
        },
        myPopHide(){
            this._hide()
        },
        _hide(){
            this.show = false
            setTimeout(()=>{
                this.bgShow = false
            },150)
        }
    }
}
</script>

<style lang="stylus" scoped>
.bg-container
    position:fixed
    top:0
    bottom:0
    left:0
    right:0
    background:#000
    opacity:0.5
    z-index:9000
.content-container
    position:fixed
    height:292px
    bottom:0
    left:0
    right:0
    background:#fff
    z-index:9500
.button-line
    padding:15px
    font-size:0
    border-bottom: solid 1px #eaeaea;
.botton
    display: inline-block;
    width: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #26a2ff;
    font-size:16px
.title
    font-size:18px
    line-height:33px
</style>