<template>
  <div class="app-container">

    <!-- 头部 -->
    <!-- <mt-header fixed title="vue cms">
    </mt-header> -->
    <mt-header fixed title="vue cms">
      <span slot="left" @click="goBack" v-show="$route.path!='/home'">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{goodsAll}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

    <!-- 中间区域 -->
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import mui from "./lib/mui/js/mui.js";
import { mapGetters } from "vuex";
export default {
  mounted() {
    mui("body").on("click", "a", function() {
      document.location.href = this.href;
    });
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(["goodsAll"])
  }
};
</script>

<style lang='less'>
.app-container {
  padding: 40px 0 50px;
  overflow-x: hidden;
  background-color: #fff;
  .v-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .v-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.6s ease;
  }
  .v-leave-active {
    position: absolute;
  }
}
</style>
