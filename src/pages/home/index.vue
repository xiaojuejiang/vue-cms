<template >
  <div class="home-container">
    <mt-swipe :auto="1000" class="banner-swipe">
      <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
        <a href="javascript:;">
          <img :src="item.img">
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 9宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/newsList">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#/home/photoList">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
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
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      bannerList:[]
    };
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$http.get('api/getlunbo').then(result=>{
        if(result.body.status==0){
          this.bannerList=result.body.message
          for(var i=0;i<list.length/2;i++){
            this.bannerList[i]={
              img:list[i]
            }
          }
        }else{
          Toast('图片获取失败!')
        }
      })
    }
  }
};
</script>
<style lang='less' >
.home-container {
  .banner-swipe {
    height: 200px;
    background-color: pink;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .mui-grid-view{
    background-color: #fff;
    border: none;
    .mui-table-view-cell{
      border: none;
      img{
        width: 60px;
        height: 60px;
      }
      .mui-media-body{
        font-size: 13px;
      }
    }
  }
}
</style>
