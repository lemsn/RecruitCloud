import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 组件异步加载
// const Recommend = (resolve)=>{
//     import('components/recommend/recommend').then((module)=>{
//         resolve(module)
//     })
// }

export default new Router({
  routes: [
    // {
    //   path: '*',
    //   component: a
    // }
  ]
})

