<template>
  <div id="app">
    <keep-alive>
      <transition name="slide-move">
        <router-view/>
      </transition>
    </keep-alive>
    <keep-alive>
      <MyMenu></MyMenu>
    </keep-alive>
  </div>
</template>

<script>
import MyMenu from 'components/myMenu/myMenu'

export default {
  methods:{

  },
  components:{
    MyMenu
  }
}
</script>

<style lang="stylus">
@import "~base/reset.styl"
@import "~base/base.styl"
@import "~base/fonts/iconfont.css"


.container1
  position:fixed
  top:0
  bottom:0
  left:0
  right:0
  background:#fff
.container2
  position:fixed
  padding-top:40px
  top:0
  bottom:0
  left:0
  right:0
  background:#fff
.container3
  position:fixed
  padding-top:91px
  top:0
  bottom:0
  left:0
  right:0
  background:#fff
.mint-cell-text
  color: #232b38
.mint-cell:after
   content:""
   position: absolute
   left: 0
   bottom: 0
   width: 100%
   height: 1px
   background:#e9eef5
   transform: scaleY(0.5)
.mint-header
  font-size:16px

</style>
