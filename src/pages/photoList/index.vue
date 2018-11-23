<template >
  <div class="photoList-container">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a v-for="(item) in photoCate" href="javascript:;" :key="item.id" :class="{'mui-control-item':true, 'mui-active':item.id==0}" data-wid="tab-top-subpage-1.html" @click="getImages(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>
    </div>
    <!-- 懒加载 -->
    <ul class="lazy-container">
      <router-link tag="li" v-for="(item) in images" :key="item.id" :to="'/home/photoInfo/'+item.id">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script >
import mui from "../../lib/mui/js/mui.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      photoCate: [],
      images: []
    };
  },
  methods: {
    getPhotoCate() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status == 0) {
          result.body.message.unshift({ id: 0, title: "全部" });
          this.photoCate = result.body.message;
        } else {
          Toast("分类获取失败");
        }
      });
    },
    getImages(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        console.log(result);
        if (result.body.status == 0) {
          this.images = result.body.message;
        } else {
          Toast("图片加载失败");
        }
      });
    }
  },
  created() {
    this.getPhotoCate();
    this.getImages(0);
  },
  mounted() {
    mui("body").on("click", "a", function() {
      document.location.href = this.href;
    });
    console.log('mounted')
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>
<style lang="less" >
.photoList-container {
  .mui-slider {
    z-index: 0;
  }
  .mui-scroll {
    touch-action: pan-y;
  }
  .lazy-container {
    padding: 10px;
    > li {
      position: relative;
      margin-bottom: 10px;
      box-shadow: 0 0 9 black;
      image[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      img {
        width: 100%;
        max-height: 600px;
        background-color: pink;
        vertical-align: middle;
      }
      .info {
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        color: white;
        max-height: 100px;
        .info-title {
          font-size: 14px;
          font-weight: 700;
        }
        .info-body {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
