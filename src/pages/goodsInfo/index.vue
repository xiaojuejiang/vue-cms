<template >
  <div class="goodsInfo-container">
    <!-- 小球 -->
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
      <div class="ball" v-show="ballflag"></div>
    </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
      <!--内容区-->
      <myswiper :bannerList="bannerList" :isfull="false"></myswiper>
    </div>
    <!-- 商品名称 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">商品名称</div>
      <!--内容区-->
      <div class="mui-card-content">
        <p class="price">
          市场价:<span class="old">&yen;:{{goodsInfo.market_price}}</span>
          销售价:<span class="new">&yen;:{{goodsInfo.sell_price}}</span>
        </p>
        <div class="goods-items">
          购买数量:
          <div class="mui-numbox">
            <input :disabled="ducdisabled" class="mui-btn mui-btn-numbox-minus" type="button" value="-" @tap="ducNum">
            <input class="mui-input-numbox" type="text" v-model="num">
            <input :disabled="adddisabled" class="mui-btn mui-btn-numbox-plus" type="button" value="+" @tap="addNum">
          </div>
        </div>
        <p>
          <mt-button type='primary'>立即购买</mt-button>
          <mt-button type='danger' @click="addShopcar">加入购物车</mt-button>
        </p>
      </div>
    </div>

    <!-- 商品参数 -->
    <div class="mui-card">
      <!--页眉，放置标题-->
      <div class="mui-card-header">商品参数</div>
      <!--内容区-->
      <div class="mui-card-content">
        <p>商品货号:{{goodsInfo.goods_no}}</p>
        <p>库存情况:{{goodsInfo.stock_quantity}}件</p>
        <p>上架时间:{{goodsInfo.add_time | dataFormat}}</p>
      </div>
      <!--页脚，放置补充信息或支持的操作-->
      <div class="mui-card-footer">
        <mt-button type="primary" plain @click="toGoodsDetail">图文介绍</mt-button>
        <mt-button type="danger" plain @click="toGoodsComment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script >
import myswiper from "../../components/swiper/";

import {mapState,mapMutations} from 'vuex'

export default {
  data() {
    return {
      id:this.$route.params.id,
      num: 1,
      goodsInfo: {},
      ballflag: false,
      ducdisabled:false,
      adddisabled:false,
      bannerList: []
    };
  },
  created() {
    this.getGoodsInfo();
    this.getGoodsImg();
  },
  methods: {
    ...mapMutations(['addToCar']),
    getGoodsInfo() {
      this.$http
        .get("api/goods/getinfo/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.goodsInfo = result.body.message[0];
          }
        });
    },
    getGoodsImg() {
      this.$http
        .get("api/getthumimages/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.bannerList = result.body.message;
            this.bannerList.forEach(item => {
              item.img = item.src;
            });
          }
        });
    },
    ducNum() {
      if (this.num <= 1) return
      this.num--;
    },
    addNum() {
      if (this.num == this.goodsInfo.stock_quantity) return
      this.num++;
    },
    addShopcar() {
      this.ballflag = !this.ballflag;
      let goods={
        id:this.id,
        count:this.num,
        selected:true
      }
      this.addToCar(goods)
    },
    beforeEnter(el) {
      el.style.opacity='1';
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetTop
      //获取两点的位置
      const ball=el.getBoundingClientRect()
      const badge=document.getElementById('badge').getBoundingClientRect()
      // 获取位置差
      let dirX=badge.left-ball.left
      let dirY=badge.top-ball.top

      el.style.transform = `translate(${dirX}px,${dirY}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done()
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag;
    },
    toGoodsDetail(){
      this.$router.push({name:'home/goodsDetail',params:this.$route.params.id})
    },
    toGoodsComment(){
      this.$router.push({name:'home/goodsComment',params:this.$route.params.id})
    }
  },
  components: {
    myswiper
  },
  computed:{
    ...mapState(['car'])
  },
  watch:{
    num:function (newVal,oldVal) {
      if(newVal<=1){
        this.num=1;
        this.ducdisabled=true
      }else if(newVal>=this.goodsInfo.stock_quantity){
        this.num=this.goodsInfo.stock_quantity;
        this.adddisabled=true
      }else{
        this.ducdisabled=false
        this.adddisabled=false
      }
    }
  }
};
</script>
<style lang="less" >
.goodsInfo-container {
  .mui-card-content {
    padding: 15px;
    .price {
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 10px;
      color: #8f8f94;
      span {
        padding: 10px;
      }
      .old {
        text-decoration: line-through;
      }
      .new {
        font-size: 16px;
        color: red;
        font-weight: 700;
      }
    }
    .goods-items {
      color: #8f8f94;
      .mui-numbox {
        margin: 15px;
      }
    }
  }
  .ball {
    display: block;
    width: 15px;
    height: 15px;
    background-color: red;
    position: absolute;
    border-radius: 50%;
    z-index: 99;
    top: 375px;
    left: 156px;
  }
}
.mui-card-footer {
  display: block;
  button {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
