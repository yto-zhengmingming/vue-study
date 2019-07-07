#这是一个 新建的项目 

## 学习vue  git  等

### 要做一个有灵魂的程序员,哈哈哈

## LICENSE 是相关的开源协议

##用(传统方式)  把修改的代码上传到 github
1. git add .
2. git commit -m "提交信息"
3. git push

##制作首页 APP组件
1. 完成 Header 区域 使用的是 Mint-UI 中的 Header 组件
2. 制作底部的 Tabber 区域 使用的是 Mui的 Tabber.html
    +在制作购物车小图标的时候 操作: 扩展图标拷贝到 css样式 
    +拷贝 扩展字体库文件到 fonts 下 给购物车添加类 :mui-icon-extra mui-icon-extra-cart
3. 要在中间区域放一个 router-view 放组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 连接 展示对应的组件

## 制作首页轮播图

## 加载首页轮播图
1. 获取数据 ,如何获取数据 使用 vue-resource
2. 使用 vue-resource 的this.$http.get 获取数据
3. 获取到的数据 保存到data身上
4. 使用 v-for 循环渲染每个item项

## 改造新闻咨询路由连接
1.

##新闻资讯页面制作
1,绘制界面 使用 mui中的 madia-list.html
2,使用vue-resurce获取数据
3.渲染真是数据 

## 实现新闻资讯列表,点击跳转到 新闻详情
1. 把列表中的每一项改造为 rote-link 同时跳转时 应该提供唯一的 id表示符
2. 创建一个新闻详情的组件页面,newsinfo.vue
3. 在路由模块中 将新闻详情的路由地址和组件页面 对应起来

##实现新闻详情 页面布局 和数据渲染

##单独封装一个 comment.vue 评论子组件  
1. 创建一个 单独的模板vue
2. 在需要使用comment.vue的组件页面中 手动导入组件
3. 'import comment from './comment.vue''
3. 在父组件中 使用 components 实行 将刚才导入的 comment组件 注册为自己的子组件
4. 将注册子组件的 注册名称 以标签的形式 显示就行了

## 获取评论数据 显示到页面

##实现点击加载更多评论的功能
1. 为加载更多按钮,绑定点击事件,在事件中,请求下一页
2. 点击加载更多 让page++ 然后重新调用 请i去数据方法 获取最新一页的数据,
3. 为了防止 新数据覆盖老数据,我们在点击加载更多的时候 获取的新一页的数据的是追加到老的数据里 数组的 concat() 方法拼接


