<template>
  <div class="client-wraper" style="background: white;">
    <m-header title="绑定手机" fixed :leftShow='true' :rightShow='true'>
      <img v-on:click="back" class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/>
    </m-header>

    <div style="margin-top: 44px;">

      <div style="padding: 10px;">
        <input v-model="message" placeholder="请输入姓名" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div style="padding: 10px;">
        <input v-model="message" placeholder="请输入手机号" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div v-on:click="submite" style="background: red;margin-left: 5%;width: 90%;height: 30px;line-height: 30px; text-align: center;color: #ffffff;">
        确定
      </div>

    </div>

  </div>

</template>
<script type="text/ecmascript-6">

  import header from '../header.vue'

  export default {
    data(){

      return {
        message:'',
      }
    },
    components:{
      'm-header':header
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
      submite:function () {
        alert('绑定成功')
      }
    }
  };
</script>
<style  rel="stylesheet/stylus">
</style>
