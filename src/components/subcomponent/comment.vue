<template>
    <div class="cmt-comment">
        <h3>发表评论</h3>
        <hr>
        <textarea name="comment" id="comment" cols="30" rows="6" placeholder="请输入要评论的内容最多120子" maxlength="120">


        </textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list" v-for="item in comments" :key="item.index">
            <div class="cmt-item">
                <div class="cmt-title">#{{item.id}}楼&nbsp;&nbsp;用户:{{item.author}} &nbsp;&nbsp; 发表时间:{{item.comment_time}}</div>
                <div class="cmt-body">
                    {{item.comment==''?'此用户很懒,什么都没留下':item.comment}}
                </div>
            </div>
           
        </div>

        <mt-button type="danger" size="large" @click="getMoreComments">加载更多</mt-button>
    </div>
</template>

<script>
import { maxHeaderSize, Toast } from 'mint-ui';

export default {
    data(){
        return {
            page:1,  //默认显示第一页 
            comments:[],
        }
    },
    props:['id'],
    created(){
        this.comments=[];
        this.getComments(this.page);
    },
    methods:{
        getComments(page){
        this.$http.get('vue/getNewsComments?id='+this.id+'&page='+page).then(result=>{
            if(result.body.status=='1'){
                console.log(result)
                // this.comments=result.body.data;
                this.comments=this.comments.concat(result.body.data);
            }
        })
        },
        getMoreComments(){
            this.page++;
            this.getComments(this.page);
        }
       
    }
    
}
</script>

<style lang="scss">
.cmt-comment{
    h3{
        font-size: 16px;
    }
    textarea{
        font-size: 15px;
        margin: 0;
        height: 80px;
    }
.cmt-list{
    margin :8px 0;
    .cmt-title{
        font-size: 13px;
        background-color: bisque;
        line-height: 30px;
    }
    .cmt-body{
       background-color: rgb(193, 247, 247);
       margin-top: 10px;
       font-size: 14px;
       text-indent: 2em;
    }
    }
}
</style>
