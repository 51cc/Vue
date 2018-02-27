<template>
  <div style="background: white;">
    <m-header title="关于我们" fixed :leftShow='true' :rightShow='true'>
      <img v-on:click="back" class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/>
    </m-header>
    <div style="margin-top: 44px;">
      关于我们
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'
  export default {
    components:{
      'm-header':header
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
    }
  };
</script>
<style  rel="stylesheet/stylus">
</style>
