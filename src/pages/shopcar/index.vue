<template >
  <div class="shopcar-container">
    <div class="mui-card" v-for="(item, index) in goodsInfo" :key="index">
      <div class="mui-card-content">
        <!-- 内容区 -->
        <mt-switch></mt-switch>
        <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2928403139,2163908082&fm=200&gp=0.jpg" alt="">
        <div class="goodsInfo">
          <h3>{{item.title}}</h3>
          <div>
            <span class="price">&yen;{{item.sell_price}}</span>
            <div class="mui-numbox">
              <input disabled="ducdisabled" class="mui-btn mui-btn-numbox-minus" type="button" value="-" @tap="ducNum">
              <input class="mui-input-numbox" type="text" v-model="item.count">
              <input disabled="adddisabled" class="mui-btn mui-btn-numbox-plus" type="button" value="+" @tap="addNum">
            </div>
            <a href="#">删除</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">内容区</div>
    </div>
  </div>
</template>
<script >
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      goodsInfo: []
    };
  },
  created() {
    this.getShopCar();
  },
  methods: {
    getShopCar() {
      var idList = [];
      this.car.forEach(item => {
        idList.push(item.id);
      });
      this.$http
        .get("api/goods/getshopcarlist/" + idList.join(","))
        .then(result => {
          if (result.body.status === 0) {
            this.goodsInfo = result.body.message;
            this.goodsInfo.forEach((item, i) => {
              item.selected = this.car[i].selected;
              item.count=this.car[i].count
            });
          }
        });
    },
    ducNum() {

    },
    addNum() {

    }
  },
  computed: {
    ...mapState(["car"])
  }
};
</script>
<style lang="less" >
.shopcar-container {
  .mui-card {
    .mui-card-content {
      padding: 15px;
      display: flex;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
      }
      .goodsInfo {
        flex: 1;
        padding: 5px;
        h3 {
          font-size: 13px;
          font-weight: 700;
        }
        .price{
          color: red;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
