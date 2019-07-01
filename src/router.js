
// 1. 导入 vue-router
import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shoppingCar from './components/tabbar/shoppingCar.vue'
import search from './components/tabbar/search.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [  //不要将 routes 写错为 routers
        // 配置路由规则
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shoppingCar',component:shoppingCar},
        {path:'/search',component:search},
        {path:'/',redirect:'/home'}
    ],
    linkActiveClass:'mui-active' //覆盖默认的 路由高亮类 默认的类叫 link-active

})

// 把路由对象暴露出去
export default router