<template>
    <div class="newsinfo">
        <h3 class="title">{{newInfo.title}}</h3>
        <p class="subtitle"><span>发表时间: {{newInfo.create_time |  dateFormat}} </span><span>点击次数:{{newInfo.remark}}次</span></p>
        <hr>
       <div class="content" v-html="newInfo.content"> </div>

<!-- 评论子组件 -->
<comment-box :id="this.id"> </comment-box>
    </div>
</template>

<script>

//导入评论子组件
import comment  from '../subcomponent/comment.vue'
import { Toast } from "mint-ui";

export default {
    data(){
        return {
            id:this.$route.params.id, //将url地址传过来的id值 放在data身上 方便调用
            newInfo:{},
        }
    },
    created(){
        this.getNewInfo();

    },
    methods:{
       getNewInfo(){
        console.log("进入查询新闻详情的方法"+this.id)
        this.$http.get('vue/getNewsInfo?id='+this.id).then(result=>{
        if (result.body.status == "1") {
          console.log("进来了");
          //如果没有失败数据保存到data
          this.newInfo = result.body.data;
        } else {
          Toast(result.body.message);
        }
        })
    } 
    },
    components:{
    'comment-box':comment,
  }
    
}
</script>

<style lang="scss">

.newsinfo{
    .title{
        padding: 0 4px;
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
       color: #226aff;
       font-size: 13px;
       display: flex;
       justify-content: space-between;
    }
    .content{
        font-size: 13px;

    }
}
</style>
