<template>
  <div class="newsList-container">
    <ul class="mui-table-view">
      <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsInfo/'+item.id">
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
let list=[
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2928403139,2163908082&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3544320516,1848639173&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3980292356,3797006540&fm=200&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2311100375,966273641&fm=200&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1850455861,3742372758&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=494569066,2782559823&fm=200&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4121682236,3921107638&fm=11&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1936213564,4009680884&fm=26&gp=0.jpg',
  'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2575571598,3372755324&fm=26&gp=0.jpg',
  'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3893649938,14345137&fm=26&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4216326329,1156398150&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4216326329,1156398150&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4216326329,1156398150&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4216326329,1156398150&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4216326329,1156398150&fm=200&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=494569066,2782559823&fm=200&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4121682236,3921107638&fm=11&gp=0.jpg',
  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=494569066,2782559823&fm=200&gp=0.jpg',
  'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4121682236,3921107638&fm=11&gp=0.jpg'
]
import { Toast } from "mint-ui";

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
          this.newsList = result.body.message;
          this.newsList.forEach((e,i) => {
              e.img_url=list[i]
          });
        } else {
          Toast("数据加载失败！");
        }
      });
    }
  }
};
</script>
<style lang='less' >
.newsList-container {
  .mui-table-view-cell {
    .mui-media-body {
      h3 {
        font-size: 13px;
      }
      p {
        font-size: 12px;
        color: skyblue;
      }
    }
  }
}
</style>
