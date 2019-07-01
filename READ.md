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