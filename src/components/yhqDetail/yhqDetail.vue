<template>
  <div class="b-wraper">

    <m-header title="优惠券详情" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div class="detail-wraper" :style="{ width:(sWidth-60)+'px'}">
      <span>某某商家优惠券</span>
      <span style="margin-top: 20px;font-size: 30px;color: #ff0000;">¥100</span>
      <span style="margin-top: 5px;color: #ff0000;">消费满100元立减5元</span>
      <span style="margin-top: 5px;font-size:8px;color: #999999;">有效期:2017.03.22-2017.04.05</span>
      <div style="color: #eeeeee;border-bottom: 1px dashed #eeeeee;margin-top: 20px;width: 100%;height: 1px;"></div>
      <span style="margin-top: 15px;color: #444444;font-weight: bold;text-align: left;">优惠券详情</span>
      <span v-for="(item,index) in instroduces" style="text-align: left;color: #999999;margin-top: 2.5px;">
        {{index+1}}、{{item}}
      </span>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'
  export default {
    data(){
      return{
        sWidth:document.body.clientWidth,
        sHeight:document.body.clientHeight,
        instroduces:['此优惠券仅限某某商家消费时使用。','限时抢购、拼团、积分兑换商品不可以使用优惠券。','优惠券最终解释权归默默小程序所有',],
        stype:''
      }
    },

    components:{
      'm-header':header
    },

    methods:{

      back:function () {

        this.$router.go(-1);
      }
    },
    created(){

      this.stype= this.$route.query.type;
       console.log('dataDetail: ' + this.$route.query.index);

    }
  }
</script>
<style  rel="stylesheet/stylus">
  .b-wraper{
    background: #f5f5f5;
    width: 100%;
    text-align: center;
  }
  .detail-wraper{
    padding: 20px 10px;
    text-align: center;
    background: #ffffff;
    height: 350px;
    margin: 100px 30px;
    position: fixed;
    box-shadow: 1.5px 1.5px 1.5px 1.5px #eeeeee;
  }
  .detail-wraper >span{
    display: block;
  }
</style>
