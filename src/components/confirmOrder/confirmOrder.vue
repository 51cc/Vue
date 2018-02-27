<template>
  <div class="confirm-order-wraper">
    <m-header title="订单结算" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/></a>
    </m-header>

    <div class="order-header-wraper">
      <span>收货人：李雨桐  15634883121</span>
      <span style="display: block;color: #999999;margin-top: 5px;">收获地址：山东济南历下山大路47号数码港大厦B1203</span>
    </div>

    <div v-for="(item,index) in dataAy" style="margin-top: 10px;background: white;width: 100%;">
        <div style="padding: 10px;border-bottom: 1px solid #eeeeee;">{{item.name}}</div>
        <div v-for="item in item.ay">
            <div class="pro-row-wraper">
                <img class="pro-img">
                <div style="padding: 10px;" :style="{width:(sWidth-90)+'px'}">
                  <div style="display: flex;">
                    <span style="float: left;width: 90%;">背心无袖袖中猖2017新款哈哈</span>
                    <span style="float: right;right: 0;width: 10%;text-align: right;">¥18</span>
                  </div>
                  <div style="display: flex;">
                    <span style="float: left;color: #999999;width: 90%;">颜色：黄色</span>
                    <span style="float: right;text-align: right;width: 10%;">x1</span>
                  </div>
                </div>
            </div>
        </div>
        <div style="display: flex;width: 100%;padding: 10px;border-bottom: 1px solid #eeeeee;">
          <span style="float: left;width: 85%;text-align: left;">快递费用:</span>
          <span style="float: right;width: 15%;text-align: right">¥8.000</span>
        </div>

        <div style="display: flex;width: 100%;padding: 10px;border-bottom: 1px solid #eeeeee;">
          <span style="float: left;width: 85%;text-align: left;">店铺优惠券:</span>
          <span style="float: right;width: 15%;color: #ff0000;text-align: right">0</span>
        </div>

        <div style="display: flex;width: 100%;padding: 10px;border-bottom: 1px solid #eeeeee;">
          <span style="float: left;width: 85%;text-align: left;">合计:</span>
          <span style="float: right;width: 15%;color: #ff0000;text-align: right">¥8.00</span>
        </div>
        <div style="padding: 10px;">
          <input v-model="message" placeholder="可填写20字以内的备注" style="padding:5px;width: 100%;height: 30px;background: #eeeeee;">
        </div>
    </div>



    <div class="bottom-wraper">
      <div class="bottom-left-wraper" style="width: 70%;padding-left: 10px;line-height: 40px;">
        <span>总价：</span><span style="color: #fc554a;">¥65元</span>
      </div>
      <div v-on:click="submite" class="bottom-left-wraper" style="width: 30%;background: #fc554a;color: #ffffff;text-align: center;line-height: 40px;">
        提交订单
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'

  export default {
    components:{
      'm-header':header
    },
    data(){
      return {
        message:'',
        sWidth:document.body.clientWidth,
        dataAy:[{name:'白兔女装店',ay:['','',]}]
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
      submite:function () {
        console.log();
      }
    },
    created(){

    },

  };
</script>
<style  rel="stylesheet/stylus">
  .confirm-order-wraper{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    padding-bottom: 40px;
  }
  .bottom-wraper{
    display: flex;
    width: 100%;
  }
  .bottom-left-wraper{

  }
  .order-header-wraper{
    margin-top: 44px;
    width: 100%;
    background: white;
    padding: 10px 5px 10px 5px;
    border-bottom: 1px solid #eeeeee;
  }
  .pro-row-wraper{
    width: 100%;
    border-bottom: 1px solid #eeeeee;
    background: white;
    padding: 5px;
    display: flex;
  }
  .pro-row-wraper >.pro-img{
    background: red;
    width: 80px;
    height: 80px;
  }
</style>
