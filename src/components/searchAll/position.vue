<template>
    <div class="position">
        <div ref="bg" class="bg"></div>
        <transition name="slide-down">
            <div class="container3" v-show="show" @click="toggle">
                <div class="content flex-row-center" @click.stop>
                    <div class="content-left">
                        <div class="prov" :class="{active:myChoose===i}" v-for="(e,i) in areaOrigin" @click="changePosition(i)">{{e.value}}</div>
                    </div>

                    <div class="content-right">
                        <div class="city" v-for="(e,i) in theCity">{{e.value}}</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { areaOrigin } from 'components/base/defaultData'

export default{
    data(){
        return{
            show:false,
            myChoose:0,
            areaOrigin:areaOrigin
        }
    },
    computed:{
        theCity(){
            return areaOrigin[this.myChoose].son
        }
    },
    methods:{
        changePosition(i){
            this.myChoose = i
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
    },
    created(){

    }
}
</script>

<style lang="stylus" scoped>
@import "~base/base.styl"

.bg
    display:none
    background:rgba(0,0,0,0.5)
    position:fixed
    top:82px
    bottom:0
    left:0
    right:0
.content
    overflow:hidden
    background:#fff
    height:80%
.content-left
    overflow:auto
    background:#f1f5f7
    .prov
        width:120px
        padding:15px
        text-align:center
        &.active
            background:#fff
            bor-bottom-1px()

.content-right
    overflow:auto
    flex:1 1 auto
    .city
        padding:15px
        text-align:center
        bor-bottom-1px()
</style>