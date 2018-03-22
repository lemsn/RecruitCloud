<template>
  <div id="app">
    <p @click="showMenu">菜单</p>
    app.vue页面
    <Menu ref='menu'></Menu>
    <router-view/>
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

.container
  position:fixed
  top:0
  bottom:0
  left:0
  right:0

</style>
