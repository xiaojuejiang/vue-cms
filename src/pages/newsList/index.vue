<template>
  <div class="newsList-container">
    <ul class="mui-table-view">
      <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3 class='mui-ellipsis'>{{item.title}}</h3>
            <p>
              <span class="mui-pull-left">{{item.add_time | dataFormat}}</span>
              <span class="mui-pull-right">点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script >
import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status == 0) {
          this.newsList=result.body.message
        } else {
          Toast("数据加载失败！");
        }
      });
    }
  }
};
</script>
<style lang='less' >
.newsList-container{
  .mui-table-view-cell{
    .mui-media-body{
      h3{
        font-size: 13px;
      }
      p{
        font-size: 12px;
        color: skyblue;
      }
    }
  }
}
</style>
