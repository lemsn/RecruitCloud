<template>
    <div class="industry">
        <div ref="bg" class="bg"></div>
        <transition name="slide-down">
            <div class="container3" v-show="show" @click="toggle">
                <div class="content" @click.stop>
                    <div v-for="(e,i) in industry" class="item">{{e}}</div>
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
            industry:["IT行业","IT行业","IT行业","IT行业","IT行业","IT行业","IT行业","IT行业","IT行业","IT行业","IT行业","IT行业"]
        }
    },
    methods:{
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
    overflow:auto
    background:#fff
    height:80%
.item
    padding:20px 10px
    bor-bottom-1px()
</style>