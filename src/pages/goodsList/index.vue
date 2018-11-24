<template >
  <div class="goodsList-container">
    <ul class="goods-list">
      <li class="goods-item" v-for="(item) in goodsList" :key="item.id" @tap='getGoods(item.id)'>
        <img :src="item.img_url">
        <h3>{{item.title}}</h3>
        <div class="info">
          <p class="price">
            <span class="new">&yen;{{item.sell_price}}</span>
            <span class="old">&yen;{{item.market_price}}</span>
          </p>
          <p class="goods-hot">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </li>

    </ul>
  </div>
</template>
<script >
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      goodsList:[]
    };
  },
  created(){
    this.getGoodsList()
  },
  methods:{
    getGoodsList(){
      this.$http.get('api/getgoods?pageindex=1').then(result=>{
        console.log(result)
        if(result.body.status===0){

          this.goodsList=result.body.message
        }else{
          Toast('加载失败')
        }
      })
    },
    getGoods(id){
      console.log('123')
      this.$router.push({
        name:'home/goodsInfo',params:{id:id}
      })
    }
  }
};
</script>
<style lang="less" >
.goodsList-container {
  .goods-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item {
      width: 49%;
      min-height: 293px;
      margin: 5px 0;
      padding: 4px;
      border: 1px solid #ccc;
      box-shadow: 0 0 9px #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      > h3 {
        font-size: 14px;
        font-weight: 700;
      }
      > img {
        width: 100%;
      }
      p{
        padding: 5px;
        margin: 0;
      }
      .price {
        .new {
          font-size: 18px;
          color: red;
          padding: 0 5px;
        }
        .old {
          text-decoration: line-through;
          padding-left: 10px;
        }
      }

      .info {
        background-color: #eee;
        .goods-hot {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>

