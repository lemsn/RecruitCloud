<template>
    <div class="position">
        <div ref="bg" class="bg"></div>
        <transition name="slide-down">
            <div class="container3" v-show="show" @click="toggle">
                <div class="content flex-row-center" @click.stop>
                    <div class="content-left">
                        <div class="city" :class="{active:myChoose===i}" v-for="(e,i) in position" @click="changePosition(i)">{{e.city}}</div>
                    </div>

                    <div class="content-right">
                        <div class="county" v-for="(e,i) in theCounty">{{e}}</div>
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
            myChoose:0,
            position:[
                {
                    city:'北京',
                    county:[
                        '东城区','西城区'
                    ]
                },
                {
                    city:'上海',
                    county:[
                        '松江区','浦东区'
                    ]
                }
            ]
        }
    },
    computed:{
        theCounty(){
            return this.position[this.myChoose].county
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
.content-left
    background:#f1f5f7
    .city
        width:120px
        padding:15px
        text-align:center
        &.active
            background:#fff
            bor-bottom-1px()

.content-right
    flex:1 1 auto
    .county
        padding:15px
        text-align:center
        bor-bottom-1px()
</style>