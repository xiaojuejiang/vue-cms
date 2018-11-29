<template >
  <div class="mui-numbox">
    <input
      class="mui-btn mui-btn-numbox-minus"
      type="button"
      value="-"
    >
    <input
      class="mui-input-numbox"
      type="text"
      :value="num"
      ref="num"
    >
    <input
      class="mui-btn mui-btn-numbox-plus"
      type="button"
      value="+"
    >
  </div>
</template>
<script >
export default {
  data() {
    return {
      num:''
    };
  }
};
</script>
<style scoped >
</style>
