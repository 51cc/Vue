<template>
  <div class="client-wraper" style="background: white;">

    <m-header title="代理加盟" fixed :leftShow='true' :rightShow='true'>
      <img v-on:click="back" class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/>
    </m-header>

    <div style="margin-top: 44px;">
      <img :src="icoUrl" style="width: 100%;height: 150px;background: red;">

      <div style="padding: 5px;">
        <input v-model="message" placeholder="为你的公司起一个响亮的名称" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div style="padding:5px;">
        <input v-model="message" placeholder="主营项目（比如网站建设）" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div style="padding:5px;">
        <input v-model="message" placeholder="简单介绍一下您的公司" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div style="padding:5px;">
        <input v-model="message" placeholder="您的姓名" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div style="padding:5px;">
        <input v-model="message" placeholder="您的手机号" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
      </div>

      <div v-on:click="submite" style="background:red;margin-left: 5%;width: 90%;height: 30px;line-height: 30px; text-align: center;color: #ffffff;">
        加入我们
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'

  export default {

    data(){
      return {
        icoUrl:require('../../assets/images/sys/m_dailijiameng.jpg'),
        message:''
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

      }
    }
  };
</script>
<style rel="stylesheet/stylus">
</style>
