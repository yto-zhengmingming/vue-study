<template>
  <div>
    <h3>首页</h3>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in lunbolist" :key="index">
          <span>{{item.img}}</span>
      </mt-swipe-item>

    </mt-swipe>
<!-- 九宫格到 6宫格改造 -->
    <div>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		        </ul> 

    </div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            lunbolist:[
                {img:"111111111111111111111111111111111111111111111111111111111111111111111111"},
                {img:"222222222222222222222222222222222222222222222222222222222222222222222222"}
            ]
        }
    },
    methods:{ 
        getLunbotu(){ //获取轮播图数据
            console.log("进入调用接口方法"+new Date())
            try {
            //     this.$http.get('api/getlunbo').then(result=>{
            //     console.log(result.body)
            //     if(result.body.status==0){
            //         this.lunbolist = result
            //     }else{
            //         conlose.log("失败")
            //         Toast('加载轮播图失败')
            //     }
            // })
            } catch (error) {
                 conlose.log("失败")
                Toast('加载轮播图失败')
            }
            
        }

    },
    created(){
        this.getLunbotu();
    }
};
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    // .mint-swipe-item:nth-child(1){  每个不一样写法1,交集选择器
    //     background-color: aquamarine;
    // }
    .mint-swipe-item{  //每个不一样写法2
       &:nth-child(1){
           background-color: green;
       }
       &:nth-child(2){
           background-color: rgb(15, 122, 184);
       }
       &:nth-child(3){
           background-color: rgb(103, 167, 204);
       }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: 0px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none
}
 
</style>
