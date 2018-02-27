<template>
  <div style="background: #f5f5f5;">
    <m-header title="卡券" fixed :leftShow='true' :rightShow='true'>
      <a  v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>

    <div class="kq-wraper">

      <div v-for="item in products1" class="product-wraper-item2">
        <img :src="item.url" class="product-img" style="height: 80px;width: 80px;">
        <div :style="{width:(sWidth-105)+'px'}" style="height: 80px;margin-left: 5px;">
          <div style="margin-top: 10px;">
            <span class="product-title" style="margin-left:5px;height: 14px;line-height: 14px;">欧莱雅优欧莱雅优惠券</span>
            <span v-on:click="lingqu" class="product-title" style="height:20px;line-height:20px;padding:0 5px;font-size:8px;background:red;color:#ffffff;float:right;border-radius:5px;text-align: right;">领取</span>
          </div>
          <div style="display: flex;">
            <div>
              <span class="ico_style1"></span>
              <span class="product-title" style="margin-left:5px;height: 14px;line-height: 14px;color: #999999;">商家位置</span>
            </div>
            <div>
              <span class="ico_style2"></span>
              <span class="product-title" style="color:#999999;margin-left:5px;height: 14px;line-height: 14px;">联系商家</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'

  export  default {

      data(){
        return{

          sWidth:document.body.clientWidth,

          products1:[
            {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1250W只能IH',price:'12',oldprice:'1555',num:'9'},
            {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只50W只能IH电饭煲美的1250W只能IH',price:'12222',oldprice:'1555',num:'999'},
            {url:require('../../assets/images/tjsp/1.jpg'),name:'美的1250W只能IH电饭煲美的1250W只能IH',price:'1222',oldprice:'1555',num:'999'}
          ]
        }
      },
    methods:{
      lingqu:function () {
        alert('此功能限微信小程序中使用。')
      },
      back:function () {
        this.$router.go(-1);
      },
    },
    components:{
      'm-header':header
    }

  };
</script>
<style  rel="stylesheet/stylus">

  .kq-wraper{
    margin-top: 44px;
    width: 100%;
    background: white;
  }
  .product-wraper-item{
    width: 47%;
    margin-left: 2%;
    margin-bottom: 5px;
    font-size: 0;
    /*padding: 10px;*/
    border: 1px solid #eeeeee;
  }
  .product-img{
    width: 100%;
  }
  .product-title{
    display: inline-block;
    margin: 5px;
    font-size: 14px;
    text-align: left;
    color: #444444;
    line-height: 14px;
    height: 28px;
  }

  .product-wraper-item2{
    /*width: 100%;*/
    border-bottom: 1px solid #eeeeee;
    padding: 10px;
    display: flex;
  }
  .ico_style1{
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/dpj/address.png");
  }

  .ico_style2{
    display: inline-block;
    width: 14px;
    height: 14px;
    background-size: 14px 14px;
    background-repeat: no-repeat;
    background-image: url("../../assets/images/dpj/tel.png");
  }
</style>
