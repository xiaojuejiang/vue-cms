<template >
  <mt-swipe :auto="1000" class="banner-swipe">
    <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
      <a href="javascript:;">
        <img :src="item.img" :class="{full:isfull}">
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>
<script >
export default {
  props: ["bannerList","isfull"]
};
</script>
<style lang="less" >
.banner-swipe {
  height: 200px;
  background-color: pink;
  img {
    height: 100%;
  }
  .full{
    width: 100%;
  }
}
</style>
