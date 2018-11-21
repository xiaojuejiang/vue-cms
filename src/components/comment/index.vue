<template >
  <div class="comment-container">
    <h2>发表评论</h2>
    <hr>
    <textarea v-model="commentText" placeholder="请输入你想说的话" length='120'></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="(item, index) in comments" :key="index">
        <div class="comment-title">第{{index+1}}楼 用户:{{item.user_name}} 发表时间:{{item.add_time | dataFormat}}</div>
        <div class="comment-content">
          {{item.content.trim().length==0?'此用户很懒':item.content}}
        </div>
      </div>
    </div>
    <mt-button @click="getMore" type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script >
import { Toast } from "mint-ui";

export default {
  props: ["id"],
  data() {
    return {
      comments: [],
      pageindex: 1,
      commentText: ""
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status == 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("数据获取失败");
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getComment();
    },
    addComment() {
      if (this.commentText.trim().length == 0) return Toast("请填写完整");
      this.$http
        .post("api/postcomment/" + this.id, {
          content: this.commentText.trim()
        })
        .then(result => {
          if (result.body.status == 0) {
            let cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.commentText
            };
            this.comments.unshift(cmt)
            this.commentText=''
          }else{
            Toast('提交失败,请重试')
          }
        });
    }
  }
};
</script>
<style lang="less" >
.comment-container {
  h2 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    margin-bottom: 0px;
  }
  .comment-item {
    margin: 5px 0;
    .comment-title {
      font-size: 13px;
      background-color: #ccc;
    }
    .comment-content {
      font-size: 13px;
    }
  }
}
</style>
