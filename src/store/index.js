import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// process.env.NODE_ENV在npm run dev时为dev
// process.env.NODE_ENV在npm run build时为production
// 线上环境时候debug为false 不开启严格模式
const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)

const state = {
    menuState:false
}
const mutations = {
    close(state,menuState){
        state.menuState = menuState
    },
    open(state,menuState){
        state.menuState = menuState
    }
}
const actions = {}
const getters = {
    menuState: state =>{
        return state.menuState
    }
}

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    strict:debug, //是否开启严格模式 生产环境时候开 检测state修改是否来源于mutation
    plugins:debug? [createLogger()] : []
})