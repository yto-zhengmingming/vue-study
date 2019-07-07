<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslists" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <!-- +item.id-->
          <img class="mui-media-object mui-pull-left" :src="item.imgUrl" />
          <div class="mui-media-body">
            {{item.title}}
            <p class="mui-ellipsis">
              <span>发表时间: {{item.createTime | dateFormat}}</span>
              <span>点击次数:{{item.remark}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslists: [
        //新闻列表
        // {
        //   id: "1",
        //   createTime: "2019-05-06",
        //   imgUrl: "https://avatars2.githubusercontent.com/u/39689643?s=40&v=4",
        //   title: "今天是星期三",
        //   remark: "你好"
        // }
      ]
    };
  },
  created() {
    this.getnewslist();
  },
  methods: {
    getnewslist() {
      Toast("开始获取新闻列表");
      this.$http.get("vue/getNewsList").then(result => {
        console.log(result);
        console.log("test: " + (result.body.status == "1"));
        if (result.body.status == "1") {
          console.log("进来了");
          //如果没有失败数据保存到data
          this.newslists = result.body.data;
        } else {
          Toast(result.body.message);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: cadetblue;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
