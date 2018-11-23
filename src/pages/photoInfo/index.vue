<template >
  <div class="photoInfo-container">
    <h2>{{photoInfo.title}}</h2>
    <p class="subtitle">
      <span>发表时间:{{photoInfo.add_time | dataFormat}}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </p>
    <hr>
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :key="index" :src="item.src" height="100" @click="$preview.open(index, list)">
    </div>
    <div class="content" v-html="photoInfo.content">
    </div>
    <comment :id="photoInfo.id"></comment>
  </div>
</template>
<script >
import comment from "../../components/comment/";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      subImageList: [
        {
          src: "https://placekitten.com/600/400",
          w: 600,
          h: 400
        },
        {
          src: "https://placekitten.com/1200/900",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getPhonoInfo();
    this.getImageList();
  },
  methods: {
    getPhonoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        console.log(result);
        if (result.body.status == 0) {
          this.photoInfo = result.body.message[0];
        }
      });
    },
    getImageList(){
      this.$http.get("api/getthumimages/"+this.id).then(result=>{
        console.log(result)
      })
    }
  },
  components: {
    comment
  }
};
</script>
<style lang="less" >
.photoInfo-container {
  padding: 5px;
  h2 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
