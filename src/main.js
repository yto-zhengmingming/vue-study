//入口文件

console.log("ok123")

import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 导入时间插件
import moment from 'moment'

// 定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    console.log(dataStr)
    return moment(dataStr).format(pattern);
})

//2.1 导入vue-reource
import VueRousource from 'vue-resource'

//加载vue-resource
Vue.use(VueRousource)

//1.3导入自己的router.js 路由模块
import router from './router.js'

// 解决跨域
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true
// // 设置请求根路径
Vue.http.options.root='http://127.0.0.1:8082/passBook';

// 导入 App 根组件
import app from './app.vue'

// 按需导入 Mint-ui组件
import {Header,Swipe, SwipeItem, Button} from 'mint-ui'

Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入 mui的样式
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'


var vm = new Vue({
    el:'#app',
    render:c=> c(app),
    "router":router, //1.4挂在路由对象到 VM身上

})