<template >
    <mycomment :id=id></mycomment>
</template>
<script >
import mycomment from "../../components/comment/"
  export default {
    data() {
      return {
        id:this.$route.params.id
      }
    },
    components:{
      mycomment
    }
  }
</script>
<style scoped >
</style>
