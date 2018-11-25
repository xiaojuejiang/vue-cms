<template >
  <div class="goodsDetail">
    <h3>{{goodsDetail.title}}</h3>
    <hr>
    <div class="goodsDetail-container" v-html="goodsDetail.content">
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      goodsDetail: {}
    };
  },
  created() {
    this.getGoodsDetail();
  },
  methods: {
    getGoodsDetail() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.goodsDetail = result.body.message[0];
          }
        });
    }
  }
};
</script>
<style lang="less" >
.goodsDetail {
  padding: 5px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
    font-weight: 700;
  }
  .goodsDetail-container{
    img{
      width: 100%;
    }
  }
}
</style>
