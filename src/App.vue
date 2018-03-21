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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
