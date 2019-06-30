//由于webpack 是 基于Node构建的 所有的webpack 配置文件中的 任何合法的Node代码都是支持的
var path = require('path')

// 插件功能 根据指定的模板页面，生成一份内存中的首页 同时自动把打包好的bundle注入到页面底部
// 如果要配置插件 需要在导出的对象中 挂载一个 plugins 节点
var htmlWebpacjplugin = require('html-webpack-plugin')

// 参考官方文档 https://vue-loader.vuejs.org/migrating.html#a-plugin-is-now-required
// . Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,

const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 当以命令行 运行 webpack 或者 webpack-dev-server 的时候 工具会发现 我们并没有提供要打包的文件
// 的入口和出口 文件 此时他会检查项目的根目录中的配置文件 并读取这个文件
// 就拿到了导出的这个配置对象 然后根据这个对象 进行打包构建
module.exports={
    entry: path.join(__dirname,'./src/main.js'),//入口文件
    output: { //指定输出选项
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js' //指定输出文件的名称
    },
    plugins: [ //所有webpack 插件的配置节点 
        new htmlWebpacjplugin({
            template: path.join(__dirname,'./src/index.html'),//指定模板文件目录
            filename:'index.html' //设置生成的内存页面名称 
        }),
         // make sure to include the plugin for the magic
         new VueLoaderPlugin()
    ],
    module:{ // 配置所有第三方 loader 模块的规则的
        rules:[
            {test: /\.css$/,use:['style-loader','css-loader']}, //处理css
            {test: /\.less$/, use:['style-loader','css-loader','less-loader']}, //处理less
            {test: /\.scss$/, use:['style-loader','css-loader','sass-loader']}, //处理scss
            {test: /\.(jpg|png|bmp|jepg|gif)$/, use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]'}, //处理图片路径的 loader
            {test: /\.(ttf|woff|woff2|eot|svg)$/, use: 'url-loader'}, //处理字体文件的loader
            // limit 给定的值 是图片的大小 单位是byte 如果我们引用的图片 大于或定于 给定的limit 不会被转为base64
            // 格式的字符串 ,如果图片小于给定的limit值 则会转为 base64字符串 图片名字会被哈希 防止重名
            // &name=[name].[ext] 保留原来的图片名称
            {test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ },//这是配置 babel来转换高级的es语法
            {test:/\.vue$/, use: 'vue-loader'} //处理.vue的loader
        ]
    },
    resolve:{
        // alias:{ //修改vue导入的时候的 包的默认路径
        //     "vue$":"vue/dist/vue.js"
        // }
    }
}
 //这样可以达到的目的 原来 打包需要在命令行输入：webpack  --mode development .\src\main.js -o .\dist
// 现在只需要输出 webpack --mode development