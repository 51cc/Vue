<template>

  <div class="product-wraper1">

    <m-header title="产品详情" fixed :leftShow='true' :rightShow='true'>
      <img v-on:click="back" class="m-icon-img" src="../../assets/images/ic_bar_back_white.png" slot="left"/>
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
        </div>
      </div>
      <div class="product-detail-head-bottom">
        <span>运费8元</span>
        <span>销量255</span>
        <span>库存100</span>
      </div>
    </div>


    <div class="rule-style">
      <span>规格选择</span>
    </div>


    <div class="client-style">
        <img class="client-icon">
        <div :style="{width: (sWidth-40)+'px'}">
          <span style="font-size: 12px;text-align: left;display: block;margin-left: 5px;">北京开拓创想科技有限公司</span>
          <span style="font-size: 12px;text-align: left;display: block;margin-left: 5px;">山东济南历下山大路47号数码港大厦B901</span>
        </div>
    </div>

    <div class="rule-style">
      <span>用户评价</span>
    </div>

    <div class="rule-style">
      <span>图文详情</span>

    </div>


    <div class="bottom-wraper">
      <div style="width: 50%;display: flex;">
        <div class="bottom-icon-wraper" style="border-right: 1px solid #eeeeee;">
          <img class="bottom-icon" :src="kefuUrl">
          <span class="bottom-title">客服</span>
        </div>
        <div class="bottom-icon-wraper" style="border-right: 1px solid #eeeeee;">
          <img class="bottom-icon" :src="shoucangUrl">
          <span class="bottom-title">收藏</span>
        </div>
        <div class="bottom-icon-wraper" style="border-right: 1px solid #eeeeee;">
          <img class="bottom-icon" :src="gouwucheUrl">
          <span class="bottom-title">购物车</span>
        </div>
      </div>
      <div style="width: 50%;display: flex;line-height: 40px;">
        <div class="bottom-btn-wraper" style="background:#ff9429;">加入购物车</div>
        <div class="bottom-btn-wraper" style="background:#fc554a;" v-on:click="jumptoconfirmorder">立即购买</div>
      </div>
    </div>
  </div>


</template>
<script type="text/ecmascript-6">
  import header from '../header.vue'
  import Banner from '../Banner.vue' //导入Banner组件

  export default {
      components:{
        'm-header':header,
        'app-banner': Banner,
      },
      data(){
        return{

          sWidth:document.body.clientWidth,
          kefuUrl:require('../../assets/images/sys/b_kefu.png'),
          shoucangUrl:require('../../assets/images/sys/b_fav.png'),
          gouwucheUrl:require('../../assets/images/sys/b_shopcar.png'),
          arrowUrl:require('../../assets/images/sys/arrow_right.png'),
          listImg:[{url:require('../../assets/images/banner/01.jpg')},
            {url:require('../../assets/images/banner/01.jpg')},
            {url:require('../../assets/images/banner/01.jpg')}],
        }
      },
      created(){

        console.log('dataDetail: ' + this.$route.query.name)
        console.log('type: ' + this.$route.query.type)

      },
      methods:{
        back:function () {


          this.$router.go(-1);

        },
        jumptoconfirmorder:function () {

          this.$router.push({name:'confirmOrder'});

        }
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
    /*background: red;*/
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
