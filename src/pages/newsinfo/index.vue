<template >
	<div class="newsinfo-container">
		<h2 class="title">{{newsInfo.title}}</h2>
    <p class="subtitle mui-clearfix">
      <span class="mui-pull-left">发表时间:{{newsInfo.add_time | dataFormat}}</span>
      <span class="mui-pull-right">点击:{{newsInfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html='newsInfo.content'></div>
    <comment :id="id"></comment>
	</div>
</template>
<script >
  import {Toast} from 'mint-ui'
  import comment from '../../components/comment/'
  export default {
    data() {
      return {
        newsInfo:[],
        id:this.$route.params.id
      }
    },
    created(){
      this.getNewsInfo()
    },
    methods:{
      getNewsInfo(){
        this.$http.get('api/getnew/'+this.id).then(result=>{
          if(result.body.status==0){
            this.newsInfo=result.body.message[0]
          }else{
            Toast('数据获取失败')
          }
        })
      }
    },
    components:{
      comment
    }
  }
</script>
<style lang="less" >
  .newsinfo-container{
    padding: 0 10px;
    .title{
      font-size: 14px;
      color: #26a2ff;
      text-align: center;
      margin: 15px 0;
      font-weight: 700;
    }
    .subtitle{
      font-size: 13px;
      color: #26a2ff;
      padding: 0 5px;
    }
    .content{
      img{
        width: 100%;
      }
    }
  }
</style>
