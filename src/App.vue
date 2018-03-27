<template>
  <div id="app">
    <keep-alive>
      <router-view/>
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
.container2
  position:fixed
  top:40px
  bottom:0
  left:0
  right:0
.container3
  position:fixed
  top:91px
  bottom:0
  left:0
  right:0
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
