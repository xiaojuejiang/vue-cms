<template >
  <div class="shopcar-container">
    <div
      class="mui-card"
      v-for="(item, index) in goodsInfo"
      :key="index"
    >
      <div class="mui-card-content">
        <!-- 内容区 -->
        <mt-switch
          @change="handleChange(item.id)"
          :value="goodsSelect[item.id]"
        ></mt-switch>
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2928403139,2163908082&fm=200&gp=0.jpg"
          alt=""
        >
        <div class="goodsInfo">
          <h3>{{item.title}}</h3>
          <div>
            <span class="price">&yen;{{item.sell_price}}</span>
            <div class="mui-numbox">
              <input
                class="mui-btn mui-btn-numbox-minus"
                type="button"
                value="-"
                @tap="ducCount(item.id)"
              >
              <input
                class="mui-input-numbox"
                type="text"
                :value="goodsCount[item.id]"
                ref="num"
              >
              <input
                class="mui-btn mui-btn-numbox-plus"
                type="button"
                value="+"
                @tap="addCount(item.id)"
              >
            </div>
            <a href="#">删除</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card jiesuan">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品 <span class="red">{{goodsAmount.count}}</span> 件， 总价 <span class="red">￥{{getAmount}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
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
    ...mapMutations(["ducCount", "addCount", "handleChange"]),
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
          }
        });
    }
  },
  computed: {
    ...mapState(["car"]),
    ...mapGetters(["goodsCount", "goodsSelect", "goodsAmount"]),
    getAmount: function() {
      let amounts = 0;
      this.goodsInfo.some(item => {
        if (this.goodsAmount.amount[item.id]) {
          amounts += this.goodsAmount.amount[item.id] * item.sell_price;
        }
      });
      return amounts;
    }
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
        .price {
          color: red;
          font-weight: 700;
        }
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
