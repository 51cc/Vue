<template>
  <div style="background: #f5f5f5;">
    <m-header title="优惠券" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div class="yhq-wraper">
      <div v-for="(item,index) in dataAy" class="yhq-item">
        <img :src="item.url" class="img-item">
        <div class="yhq-left">
          <span>¥100</span>
        </div>


        <div class="yhq-middle" @click="jumptodetail(index)">
          <span style="margin-top: 10px; padding:5px;background: #ff4545;color: #ffffff;font-size: 12px;">满20减30</span>
          <span style="margin-top: 5px;display: block;color: #444444;font-size: 12px;">全场通用</span>
          <span style="margin-top: 2.5px;display: block;color: #999999;font-size: 10px;">2017.03.22-2017.03.22</span>
        </div>


        <div class="yhq-right" v-on:click="lingqu(index)">
          <span>立即领取</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'

  export default {

    data(){
      return{
        dataAy:[
          {'url':require('../../assets/images/sys/ico_lingqu.png')},
          {'url':require('../../assets/images/sys/ico_lingqu.png')},
          {'url':require('../../assets/images/sys/ico_lingqu.png')},]
      }
    },

    created(){
      console.log('ligqu')
    },
    watch: {
      '$route' (to, from) {
        console.log(this.$route.path)
      }
    },
    methods:{

      jumptodetail:function (event) {
        console.log(event);
        this.$router.push({name:'yhqDetail',query:{'index':event,'type':'lingqu'}})
//        this.$router.push({path:'../yhqDetail/yhqDetail.vue'});

      },

      back:function () {
        this.$router.back();
      },

      lingqu:function (event) {
        console.log(event);
        alert('第'+event+'张优惠券领取成功')
      }
    },
    components:{
      'm-header':header
    }
  };
</script>
<style rel="stylesheet/stylus">

  .yhq-wraper{
    margin-top: 44px;
    width: 100%;
    background: white;
  }
  .yhq-item{
    background: #f5f5f5;
    padding: 10px;
    position: relative;
  }
  .img-item{
    height: 80px;
    width: 100%;
  }
  .yhq-left{
    position: absolute;
    left: 10px;
    top:10px;
    width: 60px;
    height: 80px;
    text-align: center;
  }
  .yhq-left >span{
    font-size: 14px;
    color: #ff0000;
    line-height: 80px;
  }
  .yhq-middle{
    position: absolute;
    left: 70px;
    top:10px;
    height: 80px;
    width: 150px;
    padding: 10px 0;
  }
  .yhq-middle >span{
    margin-top: 5px;
    height: 20px;
    line-height: 20px;
  }
  .yhq-right{
    position: absolute;
    right: 10px;
    top:10px;
    width: 90px;
    height: 80px;
    text-align: center;
  }
  .yhq-right >span{
    font-size: 14px;
    color: #ffffff;
    line-height: 80px;
    text-align: center;
  }
</style>
