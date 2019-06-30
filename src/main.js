//入口文件

console.log("ok123")

import Vue from 'vue'

// 导入 App 根组件
import app from './app.vue'

// 按需导入 Mint-ui组件
import {Header} from 'mint-ui'

Vue.component(Header.name,Header)

// 导入 mui的样式
import './lib/mui/css/mui.min.css'




var vm = new Vue({
    el:'#app',
    render:c=> c(app)
})