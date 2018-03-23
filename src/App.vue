<template>
  <div id="app">
    <p class="menu" @click="showMenu">菜单</p>
    <Menu ref='menu'></Menu>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import Menu from 'components/menu/menu'
export default {
  methods:{
    showMenu(){
      this.$refs.menu._showToggle()
    }
  },
  components:{
    Menu
  }
}
</script>
<style lang="stylus">
@import "~assets/reset.styl"
@import "~assets/base.styl"
@import "~assets/fonts/iconfont.css"

.menu
  display:none
  position:fixed
  z-index:10
  top:0
  bottom:0
  left:0
  right:0
.container
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
.mint-cell-text
  color: #232b38
.mint-cell:after {
   content:""
   position: absolute
   left: 0
   bottom: 0
   width: 100%
   height: 1px
   background:#e9eef5
   transform: scaleY(0.5)
}
.mint-header
  font-size:16px

</style>
