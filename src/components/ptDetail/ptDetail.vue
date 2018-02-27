<template>
  <div style="background: #f5f5f5;">
    <m-header title="拼团详情" fixed :leftShow='true' :rightShow='true'>
      <a v-on:click="back" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/></a>
    </m-header>
    <app-banner :listImg="listImg" :height=sWidth*3/4 style="margin-top: 44px;"></app-banner>

    <div>
      <div class="product-detail-head-wraper">
         <span class="title">
          除螨机器人强势登录淘宝哈哈哈啊哈厚厚除螨机器人强势登录淘宝哈哈哈啊哈厚厚除螨
        </span>
        <div class="product-price-bottom">
          <span class="price">¥18.00</span>
          <span class="oldprice">原价:25.00</span>
          <span class="price" style="color: #999999;float: right;">5人团</span>
        </div>
      </div>

    </div>


    <div class="rule-style">
      <span>凑团</span>

    </div>



    <div class="rule-style">
      <span>图文详情</span>

    </div>


    <div class="bottom-wraper" style="width: 100%;">

      <div style="width: 100%;display: flex;line-height: 40px;">
        <div class="bottom-btn-wraper" style="background:#ff9429;" v-on:click="jumptoconfirmorder">¥200单独购买</div>
        <div class="bottom-btn-wraper" style="background:#fc554a;" v-on:click="jumptoconfirmorder">¥150一键拼团</div>
      </div>
    </div>
  </div>


</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'
  import Banner from '../Banner.vue' //导入Banner组件

  export default {
    data(){
      return{

        sWidth:document.body.clientWidth,
        arrowUrl:require('../../assets/images/sys/arrow_right.png'),
        listImg:[{url:require('../../assets/images/banner/01.jpg')},
          {url:require('../../assets/images/banner/01.jpg')},
          {url:require('../../assets/images/banner/01.jpg')}],
      }
    },
    methods:{
      back:function () {
        this.$router.go(-1);
      },
      jumptoconfirmorder:function () {
        this.$router.push({name:'confirmOrder'});

      }
    },
    created(){
      console.log('type: ' + this.$route.query.index)

    },
    components:{
      'm-header':header,
      'app-banner': Banner,

    }
  };
</script>
<style  rel="stylesheet/stylus">
  .product-wraper1{
    background: #f5f5f5;
    padding-bottom: 45px;
  }
  .bottom-wraper{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background: #ffffff;
    height: 40px;
    display: flex;
    border-top:1px solid #eeeeee;
  }
  .bottom-icon-wraper{
    flex: 1;
    text-align: center;
    padding: 5px;
  }
  .bottom-icon{
    width: 15px;
    height: 15px;
    background: red;
  }
  .bottom-title{
    display: block;
    font-size: 8px;
    color: #999999;
  }
  .bottom-btn-wraper{
    flex: 1;
    color: #ffffff;
    text-align: center;
  }
  .product-detail-head-wraper{
    padding: 5px;
    font-size: 0;
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #eeeeee;
  }
  .product-detail-head-wraper >.title{
    font-size: 14px;
    color: #444444;
  }
  .product-price-bottom{
    padding: 10px 0;
  }
  .product-price-bottom >.price{
    font-size: 12px;
    color: #ff0000;
  }
  .product-price-bottom >.oldprice{
    font-size: 12px;
    color: #999999;
    text-decoration: line-through;
    margin-left: 10px;
  }
  .product-detail-head-bottom{
    background: #ffffff;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #eeeeee;
  }
  .product-detail-head-bottom >span{
    flex: 1;
    font-size: 12px;
    color: #999999;
    text-align: center;
  }
  .rule-style{
    width: 100%;
    margin-top: 5px;
    padding: 10px;
    background: #ffffff;
  }

  .client-style{
    padding: 5px;
    margin-top: 5px;
    background: #ffffff;
    width: 100%;
    display: flex;
  }
  .client-icon{
    background: red;
    height: 40px;
    width: 40px;
    border-radius: 20px;
  }
</style>
